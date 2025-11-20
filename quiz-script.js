// Global state variables
let userAnswers = {};
let showingAnswers = false;
let answeredQuestions = new Set();
const STORAGE_KEY = 'osg202_quiz_state_' + document.title.replace(/\s+/g, '_');

// Auto-save state to localStorage
function saveState() {
    const state = {
        userAnswers: userAnswers,
        answeredQuestions: Array.from(answeredQuestions),
        timestamp: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// Load state from localStorage
function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            const state = JSON.parse(saved);
            userAnswers = state.userAnswers || {};
            answeredQuestions = new Set(state.answeredQuestions || []);
            return true;
        } catch (e) {
            console.error('Failed to load state:', e);
        }
    }
    return false;
}

// Clear saved state
function clearState() {
    localStorage.removeItem(STORAGE_KEY);
}

// Export results as JSON
function exportResults() {
    const results = {
        title: document.title,
        timestamp: new Date().toISOString(),
        totalQuestions: questions.length,
        answeredQuestions: answeredQuestions.size,
        correctAnswers: Array.from(answeredQuestions).filter(qId => {
            const question = questions.find(q => q.id === qId);
            const userAns = userAnswers[qId];
            if (question.type === 'multiple') {
                return JSON.stringify(userAns?.sort()) === JSON.stringify(question.answer.sort());
            }
            return userAns === question.answer;
        }).length,
        questions: questions.map(q => ({
            id: q.id,
            question: q.question,
            userAnswer: userAnswers[q.id],
            correctAnswer: q.answer,
            isCorrect: answeredQuestions.has(q.id) ? (
                q.type === 'multiple' 
                    ? JSON.stringify(userAnswers[q.id]?.sort()) === JSON.stringify(q.answer.sort())
                    : userAnswers[q.id] === q.answer
            ) : null
        }))
    };
    
    const blob = new Blob([JSON.stringify(results, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quiz_results_${new Date().getTime()}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function initQuiz() {
    // Tự động cập nhật tổng số câu hỏi
    document.getElementById('totalQuestions').textContent = questions.length;
    
    // Load saved state if exists
    const hasState = loadState();
    
    renderAllQuestions();
    
    // Restore UI state if data was loaded
    if (hasState) {
        restoreUIState();
    }
    
    updateScoreSummary();
}

// Restore UI state from loaded data
function restoreUIState() {
    Object.keys(userAnswers).forEach(questionId => {
        const qId = parseInt(questionId);
        const answer = userAnswers[qId];
        const question = questions.find(q => q.id === qId);
        
        if (question.type === 'multiple' && Array.isArray(answer)) {
            answer.forEach(idx => {
                const checkbox = document.getElementById(`q${qId}-opt${idx}`);
                if (checkbox) checkbox.checked = true;
            });
        } else if (typeof answer === 'number') {
            const radio = document.getElementById(`q${qId}-opt${answer}`);
            if (radio) radio.checked = true;
        }
        
        if (answeredQuestions.has(qId)) {
            showQuestionFeedback(qId);
            updateQuestionStatus(qId);
        }
    });
}

function renderAllQuestions() {
    const quizContent = document.getElementById('quizContent');
    
    quizContent.innerHTML = questions.map(question => `
        <div class="question-item" id="question-${question.id}">
            <div class="question-header">
                <div class="question-number">Câu ${question.id}</div>
                <div class="question-status" id="status-${question.id}">❓</div>
            </div>
            
            <div class="question-text">${question.question}</div>
            
            <div class="options-container">
                ${question.options.map((option, index) => `
                    <div class="option-item" onclick="selectOption(${question.id}, ${index})">
                        ${question.type === 'multiple' ? 
                            `<input type="checkbox" class="option-checkbox" id="q${question.id}-opt${index}" onchange="selectOption(${question.id}, ${index})">` :
                            `<input type="radio" name="q${question.id}" class="option-radio" id="q${question.id}-opt${index}" onchange="selectOption(${question.id}, ${index})">`
                        }
                        <label class="option-text" for="q${question.id}-opt${index}">
                            ${String.fromCharCode(65 + index)}. ${option}
                        </label>
                    </div>
                `).join('')}
            </div>
            
            <div class="question-actions">
                <button class="btn btn-primary btn-small" id="show-btn-${question.id}" onclick="toggleQuestionAnswer(${question.id})">
                    👁️ Hiện đáp án
                </button>
            </div>
            
            <div class="explanation" id="explanation-${question.id}">
                <h4><span class="icon">💡</span>Giải thích:</h4>
                <p>${question.explanation}</p>
            </div>
        </div>
    `).join('');
}

function selectOption(questionId, optionIndex) {
    // Prevent changes only if answer is currently shown
    const explanationElement = document.getElementById(`explanation-${questionId}`);
    if (explanationElement && explanationElement.classList.contains('show')) {
        return;
    }
    
    const question = questions.find(q => q.id === questionId);
    const questionElement = document.getElementById(`question-${questionId}`);
    const optionElement = document.getElementById(`q${questionId}-opt${optionIndex}`);
    
    if (showingAnswers) return;
    
    if (question.type === 'multiple') {
        // Handle multiple choice
        if (!userAnswers[questionId]) {
            userAnswers[questionId] = [];
        }
        
        if (optionElement.checked) {
            if (!userAnswers[questionId].includes(optionIndex)) {
                userAnswers[questionId].push(optionIndex);
            }
        } else {
            userAnswers[questionId] = userAnswers[questionId].filter(idx => idx !== optionIndex);
        }
        
        // Don't lock - allow user to change answers until they click Show Answer
    } else {
        // Handle single choice - just record the answer, don't lock
        userAnswers[questionId] = optionIndex;
    }
    
    updateQuestionStatus(questionId);
    updateScoreSummary();
    saveState(); // Auto-save after each interaction
}

function disableQuestionOptions(questionId) {
    const optionElements = document.querySelectorAll(`[id^="q${questionId}-opt"]`);
    optionElements.forEach(element => {
        element.disabled = true;
        element.parentElement.style.pointerEvents = 'none';
        element.parentElement.style.opacity = '0.7';
    });
}

function enableQuestionOptions(questionId) {
    const optionElements = document.querySelectorAll(`[id^="q${questionId}-opt"]`);
    optionElements.forEach(element => {
        element.disabled = false;
        element.parentElement.style.pointerEvents = 'auto';
        element.parentElement.style.opacity = '1';
    });
}

function showQuestionFeedback(questionId) {
    const question = questions.find(q => q.id === questionId);
    const explanationElement = document.getElementById(`explanation-${questionId}`);
    const isCorrect = checkAnswer(questionId);
    
    // Show explanation
    explanationElement.classList.add('show');
    
    // Update option styling to show correct/incorrect
    const optionElements = document.querySelectorAll(`[id^="q${questionId}-opt"]`);
    optionElements.forEach((element, index) => {
        const optionContainer = element.parentElement;
        optionContainer.classList.remove('correct', 'incorrect', 'user-selected', 'user-incorrect');
        
        // Remove existing indicators
        const existingIndicator = optionContainer.querySelector('.answer-indicator');
        if (existingIndicator) {
            existingIndicator.remove();
        }
        
        const userAnswer = userAnswers[questionId];
        const isUserSelection = question.type === 'multiple' ? 
            (userAnswer && userAnswer.includes(index)) : 
            (userAnswer === index);
        
        if (question.type === 'multiple') {
            const correctAnswers = Array.isArray(question.correct) ? question.correct : [question.correct];
            
            if (correctAnswers.includes(index)) {
                // This is a correct answer
                optionContainer.classList.add('correct');
                const indicator = document.createElement('span');
                indicator.className = 'answer-indicator correct-indicator';
                indicator.textContent = isUserSelection ? '✓ Đúng' : '✓ Đáp án đúng';
                optionContainer.appendChild(indicator);
            } else if (isUserSelection) {
                // User selected wrong answer
                optionContainer.classList.add('user-incorrect');
                const indicator = document.createElement('span');
                indicator.className = 'answer-indicator incorrect-indicator';
                indicator.textContent = '✗ Sai';
                optionContainer.appendChild(indicator);
            }
        } else {
            if (index === question.correct) {
                // This is the correct answer
                optionContainer.classList.add('correct');
                const indicator = document.createElement('span');
                indicator.className = 'answer-indicator correct-indicator';
                indicator.textContent = isUserSelection ? '✓ Đúng' : '✓ Đáp án đúng';
                optionContainer.appendChild(indicator);
            } else if (isUserSelection) {
                // User selected wrong answer
                optionContainer.classList.add('user-incorrect');
                const indicator = document.createElement('span');
                indicator.className = 'answer-indicator incorrect-indicator';
                indicator.textContent = '✗ Sai';
                optionContainer.appendChild(indicator);
            }
        }
    });
}

function hideQuestionFeedback(questionId) {
    const explanationElement = document.getElementById(`explanation-${questionId}`);
    explanationElement.classList.remove('show');
    
    // Remove feedback styling from options
    const optionElements = document.querySelectorAll(`[id^="q${questionId}-opt"]`);
    optionElements.forEach((element, index) => {
        const optionContainer = element.parentElement;
        optionContainer.classList.remove('correct', 'incorrect', 'user-selected', 'user-incorrect');
        
        // Remove existing indicators
        const existingIndicator = optionContainer.querySelector('.answer-indicator');
        if (existingIndicator) {
            existingIndicator.remove();
        }
    });
}

function updateQuestionStatus(questionId) {
    const question = questions.find(q => q.id === questionId);
    const statusElement = document.getElementById(`status-${questionId}`);
    const questionElement = document.getElementById(`question-${questionId}`);
    
    // Check if question is properly answered
    let isAnswered = false;
    if (question.type === 'multiple') {
        const correctAnswers = Array.isArray(question.correct) ? question.correct : [question.correct];
        isAnswered = userAnswers[questionId] && userAnswers[questionId].length === correctAnswers.length;
    } else {
        isAnswered = userAnswers[questionId] !== undefined;
    }
    
    if (isAnswered) {
        if (showingAnswers || hasQuestionFeedback(questionId)) {
            const isCorrect = checkAnswer(questionId);
            statusElement.textContent = isCorrect ? '✅' : '❌';
            questionElement.className = `question-item ${isCorrect ? 'answered' : 'incorrect'}`;
        } else {
            statusElement.textContent = '✏️';
            questionElement.className = 'question-item answered';
        }
    } else {
        statusElement.textContent = '❓';
        questionElement.className = 'question-item';
    }
}

function hasQuestionFeedback(questionId) {
    const explanationElement = document.getElementById(`explanation-${questionId}`);
    return explanationElement.classList.contains('show');
}

function checkAnswer(questionId) {
    const question = questions.find(q => q.id === questionId);
    const userAnswer = userAnswers[questionId];
    
    if (question.type === 'multiple') {
        if (!userAnswer || userAnswer.length === 0) return false;
        const correctAnswers = Array.isArray(question.correct) ? question.correct : [question.correct];
        return userAnswer.length === correctAnswers.length && 
               userAnswer.every(ans => correctAnswers.includes(ans));
    } else {
        return userAnswer === question.correct;
    }
}

function updateScoreSummary() {
    const answeredCount = Object.keys(userAnswers).filter(qId => {
        const question = questions.find(q => q.id == qId);
        const answer = userAnswers[qId];
        return answer !== undefined && 
               (question.type === 'single' || (question.type === 'multiple' && answer.length > 0));
    }).length;
    
    const correctCount = Object.keys(userAnswers).filter(qId => checkAnswer(parseInt(qId))).length;
    const percentage = answeredCount > 0 ? Math.round((correctCount / questions.length) * 100) : 0;
    
    document.getElementById('answeredCount').textContent = answeredCount;
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('scorePercentage').textContent = percentage + '%';
}

function showAllAnswers() {
    showingAnswers = true;
    
    questions.forEach(question => {
        const explanationElement = document.getElementById(`explanation-${question.id}`);
        explanationElement.classList.add('show');
        
        // Highlight correct answers only
        const optionElements = document.querySelectorAll(`[id^="q${question.id}-opt"]`);
        optionElements.forEach((element, index) => {
            const optionContainer = element.parentElement;
            optionContainer.classList.remove('correct', 'incorrect', 'selected', 'user-selected', 'user-incorrect');
            
            // Remove existing indicators
            const existingIndicator = optionContainer.querySelector('.answer-indicator');
            if (existingIndicator) {
                existingIndicator.remove();
            }
            
            if (question.type === 'multiple') {
                const correctAnswers = Array.isArray(question.correct) ? question.correct : [question.correct];
                if (correctAnswers.includes(index)) {
                    optionContainer.classList.add('correct');
                    const indicator = document.createElement('span');
                    indicator.className = 'answer-indicator correct-indicator';
                    indicator.textContent = '✓ Đúng';
                    optionContainer.appendChild(indicator);
                }
            } else {
                if (index === question.correct) {
                    optionContainer.classList.add('correct');
                    const indicator = document.createElement('span');
                    indicator.className = 'answer-indicator correct-indicator';
                    indicator.textContent = '✓ Đáp án đúng';
                    optionContainer.appendChild(indicator);
                }
            }
            
            // Disable further interactions
            element.disabled = true;
        });
        
        updateQuestionStatus(question.id);
    });
    
    updateScoreSummary();
}

function checkAllAnswers() {
    showingAnswers = true;
    
    questions.forEach(question => {
        const explanationElement = document.getElementById(`explanation-${question.id}`);
        explanationElement.classList.add('show');
        
        // Show user answers vs correct answers
        const optionElements = document.querySelectorAll(`[id^="q${question.id}-opt"]`);
        optionElements.forEach((element, index) => {
            const optionContainer = element.parentElement;
            optionContainer.classList.remove('correct', 'incorrect', 'selected', 'user-selected', 'user-incorrect');
            
            // Remove existing indicators
            const existingIndicator = optionContainer.querySelector('.answer-indicator');
            if (existingIndicator) {
                existingIndicator.remove();
            }
            
            const userAnswer = userAnswers[question.id];
            const isUserSelection = question.type === 'multiple' ? 
                (userAnswer && userAnswer.includes(index)) : 
                (userAnswer === index);
            
            if (question.type === 'multiple') {
                const correctAnswers = Array.isArray(question.correct) ? question.correct : [question.correct];
                
                if (correctAnswers.includes(index)) {
                    // This is a correct answer
                    optionContainer.classList.add('correct');
                    const indicator = document.createElement('span');
                    indicator.className = 'answer-indicator correct-indicator';
                    indicator.textContent = isUserSelection ? '✓ Đúng - Bạn đã chọn' : '✓ Đáp án đúng';
                    optionContainer.appendChild(indicator);
                } else if (isUserSelection) {
                    // User selected wrong answer
                    optionContainer.classList.add('user-incorrect');
                    const indicator = document.createElement('span');
                    indicator.className = 'answer-indicator incorrect-indicator';
                    indicator.textContent = '✗ Sai - Bạn đã chọn';
                    optionContainer.appendChild(indicator);
                }
            } else {
                if (index === question.correct) {
                    // This is the correct answer
                    optionContainer.classList.add('correct');
                    const indicator = document.createElement('span');
                    indicator.className = 'answer-indicator correct-indicator';
                    indicator.textContent = isUserSelection ? '✓ Đúng - Bạn đã chọn' : '✓ Đáp án đúng';
                    optionContainer.appendChild(indicator);
                } else if (isUserSelection) {
                    // User selected wrong answer
                    optionContainer.classList.add('user-incorrect');
                    const indicator = document.createElement('span');
                    indicator.className = 'answer-indicator incorrect-indicator';
                    indicator.textContent = '✗ Sai - Bạn đã chọn';
                    optionContainer.appendChild(indicator);
                }
            }
            
            // Disable further interactions
            element.disabled = true;
        });
        
        updateQuestionStatus(question.id);
    });
    
    updateScoreSummary();
}

function resetQuiz() {
    if (!confirm('Bạn có chắc muốn đặt lại tất cả? Dữ liệu đã lưu sẽ bị xóa.')) {
        return;
    }
    
    userAnswers = {};
    showingAnswers = false;
    answeredQuestions.clear();
    clearState(); // Clear localStorage
    
    // Reset all form elements
    document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
        input.checked = false;
        input.disabled = false;
        input.parentElement.style.pointerEvents = 'auto';
        input.parentElement.style.opacity = '1';
    });
    
    // Hide all explanations and feedback
    questions.forEach(question => {
        hideQuestionFeedback(question.id);
    });
    
    // Reset all option styling and remove indicators
    document.querySelectorAll('.option-item').forEach(option => {
        option.classList.remove('correct', 'incorrect', 'selected', 'user-selected', 'user-incorrect');
        const indicator = option.querySelector('.answer-indicator');
        if (indicator) {
            indicator.remove();
        }
    });
    
    // Update all question statuses
    questions.forEach(question => {
        updateQuestionStatus(question.id);
    });
    
    updateScoreSummary();
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', initQuiz);

// Toggle answer visibility for individual questions
function toggleQuestionAnswer(questionId) {
    const explanationElement = document.getElementById(`explanation-${questionId}`);
    const showBtn = document.getElementById(`show-btn-${questionId}`);
    
    if (explanationElement.classList.contains('show')) {
        // Hide answer and unlock options
        hideQuestionFeedback(questionId);
        answeredQuestions.delete(questionId);
        enableQuestionOptions(questionId);
        showBtn.textContent = '👁️ Hiện đáp án';
        showBtn.classList.remove('btn-secondary');
        showBtn.classList.add('btn-primary');
    } else {
        // Show answer and lock options
        answeredQuestions.add(questionId);
        disableQuestionOptions(questionId);
        showQuestionFeedback(questionId);
        showBtn.textContent = '🙈 Ẩn đáp án';
        showBtn.classList.remove('btn-primary');
        showBtn.classList.add('btn-secondary');
    }
}

// ==================== TIMER FUNCTIONALITY ====================
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;

function startTimer() {
    if (timerRunning) return;
    timerRunning = true;
    
    timerInterval = setInterval(() => {
        timerSeconds++;
        updateTimerDisplay();
    }, 1000);
    
    showNotification('Timer started!', 'success');
}

function pauseTimer() {
    if (!timerRunning) return;
    timerRunning = false;
    clearInterval(timerInterval);
    showNotification('Timer paused', 'info');
}

function resetTimerFunc() {
    timerRunning = false;
    clearInterval(timerInterval);
    timerSeconds = 0;
    updateTimerDisplay();
    const timerEl = document.getElementById('timer');
    if (timerEl) timerEl.className = 'timer';
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    const display = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const timerDisplay = document.getElementById('timer-display');
    if (timerDisplay) timerDisplay.textContent = display;
    
    const timerElement = document.getElementById('timer');
    if (timerElement) {
        if (timerSeconds > 1800) {
            timerElement.className = 'timer danger';
        } else if (timerSeconds > 900) {
            timerElement.className = 'timer warning';
        } else {
            timerElement.className = 'timer';
        }
    }
}

// ==================== NOTIFICATION SYSTEM ====================
function showNotification(message, type = 'info') {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.style.position = 'fixed';
    alert.style.top = '80px';
    alert.style.right = '20px';
    alert.style.zIndex = '1000';
    alert.style.minWidth = '250px';
    alert.style.background = type === 'success' ? '#c8e6c9' : type === 'error' ? '#f4c4c4' : '#ffe9c9';
    alert.style.border = '3px solid ' + (type === 'success' ? '#7fb069' : type === 'error' ? '#d45e5e' : '#d4793c');
    alert.style.borderRadius = '12px';
    alert.style.padding = '15px';
    alert.style.boxShadow = '3px 3px 0px #3e2731';
    alert.style.animation = 'slideDown 0.3s ease';
    alert.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <span>${message}</span>
            <button class="copy-btn" onclick="this.parentElement.parentElement.remove()" style="margin-left: 10px;">✖</button>
        </div>
    `;
    document.body.appendChild(alert);
    
    setTimeout(() => {
        if (alert.parentElement) {
            alert.remove();
        }
    }, 3000);
}

// ==================== COPY FUNCTIONALITY ====================
function copyQuestionCard(questionId, event) {
    const question = questions.find(q => q.id === questionId);
    if (!question) {
        showNotification('Question not found', 'error');
        return;
    }
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = question.question;
    const cleanQuestion = tempDiv.textContent || tempDiv.innerText;
    
    let textToCopy = `Question ${questionId}: ${cleanQuestion}\n\n`;
    textToCopy += 'Options:\n';
    question.options.forEach((opt, idx) => {
        const letter = String.fromCharCode(65 + idx);
        tempDiv.innerHTML = opt;
        const cleanOpt = tempDiv.textContent || tempDiv.innerText;
        textToCopy += `${letter}. ${cleanOpt}\n`;
    });
    
    textToCopy += '\nCorrect Answer: ';
    if (Array.isArray(question.correct)) {
        textToCopy += question.correct.map(i => String.fromCharCode(65 + i)).join(', ');
    } else {
        textToCopy += String.fromCharCode(65 + question.correct);
    }
    
    if (question.explanation) {
        tempDiv.innerHTML = question.explanation;
        const cleanExplanation = tempDiv.textContent || tempDiv.innerText;
        textToCopy += `\n\nExplanation: ${cleanExplanation}`;
    }
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        showNotification('Question copied! 📋', 'success');
        
        if (event && event.target) {
            const btn = event.target;
            const originalText = btn.textContent;
            btn.textContent = '✅ Copied!';
            btn.classList.add('copied');
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove('copied');
            }, 2000);
        }
    }).catch(err => {
        showNotification('Failed to copy question', 'error');
        console.error('Copy failed:', err);
    });
}

function copyCode(elementId, event) {
    const codeElement = document.getElementById(elementId);
    if (!codeElement) return;
    
    let textToCopy = codeElement.textContent || codeElement.innerText;
    textToCopy = textToCopy.replace(/📋 Copy Code/g, '').trim();
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        showNotification('Code copied to clipboard!', 'success');
        
        if (event && event.target) {
            const btn = event.target;
            const originalText = btn.textContent;
            btn.textContent = '✅ Copied!';
            btn.classList.add('copied');
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove('copied');
            }, 2000);
        }
    }).catch(err => {
        showNotification('Failed to copy code', 'error');
    });
}

// ==================== RANDOMIZE FUNCTIONALITY ====================
function randomizeQuiz() {
    if (!confirm('Randomize quiz? This will reset your progress.')) {
        return;
    }
    
    userAnswers = {};
    showingAnswers = false;
    answeredQuestions.clear();
    clearState();
    
    // Shuffle questions array
    questions.sort(() => Math.random() - 0.5);
    
    // Re-assign IDs to maintain consistency
    questions.forEach((q, idx) => {
        q.id = idx + 1;
    });
    
    // Re-render
    renderAllQuestions();
    updateScoreSummary();
    showNotification('Quiz randomized!', 'success');
}

function shuffle(array) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

// ==================== SEARCH/FILTER FUNCTIONALITY ====================
function filterQuestions() {
    const searchBar = document.getElementById('search-bar');
    if (!searchBar) return;
    
    const searchText = searchBar.value.toLowerCase();
    let visibleCount = 0;
    
    questions.forEach(question => {
        const questionElement = document.getElementById(`question-${question.id}`);
        if (!questionElement) return;
        
        const questionText = question.question.toLowerCase();
        const optionsText = question.options.join(' ').toLowerCase();
        const explanationText = (question.explanation || '').toLowerCase();
        
        const matches = questionText.includes(searchText) || 
                       optionsText.includes(searchText) || 
                       explanationText.includes(searchText);
        
        if (matches) {
            questionElement.style.display = 'block';
            visibleCount++;
        } else {
            questionElement.style.display = 'none';
        }
    });
    
    const countElement = document.getElementById('count');
    if (countElement) {
        countElement.textContent = visibleCount;
    }
}

// Initialize search if search bar exists
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    if (searchBar) {
        searchBar.addEventListener('input', filterQuestions);
    }
});
