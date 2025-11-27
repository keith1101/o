// Questions data for Fall 2024 Final Exam
const questions = [
// ========== CÂU HỎI 1 ==========
{
    id: 1,
    question: "The operating system can be viewed as a resource manager and as an extended machine. From the extended machine perspective, what functions does the system provide to make it easier for users to interact with the machine?",
    options: [
        "Provides users with abstract information.",
        "Provides users with progress information.",
        "Provides users with memory information.",
        "Provides users with drive information."
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì từ góc độ máy mở rộng, hệ điều hành cung cấp thông tin trừu tượng để giúp người dùng tương tác dễ dàng hơn với máy tính."
},

// ========== CÂU HỎI 2 ==========
{
    id: 2,
    question: "Which early operating system was designed for the UNIVAC I computer and is considered one of the first operating systems?",
    options: [
        "MS-DOS",
        "UNIX",
        "COBOL",
        "EDVAC"
    ],
    correct: 3,
    type: "single",
    explanation: "Đáp án D đúng vì EDVAC được thiết kế cho máy tính UNIVAC I và được coi là một trong những hệ điều hành đầu tiên."
},

// ========== CÂU HỎI 3 ==========
{
    id: 3,
    question: "What happens to the program counter after an instruction is fetched?",
    options: [
        "It is reset to zero.",
        "It is updated to point to the next instruction.",
        "It stores the result of the instruction.",
        "It stores the total length of the program being executed."
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì sau khi lấy lệnh, bộ đếm chương trình được cập nhật để trỏ đến lệnh tiếp theo."
},

// ========== CÂU HỎI 4 ==========
{
    id: 4,
    question: "What is the primary responsibility of modern operating systems?",
    options: [
        "Designing computer hardware components.",
        "Managing and coordinating hardware resources.",
        "Developing software applications.",
        "Enhancing users' browsing experience."
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì trách nhiệm chính của hệ điều hành hiện đại là quản lý và phối hợp tài nguyên phần cứng."
},

// ========== CÂU HỎI 5 ==========
{
    id: 5,
    question: "Which type of operating system is designed to run on systems with multiple CPUs (multi-processor, multi-core, or multi-chip systems)?",
    options: [
        "Embedded OS",
        "Multiprocessor OS",
        "PC OS",
        "Server OS"
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì hệ điều hành đa xử lý được thiết kế để chạy trên hệ thống có nhiều CPU."
},

// ========== CÂU HỎI 6 ==========
{
    id: 6,
    question: "Since operating systems closely interact with hardware, knowing hardware basics is useful. Computers consist of processors, memory, and I/O devices. Which of the following is NOT part of the operating system?",
    options: [
        "Performance monitor",
        "Input/Output control program",
        "Job control program",
        "Supervisor"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì Performance monitor không phải là thành phần của hệ điều hành."
},

// ========== CÂU HỎI 7 ==========
{
    id: 7,
    question: "In Unix, which POSIX system call is used to create a new process?",
    options: [
        "fork",
        "create",
        "new",
        "CreateProcess"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì trong Unix, lời gọi hệ thống fork được sử dụng để tạo một tiến trình mới."
},

// ========== CÂU HỎI 8 ==========
{
    id: 8,
    question: "In the FIFO page replacement algorithm, which data structure is commonly used to implement the page replacement queue?",
    options: [
        "Stack",
        "Queue",
        "Linked list",
        "Array"
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì thuật toán thay thế trang FIFO sử dụng cấu trúc dữ liệu hàng đợi (Queue)."
},

// ========== CÂU HỎI 9 ==========
{
    id: 9,
    question: "What are the basic states of a process?",
    options: [
        "Running, Ready, and Blocked",
        "Running, Blocked, and Exit",
        "Create, Running, and Exit",
        "Create, Running, and Blocked"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì các trạng thái cơ bản của một tiến trình là Running (đang chạy), Ready (sẵn sàng) và Blocked (bị chặn)."
},

// ========== CÂU HỎI 10 ==========
{
    id: 10,
    question: "A computer has 4GB of RAM, with 2GB used by the operating system. Each process requires 1024MB of memory and behaves identically. If processes are idle and waiting for I/O 50% of the time, what is the CPU utilization percentage?",
    options: [
        "75%",
        "90%",
        "1%",
        "50%"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng. Tính toán: Bộ nhớ khả dụng = 4GB - 2GB = 2GB = 2048MB. Số process có thể chạy = 2048MB / 1024MB = 2 process. CPU utilization = 1 - (0.5)^2 = 1 - 0.25 = 0.75 = 75%."
},

// ========== CÂU HỎI 11 ==========
{
    id: 11,
    question: "Which of the following is a component of an operating system?",
    options: [
        "Process Management",
        "Speed Management",
        "Space Management",
        "Time Management"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì Quản lý tiến trình là một thành phần của hệ điều hành."
},

// ========== CÂU HỎI 12 ==========
{
    id: 12,
    question: "Which of the following best describes the relationship between threads within a single process?",
    options: [
        "Threads are completely independent and do not share any resources.",
        "Threads share the same memory space but have their own registers.",
        "Threads are separate and isolated from one another.",
        "Threads are tightly integrated and each has its own memory space."
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì các thread trong cùng một process chia sẻ không gian bộ nhớ nhưng có các thanh ghi riêng."
},

// ========== CÂU HỎI 13 ==========
{
    id: 13,
    question: "When a process is running in a contention zone and no other processes are allowed to run in the same zone, what is this condition called?",
    options: [
        "Mutual exclusion",
        "Bounded-waiting",
        "Progress",
        "Critical exclusion"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì đây là điều kiện loại trừ lẫn nhau (Mutual exclusion)."
},

// ========== CÂU HỎI 14 ==========
{
    id: 14,
    question: "What does the operating system do to execute a new process?",
    options: [
        "Provide immediate CPU for the process",
        "Deliver the required resources to the process",
        "Create a Process Control Block (PCB) for the process",
        "Provide immediate registers for the process"
    ],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng vì hệ điều hành tạo Process Control Block (PCB) để thực thi một tiến trình mới."
},

// ========== CÂU HỎI 15 ==========
{
    id: 15,
    question: "Which bit in a page table entry indicates the types of access that are permitted?",
    options: [
        "Present/absent bit",
        "Caching disabled",
        "Protection bit",
        "Modified bit"
    ],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng vì Protection bit chỉ ra các loại truy cập được phép."
},

// ========== CÂU HỎI 16 ==========
{
    id: 16,
    question: "In the Dining Philosophers problem, what do the philosophers represent?",
    options: [
        "Real-world philosophers dining in a restaurant",
        "Concurrent processes competing for shared resources",
        "Philosophical concepts unrelated to computing",
        "A type of computer virus"
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì trong bài toán Triết gia ăn tối, các triết gia đại diện cho các tiến trình đồng thời cạnh tranh tài nguyên dùng chung."
},

// ========== CÂU HỎI 17 ==========
{
    id: 17,
    question: "What is the role of the Memory Management Unit (MMU) in a computer system?",
    options: [
        "The MMU translates virtual addresses into physical addresses",
        "It controls the allocation of memory to processes",
        "It manages paging and swapping of memory pages",
        "It is a data structure used for virtual memory management"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì MMU chuyển đổi địa chỉ ảo thành địa chỉ vật lý."
},

// ========== CÂU HỎI 18 ==========
{
    id: 18,
    question: "Suppose there are 4 memory blocks (B1: 600K, B2: 500K, B3: 200K, B4: 300K) and 4 processes (P1: 250K, P2: 420K, P3: 150K, P4: 450K). Using the best-fit algorithm, which memory blocks will the processes be allocated?",
    options: [
        "P1 → B4, P2 → B2, P3 → B3, P4 → B1",
        "P1 → B4, P2 → B1, P3 → B3, P4 → B2",
        "P1 → B1, P2 → B2, P3 → B4, P4: none allocated",
        "P1 → B1, P2 → B2, P3 → B3, B4: none allocated"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng. Best-fit: P1(250K) → B4(300K), P2(420K) → B2(500K), P3(150K) → B3(200K), P4(450K) → B1(600K)."
},

// ========== CÂU HỎI 19 ==========
{
    id: 19,
    question: "In virtual memory systems, what were programs split into during the 1960s?",
    options: [
        "Overlays",
        "Pages",
        "Page tables",
        "Page faults"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì trong những năm 1960, các chương trình được chia thành các overlay."
},

// ========== CÂU HỎI 20 ==========
{
    id: 20,
    question: "Which statement best describes the function of virtual memory in the Windows operating system?",
    options: [
        "Virtual memory is used to store temporary files to free up RAM.",
        "Virtual memory extends addressable space by combining RAM and hard disk space.",
        "Virtual memory is a hard disk area reserved for system files.",
        "Virtual memory manages display settings for multiple monitors."
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì bộ nhớ ảo mở rộng không gian địa chỉ bằng cách kết hợp RAM và không gian đĩa cứng."
},

// ========== CÂU HỎI 21 ==========
{
    id: 21,
    question: "Which scenario would the FIFO (First-In-First-Out) page replacement algorithm suffer from the 'Belady's Anomaly'?",
    options: [
        "When the number of frames allocated to a process exceeds the number of pages",
        "When the number of frames allocated to a process is less than the number of pages",
        "When the number of frames allocated to a process remains constant over time",
        "When the number of frames allocated to a process varies randomly"
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì Belady's Anomaly xảy ra khi số khung trang được cấp phát cho một tiến trình ít hơn số trang."
},

// ========== CÂU HỎI 22 ==========
{
    id: 22,
    question: "If FIFO page replacement algorithm is used with four page frames, how many page faults will occur with the reference string 0172327103 if the four frames are initially empty?",
    options: [
        "4 Pages",
        "5 Pages",
        "6 Pages",
        "7 Pages"
    ],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng. Tính toán với chuỗi tham chiếu 0172327103 và 4 khung trang sẽ cho 6 lỗi trang."
},

// ========== CÂU HỎI 23 ==========
{
    id: 23,
    question: "What is the primary disadvantage of using a fixed-size page table in a paging system?",
    options: [
        "It limits the number of pages a process can have.",
        "It results in excessive memory consumption.",
        "It requires a complex page replacement algorithm.",
        "It leads to inefficient page allocation."
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì bảng trang kích thước cố định có nhược điểm chính là tiêu thụ bộ nhớ quá mức."
},

// ========== CÂU HỎI 24 ==========
{
    id: 24,
    question: "Which of the following best describes the difference between a process and a thread in the context of the Windows operating system?",
    options: [
        "A process contains multiple threads and shares resources, while a thread is an independent execution unit within a process.",
        "A process is a program in execution, while a thread is a sequence of instructions that can execute independently.",
        "A process and a thread are essentially the same in Windows OS, with no significant difference between them.",
        "A process represents system resources, while a thread is responsible for user interface interactions in Windows OS."
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì một process chứa nhiều thread và chia sẻ tài nguyên, còn thread là đơn vị thực thi độc lập trong một process."
},

// ========== CÂU HỎI 25 ==========
{
    id: 25,
    question: "What is segmentation with paging, and how does it enhance memory management?",
    options: [
        "A technique for managing multiple memory segments simultaneously.",
        "A method that combines the flexibility of segmentation with the efficiency of paging.",
        "A scheme that uses fixed-size pages to allocate memory.",
        "A scheduling algorithm for thread management."
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì phân đoạn với phân trang kết hợp tính linh hoạt của phân đoạn với hiệu quả của phân trang."
},

// ========== CÂU HỎI 26 ==========
{
    id: 26,
    question: "In UNIX, which type of file is used to model disks?",
    options: [
        "Regular files.",
        "Character special files.",
        "Block special files.",
        "Directories."
    ],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng vì trong UNIX, block special files được sử dụng để mô hình hóa đĩa."
},

// ========== CÂU HỎI 27 ==========
{
    id: 27,
    question: "What is the state of the file when the process finishes and this file can be accessed by other processes?",
    options: [
        "Exit",
        "Terminate",
        "Exist",
        "Suspend"
    ],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng vì trạng thái của file là Exist (tồn tại) khi process kết thúc và file có thể được truy cập bởi các process khác."
},

// ========== CÂU HỎI 28 ==========
{
    id: 28,
    question: "In a file's metadata, what information does the file size typically represent?",
    options: [
        "The physical size of the storage medium.",
        "The number of characters in the file.",
        "The number of pages in the file.",
        "The amount of space the file occupies on the storage medium."
    ],
    correct: 3,
    type: "single",
    explanation: "Đáp án D đúng vì kích thước file trong metadata thường biểu thị lượng không gian mà file chiếm trên thiết bị lưu trữ."
},

// ========== CÂU HỎI 29 ==========
{
    id: 29,
    question: "When a directory has been read, it should be closed to free up internal table space. Which function is used?",
    options: [
        "Close",
        "Closedir",
        "Delete",
        "Opendir"
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì hàm closedir được sử dụng để đóng thư mục sau khi đọc."
},

// ========== CÂU HỎI 30 ==========
{
    id: 30,
    question: "When the computer is booted, what is used to read in and execute?",
    options: [
        "BIOS, Boot Block",
        "CPU, BIOS",
        "BIOS, MBR",
        "MBR, BIOS"
    ],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng vì khi máy tính khởi động, BIOS và MBR được sử dụng để đọc và thực thi."
},

// ========== CÂU HỎI 31 ==========
{
    id: 31,
    question: "In file sharing, B links to one of C's files by creating a new file of type LINK in B's directory. This file contains the path to the original file. When B accesses the linked file, the system reads the actual file by following the path. Which type of file sharing is described?",
    options: [
        "Synchronous Linking",
        "Symbolic Linking",
        "Traditional (Hard) Linking",
        "Synthetic Linking"
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì đây là mô tả của liên kết tượng trưng (Symbolic Linking)."
},

// ========== CÂU HỎI 32 ==========
{
    id: 32,
    question: "Which file access method is often used to optimize access to large files?",
    options: [
        "Sequential access",
        "Direct access",
        "Indexed access",
        "Linked access"
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì truy cập trực tiếp (Direct access) thường được sử dụng để tối ưu hóa truy cập các file lớn."
},

// ========== CÂU HỎI 33 ==========
{
    id: 33,
    question: "In Windows 95, with a FAT-32 file system and a block size of 16 KB, what is the maximum partition size?",
    options: [
        "1 TB",
        "2 TB",
        "512 MB",
        "128 MB"
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì với FAT-32 và kích thước block 16 KB, kích thước partition tối đa là 2 TB."
},

// ========== CÂU HỎI 34 ==========
{
    id: 34,
    question: "An interrupt has the following properties: The Program Counter (PC) is saved. Instructions before the PC have completed. No instruction beyond the PC has finished. The execution state at the PC is known. What type of interrupt is this?",
    options: [
        "Imprecise interrupt",
        "Synchronous interrupt",
        "Sequential interrupt",
        "Precise interrupt"
    ],
    correct: 3,
    type: "single",
    explanation: "Đáp án D đúng vì đây là mô tả của ngắt chính xác (Precise interrupt)."
},

// ========== CÂU HỎI 35 ==========
{
    id: 35,
    question: "What type of addresses are typically used by DMA (Direct Memory Access) controllers during transmission?",
    options: [
        "Logical memory",
        "Abstract memory",
        "Virtual memory",
        "Physical memory"
    ],
    correct: 3,
    type: "single",
    explanation: "Đáp án D đúng vì bộ điều khiển DMA sử dụng địa chỉ bộ nhớ vật lý trong quá trình truyền dữ liệu."
},

// ========== CÂU HỎI 36 ==========
{
    id: 36,
    question: "For which type of operations is DMA most useful?",
    options: [
        "Transferring large and fast data between memory and I/O devices",
        "Transferring large and slow data between memory and I/O devices",
        "Transferring slow and small data between memory and I/O devices",
        "Transferring small data between memory and cache or I/O devices"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì DMA hữu ích nhất cho việc chuyển dữ liệu lớn và nhanh giữa bộ nhớ và thiết bị I/O."
},

// ========== CÂU HỎI 37 ==========
{
    id: 37,
    question: "In device-independent I/O software, what happens to characters arriving while the page containing the user buffer is still being loaded from the disk?",
    options: [
        "The buffer is full, no place to store them",
        "The buffer is ready, space is available to store them",
        "The buffer is clear, space is available to store them"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì khi trang chứa buffer người dùng đang được tải từ đĩa, buffer đầy và không có chỗ để lưu trữ ký tự đến."
},

// ========== CÂU HỎI 38 ==========
{
    id: 38,
    question: "During a search for cylinder 11, new requests appear for cylinders 1, 36, 16, 34, 9, and 12. Using SSF (Shortest Seek First) scheduling, what is the total number of head movements?",
    options: [
        "61",
        "111",
        "60",
        "108"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng. Tính toán với SSF từ cylinder 11: 12(1), 9(3), 16(7), 1(15), 34(33), 36(2) → Tổng: 1+3+7+15+33+2 = 61."
},

// ========== CÂU HỎI 39 ==========
{
    id: 39,
    question: "Which of the following is NOT a typical responsibility of Clock Software?",
    options: [
        "Maintaining the time of day",
        "Helping processes run longer than allowed",
        "Accounting for CPU usage",
        "Handling alarm system calls",
        "Profiling, monitoring, and collecting statistics"
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì giúp các tiến trình chạy lâu hơn cho phép KHÔNG phải là trách nhiệm điển hình của Clock Software."
},

// ========== CÂU HỎI 40 ==========
{
    id: 40,
    question: "In bitmap image processing, what does each bit usually represent?",
    options: [
        "A single pixel's color",
        "A sequence of characters",
        "A data packet in network transmission",
        "A unit of storage capacity"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì trong xử lý ảnh bitmap, mỗi bit thường đại diện cho màu của một pixel."
},

// ========== CÂU HỎI 41 ==========
{
    id: 41,
    question: "The first general-purpose electronic computer, the ENIAC, had 18,000 vacuum tubes and consumed how many watts of power?",
    options: [
        "1,400,000",
        "140,000",
        "14,000",
        "1,400"
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì ENIAC tiêu thụ 140,000 watt năng lượng."
},

// ========== CÂU HỎI 42 ==========
{
    id: 42,
    question: "What is a nonpreemptable resource?",
    options: [
        "Can be taken away from its owner with potentially causing failure.",
        "Cannot be taken away from its owner with potentially causing failure.",
        "Can be taken away from its owner without potentially causing failure.",
        "Cannot be taken away from its owner without potentially causing failure."
    ],
    correct: 3,
    type: "single",
    explanation: "Đáp án D đúng vì tài nguyên không thể chiếm đoạt là tài nguyên không thể lấy khỏi chủ sở hữu mà không gây ra lỗi tiềm ẩn."
},

// ========== CÂU HỎI 43 ==========
{
    id: 43,
    question: "If a process has begun to burn a Blu-ray disc, and suddenly the Blu-ray recorder is taken away and given to another process, the disc becomes garbled. What does this indicate?",
    options: [
        "It's an Un-preemptable resource",
        "It's a Preemptable resource",
        "It's a Non-sharable resource",
        "It's a Non-preemptable resource"
    ],
    correct: 3,
    type: "single",
    explanation: "Đáp án D đúng vì đây là tài nguyên không thể chiếm đoạt (Non-preemptable resource)."
},

// ========== CÂU HỎI 44 ==========
{
    id: 44,
    question: "In deadlock, what is the no-preemption condition?",
    options: [
        "Processes holding resources can request new ones.",
        "Resources already granted cannot be forcibly taken; they must be released voluntarily.",
        "There must be a circular list of processes waiting on each other.",
        "Each resource is assigned to exactly one process or is available."
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì điều kiện không chiếm đoạt trong deadlock có nghĩa là tài nguyên đã được cấp phát không thể bị lấy đi một cách cưỡng chế."
},

// ========== CÂU HỎI 45 ==========
{
    id: 45,
    question: "Which deadlock condition is described by: 'Each resource is either assigned to exactly one process or is available'?",
    options: [
        "Mutual exclusion",
        "Hold-and-wait",
        "No-preemption",
        "Circular wait"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì đây là mô tả của điều kiện loại trừ lẫn nhau (Mutual exclusion) trong deadlock."
},

// ========== CÂU HỎI 46 ==========
{
    id: 46,
    question: "What is the Ostrich algorithm?",
    options: [
        "A deadlock recovery algorithm",
        "A deadlock handling algorithm",
        "A deadlock detection algorithm",
        "A deadlock avoidance algorithm"
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì thuật toán Ostrich là một thuật toán xử lý deadlock."
},

// ========== CÂU HỎI 47 ==========
{
    id: 47,
    question: "Which tool is used for both deadlock detection & recovery and deadlock avoidance?",
    options: [
        "Resource Request Matrix",
        "Resource Allocation Matrix",
        "Resource Graph",
        "Pie chart"
    ],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng vì Resource Graph được sử dụng cho cả phát hiện & phục hồi deadlock và tránh deadlock."
},

// ========== CÂU HỎI 48 ==========
{
    id: 48,
    question: "Who developed the Banker's algorithm?",
    options: [
        "Dijkstra",
        "Zobel",
        "Newton",
        "Ostrich"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì Dijkstra phát triển thuật toán Banker."
},

// ========== CÂU HỎI 49 ==========
{
    id: 49,
    question: "Which condition, if not present, helps prevent deadlocks?",
    options: [
        "Mutual exclusion",
        "Hold and wait",
        "No preemption",
        "Circular wait"
    ],
    correct: 3,
    type: "single",
    explanation: "Đáp án D đúng vì nếu điều kiện chờ đợi vòng tròn (Circular wait) không tồn tại thì sẽ giúp ngăn chặn deadlock."
},

// ========== CÂU HỎI 50 ==========
{
    id: 50,
    question: "What problem is closely related to deadlock and livelock?",
    options: [
        "Starvation",
        "Communication",
        "Two-phase locking",
        "Prevention"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì Starvation (đói tài nguyên) có liên quan chặt chẽ đến deadlock và livelock."
}
];
