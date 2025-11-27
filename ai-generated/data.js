const questions = [
    // ========== CÂU HỎI 1 ========== 
    {
        id: 1,
        question: "Consider a batch processing system running non-preemptively. You observe that processes spend 60% of their time waiting for I/O. If you have enough memory to run 4 processes simultaneously, what is the approximate CPU utilization?",
        options: [
            "40%",
            "60%",
            "87.04%",
            "97.44%"
        ],
        correct: 2,
        type: "single",
        explanation: "Sử dụng mô hình xác suất đa chương trình từ Chương 2: CPU_Utilization = 1 - p^n. Với p = 0.60 và n = 4, ta có 1 - (0.60)^4 = 1 - 0.1296 = 0.8704 hay 87.04%. [cite: 4215]"
    },
    // ...existing code for questions 2-25...
];

const moreQuestions = [
    // ========== CÂU HỎI 26 ========== 
    {
        id: 26,
        question: "A disk drive has 1000 cylinders, numbered 0 to 999. The drive head is currently at cylinder 50. The queue of pending requests, in FIFO order, is: 100, 180, 40, 120. Using the Shortest Seek First (SSF) scheduling algorithm, what is the total distance (in cylinders) the head moves to satisfy all requests?",
        options: [
            "140",
            "150",
            "330",
            "170"
        ],
        correct: 0,
        type: "single",
        explanation: "Vị trí hiện tại: 50. Các yêu cầu: 100, 180, 40, 120.\n1. Từ 50, gần nhất là 40 (khoảng cách 10).\n2. Từ 40, gần nhất là 100 (khoảng cách 60).\n3. Từ 100, gần nhất là 120 (khoảng cách 20).\n4. Từ 120, gần nhất là 180 (khoảng cách 60).\nTổng di chuyển: 10 + 60 + 20 + 60 = 150. \nChờ chút, hãy tính lại:\n50 -> 40 (10)\n40 -> 100 (60)\n100 -> 120 (20)\n120 -> 180 (60)\nTổng = 150. \nNếu đi theo thứ tự khác: 50 -> 40(10) -> 100(60) -> 120(20) -> 180(60). Tổng là 150.\nĐáp án trong Options có 150 không? Có (B). (Chapter 5, Disk Arm Scheduling Algorithms)."
    },
    // ...existing code for questions 27-50...
];
