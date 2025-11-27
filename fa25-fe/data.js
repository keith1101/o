const questions = [
  {
    id: 1,
    question: "__________ is programmed at the factory and cannot be changed afterward.",
    options: [
      "RAM",
      "ROM",
      "EEPROM",
      "CMOS"
    ],
    correct: 1, // ROM
    type: "single",
    explanation: "ROM (Read-Only Memory) được nạp dữ liệu từ khi sản xuất tại nhà máy và không thể thay đổi sau đó (khác với EEPROM hay RAM có thể ghi đè)."
  },
  {
    id: 2,
    question: "What is the purpose of the TRAP instruction in the execution of a system call?",
    options: [
      "To switch from user mode to kernel mode.",
      "To call a function from the library.",
      "To determine a specific address in memory for the kernel to handle the request.",
      "To check the input parameters before execution."
    ],
    correct: 0, // A
    type: "single",
    explanation: "Lệnh TRAP (hoặc software interrupt) được sử dụng để chuyển quyền điều khiển từ chế độ người dùng (user mode) sang chế độ nhân (kernel mode) để thực thi system call."
  },
  {
    id: 3,
    question: "Processes in UNIX have their memory divided up into three segments: the Data segment, the Stack segment and the __________.",
    options: [
      "Text segment",
      "Heap segment",
      "Program segment",
      "None of these above"
    ],
    correct: 0, // Text segment
    type: "single",
    explanation: "Cấu trúc bộ nhớ của một tiến trình UNIX bao gồm: Text segment (chứa mã lệnh), Data segment (dữ liệu toàn cục) và Stack segment."
  },
  {
    id: 4,
    question: "If a process fails, most operating systems write the error information to a __________.",
    options: [
      "new file",
      "old file",
      "another running process",
      "log file"
    ],
    correct: 3, // log file
    type: "single",
    explanation: "Hệ điều hành thường ghi thông tin lỗi vào log file để quản trị viên hoặc người dùng có thể kiểm tra nguyên nhân sự cố."
  },
  {
    id: 5,
    question: "Which system supports multiple processes and helps manage various activities on a user PC?",
    options: [
      "Multiprocessing system",
      "Multitasking system",
      "Single-tasking system",
      "Distributed system"
    ],
    correct: 1, // Multitasking system
    type: "single",
    explanation: "Hệ điều hành đa nhiệm (Multitasking) cho phép thực hiện nhiều tác vụ/tiến trình cùng một lúc trên một máy tính cá nhân."
  },
  {
    id: 6,
    question: "What is the purpose of a pipeline in a CPU?",
    options: [
      "To increase speed by executing multiple stages of instructions simultaneously.",
      "To reduce the number of instructions in the program, optimizing performance.",
      "To combine all instructions into one operation, simplifying execution.",
      "To execute instructions randomly, potentially improving performance."
    ],
    correct: 0, // A
    type: "single",
    explanation: "Pipeline tăng hiệu suất bằng cách thực hiện song song các giai đoạn khác nhau (fetch, decode, execute) của các lệnh liên tiếp."
  },
  {
    id: 7,
    question: "How do threads enable efficient resource sharing?",
    options: [
      "By allowing threads to share resources within the same address space",
      "By isolating resources for each thread",
      "By restricting access to shared resources",
      "By creating separate address spaces for each thread"
    ],
    correct: 0, // A
    type: "single",
    explanation: "Các luồng (threads) thuộc cùng một tiến trình chia sẻ chung không gian địa chỉ và tài nguyên, giúp việc giao tiếp và chia sẻ dữ liệu nhanh chóng."
  },
  {
    id: 8,
    question: "Compare and contrast monolithic and client-server operating system structures.",
    options: [
      "Monolithic systems integrate all functionalities into a single layer, whereas client-server systems distribute functionalities across multiple components.",
      "Monolithic systems promote scalability better than client-server systems.",
      "Client-server systems offer more efficient communication between components compared to monolithic systems.",
      "Monolithic systems have a modular architecture that simplifies maintenance, whereas client-server systems have a more complex architecture."
    ],
    correct: 0, // A
    type: "single",
    explanation: "Monolithic OS chạy mọi dịch vụ trong kernel space (single layer), trong khi mô hình Client-Server (Microkernel) tách các dịch vụ ra thành các process riêng biệt."
  },
  {
    id: 9,
    question: "__________ is a non-preemptive scheduling algorithm. With this algorithm, processes are assigned the CPU in the order they request it.",
    options: [
      "Round-robin scheduling",
      "First-come, first-served",
      "Shortest job first",
      "Priority Scheduling"
    ],
    correct: 1, // First-come, first-served
    type: "single",
    explanation: "First-come, first-served (FCFS) là thuật toán lập lịch không trưng dụng (non-preemptive), xử lý tiến trình theo thứ tự đến trước làm trước."
  },
  {
    id: 10,
    question: "In Unix, which system call creates the new process?",
    options: [
      "create",
      "fork",
      "new",
      "exec"
    ],
    correct: 1, // fork
    type: "single",
    explanation: "`fork()` là system call dùng để tạo một tiến trình con mới là bản sao của tiến trình cha."
  },
  {
    id: 11,
    question: "Which of the following is not a goal of a scheduling algorithm?",
    options: [
      "CPU utilization - keep the CPU least busy all the time",
      "Fairness - giving each process a fair share of the CPU",
      "Policy enforcement - seeing that stated policy is carried out",
      "Balance - keeping all parts of the system busy"
    ],
    correct: 0, // A
    type: "single",
    explanation: "Mục tiêu của lập lịch là giữ cho CPU bận rộn nhất có thể (maximize utilization), KHÔNG phải là giữ cho nó ít bận rộn (least busy)."
  },
  {
    id: 12,
    question: "The interval from the time of submission of a process to the time of completion is termed as __________",
    options: [
      "waiting time",
      "turnaround time",
      "response time",
      "throughput"
    ],
    correct: 1, // turnaround time
    type: "single",
    explanation: "Turnaround time (Thời gian lưu lại) là tổng thời gian từ lúc tiến trình được gửi vào hệ thống đến khi nó hoàn thành."
  },
  {
    id: 13,
    question: "A preemptive version of shortest job first (SJF) is __________.",
    options: [
      "Shortest Process Next",
      "First-Come, First-Served",
      "Shortest remaining time next",
      "Shortest used time"
    ],
    correct: 2, // Shortest remaining time next
    type: "single",
    explanation: "Shortest Remaining Time Next (SRTF) là phiên bản có trưng dụng (preemptive) của thuật toán SJF."
  },
  {
    id: 14,
    question: "When several equally important jobs are sitting in the input queue waiting to be started, the scheduler picks the __________",
    options: [
      "Round-robin scheduling",
      "First-come, first-served",
      "Shortest job first",
      "Guaranteed Scheduling",
      "E. Priority Scheduling"
    ],
    correct: 1, // First-come, first-served
    type: "single",
    explanation: "Khi các công việc có tầm quan trọng ngang nhau (không có ưu tiên), thuật toán công bằng và đơn giản nhất để chọn từ hàng đợi đầu vào là FCFS (đến trước phục vụ trước)."
  },
  {
    id: 15,
    question: "What is the main difference between a process and a thread?",
    options: [
      "Threads share the same memory space, while processes do not",
      "Processes are faster than threads",
      "Processes can only execute one task, while threads execute multiple tasks",
      "Threads are independent of processes"
    ],
    correct: 0, // A
    type: "single",
    explanation: "Sự khác biệt chính là các Threads trong cùng một tiến trình chia sẻ chung không gian bộ nhớ, trong khi mỗi Process có không gian bộ nhớ riêng biệt."
  },
  {
    id: 16,
    question: "Suppose processes P1, P2, P3, P4, P5 (Burst times: 10, 1, 2, 4, 5) all enter the system at time 0. What is the average waiting time when scheduling the shortest job first?",
    options: [
      "4.6",
      "6.2",
      "5.2",
      "4.2"
    ],
    correct: 0, // 4.6
    type: "single",
    explanation: "Thứ tự thực hiện SJF: P2(1) -> P3(2) -> P4(4) -> P5(5) -> P1(10). Thời gian chờ: P2=0, P3=1, P4=1+2=3, P5=1+2+4=7, P1=1+2+4+5=12. Trung bình: (0+1+3+7+12)/5 = 23/5 = 4.6."
  },
  {
    id: 17,
    question: "In the context of virtual memory, what does 'thrashing' refer to?",
    options: [
      "When a process is spending more time paging than executing",
      "When a process is terminated unexpectedly",
      "When a process is using more memory than allocated",
      "When a process is waiting for I/O operations"
    ],
    correct: 0, // A
    type: "single",
    explanation: "Thrashing xảy ra khi hệ thống dành quá nhiều thời gian để tráo đổi các trang (paging in/out) thay vì thực thi tiến trình, làm giảm hiệu suất nghiêm trọng."
  },
  {
    id: 18,
    question: "With __________ only one process can execute at a time; meanwhile all other process are waiting for the processor. With __________ more than one process can be running simultaneously each on a different processor.",
    options: [
      "Multiprocessing, Multiprogramming",
      "Multiprogramming, Uniprocessing",
      "Multiprogramming, Multiprocessing",
      "Uniprogramming, Multiprocessing"
    ],
    correct: 2, // Multiprogramming, Multiprocessing
    type: "single",
    explanation: "Multiprogramming cho phép nhiều tiến trình trong bộ nhớ nhưng chỉ 1 chạy tại 1 thời điểm (trên 1 CPU). Multiprocessing có nhiều CPU nên có thể chạy thực sự song song."
  },
  {
    id: 19,
    question: "A multilevel page table is preferred in comparison to a single level page table for translating virtual address to physical address because __________",
    options: [
      "it helps to reduce the number of page faults in page replacement algorithms",
      "it is required by the translation lookaside buffer",
      "it helps to reduce the size of page table needed to implement the virtual address space of a process",
      "it reduces the memory access time to read or write a memory location"
    ],
    correct: 2, // C
    type: "single",
    explanation: "Bảng trang đa cấp (Multilevel page table) giúp giảm kích thước bộ nhớ cần thiết để lưu trữ bảng trang bằng cách chỉ cấp phát các phần bảng trang thực sự cần thiết."
  },
  {
    id: 20,
    question: "In virtual memory, a solution adopted in the 1960s was to split programs into little pieces called__________.",
    options: [
      "overlays",
      "pages",
      "page table",
      "page fault"
    ],
    correct: 1, // pages
    type: "single",
    explanation: "Trong kỹ thuật bộ nhớ ảo, chương trình được chia thành các khối nhỏ kích thước cố định gọi là 'pages' (trang)."
  },
  {
    id: 21,
    question: "What is the primary goal of a page replacement algorithm?",
    options: [
      "To increase the speed of the CPU",
      "To minimize disk I/O operations",
      "To increase the number of processes in memory",
      "To simplify memory management"
    ],
    correct: 1, // B
    type: "single",
    explanation: "Mục tiêu chính của thuật toán thay thế trang là giảm thiểu số lỗi trang (page faults), từ đó giảm thiểu các thao tác đọc/ghi đĩa (disk I/O) tốn kém."
  },
  {
    id: 22,
    question: "What is the benefit of using paging in virtual memory systems?",
    options: [
      "Enhanced CPU performance",
      "Improved disk storage management",
      "Efficient memory utilization",
      "Faster network communication"
    ],
    correct: 2, // C
    type: "single",
    explanation: "Phân trang (Paging) cho phép cấp phát bộ nhớ không liên tục, giải quyết vấn đề phân mảnh ngoại vi, giúp sử dụng bộ nhớ hiệu quả hơn."
  },
  {
    id: 23,
    question: "In a paging system, what is the term for the data stored in secondary storage that is not currently in main memory?",
    options: [
      "Cache",
      "Page table",
      "Disk image",
      "Swap space"
    ],
    correct: 3, // D
    type: "single",
    explanation: "Swap space (vùng hoán đổi) là không gian trên ổ cứng dùng để chứa các trang bộ nhớ tạm thời bị đẩy ra khỏi RAM."
  },
  {
    id: 24,
    question: "What is another name for the Modified Bit that reflects the page's state?",
    options: [
      "Referenced Bit",
      "Access Bit",
      "Dirty Bit",
      "Clear Bit"
    ],
    correct: 2, // C
    type: "single",
    explanation: "Modified Bit còn được gọi là Dirty Bit. Nó được bật lên khi nội dung của trang bị thay đổi trong bộ nhớ, báo hiệu rằng trang này cần được ghi lại xuống đĩa trước khi bị thay thế."
  },
  {
    id: 25,
    question: "What is paging in virtual memory in operating systems?",
    options: [
      "A technique for managing disk storage",
      "A method for managing memory by dividing it into fixed-size blocks",
      "A process for controlling CPU scheduling",
      "A mechanism for handling network communication"
    ],
    correct: 1, // B
    type: "single",
    explanation: "Paging là phương pháp quản lý bộ nhớ bằng cách chia bộ nhớ vật lý thành các khung (frames) và bộ nhớ logic thành các trang (pages) có kích thước cố định."
  },
  {
    id: 26,
    question: "Which statement best describes the function of virtual memory in the Windows operating system?",
    options: [
      "Virtual memory is used to store temporary files created by applications to free up physical RAM.",
      "Virtual memory allows a larger address space than the physical memory available, by using a combination of RAM and hard disk space.",
      "Virtual memory is a reserved area on the hard disk used exclusively for storing system files.",
      "Virtual memory enables the operating system to manage the computer's display settings for multiple monitors."
    ],
    correct: 1, // B
    type: "single",
    explanation: "Bộ nhớ ảo cho phép hệ điều hành mô phỏng không gian địa chỉ lớn hơn bộ nhớ vật lý thực tế bằng cách sử dụng kết hợp RAM và dung lượng ổ cứng."
  },
  {
    id: 27,
    question: "Most virtual memory systems use a technique called__________?",
    options: [
      "Page Fault",
      "Page Frames",
      "Page Table",
      "Paging"
    ],
    correct: 3, // D
    type: "single",
    explanation: "Hầu hết các hệ thống bộ nhớ ảo hiện đại đều sử dụng kỹ thuật phân trang (Paging) để quản lý việc ánh xạ địa chỉ ảo sang địa chỉ vật lý."
  },
  {
    id: 28,
    question: "In a Unix-like operating system, what does the tilde (~) character represent in a path?",
    options: [
      "The home directory of the current user",
      "The parent directory",
      "The current directory",
      "The root directory"
    ],
    correct: 0, // A
    type: "single",
    explanation: "Ký tự ngã (~) trong Unix/Linux đại diện cho thư mục Home của người dùng hiện tại (ví dụ: /home/username)."
  },
  {
    id: 29,
    question: "Which of the following file extensions is used for compressed archives?",
    options: [
      ".mpg",
      ".bak",
      ".zip",
      ".gif"
    ],
    correct: 2, // C
    type: "single",
    explanation: ".zip là định dạng phổ biến cho các tập tin nén lưu trữ. (.mpg là video, .bak là backup, .gif là hình ảnh)."
  },
  {
    id: 30,
    question: "Analyze the significance of log-structured file systems in enhancing file-system performance, discussing their mechanisms and impact on write operations and disk usage.",
    options: [
      "Log-structured file systems optimize disk usage but may suffer from higher write latencies due to their write-in-large-unit approach.",
      "Log-structured file systems minimize write latencies by writing data in large units and improve disk usage through better block placement.",
      "Log-structured file systems have no impact on write latencies and disk usage, as they primarily focus on file backups.",
      "Log-structured file systems slow down disk usage by writing data in small units and hinder write operations due to excessive disk fragmentation."
    ],
    correct: 1, // B
    type: "single",
    explanation: "Log-structured File Systems (LFS) gom các ghi chép nhỏ ngẫu nhiên thành các đoạn lớn (segments) và ghi tuần tự (log) để tối ưu hóa hiệu suất ghi đĩa và giảm độ trễ (latency)."
  },
  {
    id: 31,
    question: "Consider a 4-TB disk that uses 4-KB blocks and the free-list method. How many block addresses can be stored in one block?",
    options: [
      "1024 addresses",
      "256 addresses",
      "512 addresses",
      "2048 addresses",
      "E. 128 addresses"
    ],
    correct: 0, // 1024
    type: "single",
    explanation: "Với block 4KB (4096 bytes) và địa chỉ 32-bit (4 bytes) thường dùng để quản lý không gian này, số địa chỉ chứa được là 4096 / 4 = 1024."
  },
  {
    id: 32,
    question: "Which file attribute specifies who can access the file and in what way?",
    options: [
      "Protection",
      "Password",
      "Creator",
      "Owner"
    ],
    correct: 0, // Protection
    type: "single",
    explanation: "Thuộc tính Protection (Bảo vệ) hoặc Permissions xác định quyền truy cập (Read, Write, Execute) cho các nhóm người dùng khác nhau."
  },
  {
    id: 33,
    question: "What is an absolute path in operating systems?",
    options: [
      "A path that starts from the root directory",
      "A path that is relative to the current working directory",
      "A path that includes only the file name",
      "A path that is used for network communication"
    ],
    correct: 0, // A
    type: "single",
    explanation: "Đường dẫn tuyệt đối (Absolute path) luôn bắt đầu từ thư mục gốc (root directory) và chỉ ra vị trí chính xác của file."
  },
  {
    id: 34,
    question: "In UNIX, which type of file is used to model disks?",
    options: [
      "Regular files.",
      "Character special files.",
      "Block special files.",
      "Directories."
    ],
    correct: 2, // Block special files
    type: "single",
    explanation: "Các thiết bị lưu trữ dạng khối như ổ cứng (disks) được đại diện bởi 'Block special files' trong UNIX, cho phép truy cập ngẫu nhiên qua các khối dữ liệu."
  },
  {
    id: 35,
    question: "What kind of file access did early operating system provide?",
    options: [
      "Liner access",
      "Unsequential access",
      "Random access",
      "Sequential access"
    ],
    correct: 3, // Sequential access
    type: "single",
    explanation: "Các hệ điều hành sơ khai (thường dùng băng từ) chủ yếu cung cấp phương thức truy cập tuần tự (Sequential access)."
  },
  {
    id: 36,
    question: "Consider a disk queue with requests for I/O to blocks on cylinders: 98, 37, 14, 65, 67. In the SSF (Shortest Seek First) scheduling algorithm, what is the disk arm motion if the disk head is initially at 53?",
    options: [
      "53, 65, 67, 37, 14, 98",
      "53, 37, 14, 65, 67, 98",
      "53, 14, 37, 65, 67, 98",
      "53, 98, 67, 65, 37, 14"
    ],
    correct: 0, // A
    type: "single",
    explanation: "SSF chọn yêu cầu gần vị trí hiện tại nhất: 53 -> 65 (kc=12) -> 67 (kc=2) -> 37 (kc=30) -> 14 (kc=23) -> 98 (kc=84)."
  },
  {
    id: 37,
    question: "Consider a disk queue with requests for I/O to blocks on cylinders: 98, 37, 14, 65, 67. The disk arm motion, if the disk head is initially at 53, is 53, 98, 37, 14, 65, 67. Which the disk arm scheduling algorithms is used?",
    options: [
      "FCFS",
      "SSF",
      "SJF",
      "Elevator"
    ],
    correct: 0, // FCFS
    type: "single",
    explanation: "Thứ tự xử lý trùng khớp hoàn toàn với thứ tự yêu cầu đến (98, 37, 14, 65, 67), đây là đặc điểm của thuật toán First-Come, First-Served (FCFS)."
  },
  {
    id: 38,
    question: "Which I/O mode is most suitable for transferring data between memory and I/O devices without the CPU being bothered?",
    options: [
      "Direct Memory Access",
      "Programmed I/O",
      "Interrupt-driven I/O",
      "Polling"
    ],
    correct: 0, // A
    type: "single",
    explanation: "Direct Memory Access (DMA) cho phép thiết bị I/O truyền dữ liệu trực tiếp vào bộ nhớ mà không cần sự can thiệp liên tục của CPU."
  },
  {
    id: 39,
    question: "In UNIX, how are devices like USB sticks integrated into the file-system hierarchy?",
    options: [
      "Devices are not integrated and require separate access commands",
      "Devices are assigned unique identifiers that must be used to access files",
      "Devices can be mounted on directories within the file-system hierarchy, allowing files to be copied to them via path names",
      "Devices require special software to be accessed through the file system"
    ],
    correct: 2, // C
    type: "single",
    explanation: "Trong UNIX, các thiết bị được 'mount' (gắn) vào các thư mục trong cây hệ thống tập tin, cho phép truy cập chúng như các thư mục bình thường."
  },
  {
    id: 40,
    question: "What is the function of the user application layer in the I/O system?",
    options: [
      "To make system calls and handle I/O",
      "To manage device drivers",
      "To communicate with the hardware",
      "To perform actual I/O operations"
    ],
    correct: 0, // A
    type: "single",
    explanation: "Lớp ứng dụng người dùng thực hiện I/O bằng cách gọi các system call (như read, write) mà hệ điều hành cung cấp."
  },
  {
    id: 41,
    question: "While the search for cylinder 11 is in progress, new requests appear for cylinders 1, 36, 16, 34, 9, and 12. Considering SSF (Shortest Seek First) scheduling, what is the total number of head movements?",
    options: [
      "61",
      "111",
      "60",
      "108"
    ],
    correct: 0, // 61
    type: "single",
    explanation: "SSF từ 11: 11->12(1) -> 9(3) -> 16(7) -> 1(15) -> 34(33) -> 36(2). Tổng = 1+3+7+15+33+2 = 61."
  },
  {
    id: 42,
    question: "Which operation in stable storage involves writing and verifying a block on both drives until it is successfully written and verified?",
    options: [
      "Stable read",
      "Crash recovery",
      "Stable write",
      "Data synchronization"
    ],
    correct: 2, // Stable write
    type: "single",
    explanation: "Stable write đảm bảo tính nguyên tử (atomicity) bằng cách ghi và xác minh lần lượt trên cả 2 đĩa."
  },
  {
    id: 43,
    question: "The first general-purpose electronic computer, the ENIAC, had 18,000 vacuum tubes and consumed _____ watts of power.",
    options: [
      "1400,000",
      "140,000",
      "14,000",
      "1,400"
    ],
    correct: 1, // 140,000
    type: "single",
    explanation: "ENIAC tiêu thụ khoảng 140-150 kW điện năng (140,000 watts)."
  },
  {
    id: 44,
    question: "What is the primary objective of Deadlock Avoidance techniques?",
    options: [
      "To resolve deadlocks after they occur",
      "To preemptively avoid potential deadlocks",
      "To require processes to request resources in advance",
      "To identify deadlocks and take corrective action",
      "E. To ignore the occurrence of deadlocks"
    ],
    correct: 1, // B
    type: "single",
    explanation: "Mục tiêu chính là tránh (avoid) việc hệ thống rơi vào trạng thái không an toàn (unsafe state) bằng cách kiểm tra trước khi cấp phát (ví dụ: Banker's algorithm)."
  },
  {
    id: 45,
    question: "Which recovery method can lead to data inconsistency when re-executed in the case of a deadlock?",
    options: [
      "Recovery through rollback",
      "Killing processes",
      "Preemption",
      "Checkpointing",
      "E. None of the others"
    ],
    correct: 1, // Killing processes
    type: "single",
    explanation: "Việc chấm dứt (kill) tiến trình đột ngột có thể để lại dữ liệu hoặc tài nguyên (như semaphore, file) ở trạng thái không nhất quán."
  },
  {
    id: 46,
    question: "Every time a request for allocation cannot be granted immediately, the detection algorithm is invoked. This will help identify __________",
    options: [
      "the set of processes that have been deadlocked",
      "the set of processes in the deadlock queue",
      "the specific process that caused the deadlock",
      "the set of processes that caused the deadlock"
    ],
    correct: 0, // A
    type: "single",
    explanation: "Thuật toán phát hiện deadlock (detection algorithm) xác định danh sách các tiến trình đang nằm trong vòng tròn deadlock."
  },
  {
    id: 47,
    question: "Which of the following best describes a 'race condition'?",
    options: [
      "Multiple processes access and manipulate shared data concurrently",
      "A process is stuck in an infinite loop",
      "A process waits indefinitely for an event",
      "A process exceeds its allocated memory"
    ],
    correct: 0, // A
    type: "single",
    explanation: "Race condition xảy ra khi nhiều tiến trình cùng truy cập và thay đổi dữ liệu chia sẻ, và kết quả cuối cùng phụ thuộc vào thứ tự thực thi."
  },
  {
    id: 48,
    question: "Analyze the significance of the hold-and-wait condition in resource deadlock, explaining its impact on deadlock prevention strategies in an operating system.",
    options: [
      "The hold-and-wait condition allows processes to request resources without considering safety...",
      "The hold-and-wait condition dictates that processes must wait for all resources to be available before starting execution...",
      "The hold-and-wait condition can cause processes to indefinitely hold resources while waiting for others, influencing deadlock prevention strategies by attacking this condition to prevent deadlocks.",
      "The hold-and-wait condition mandates that resources must be released once a process completes..."
    ],
    correct: 2, // C
    type: "single",
    explanation: "Điều kiện 'Hold-and-wait' cho phép tiến trình giữ tài nguyên trong khi chờ tài nguyên khác, dẫn đến deadlock. Các chiến lược ngăn chặn (prevention) thường nhắm vào việc phá vỡ điều kiện này (ví dụ: yêu cầu cấp phát tất cả tài nguyên ngay từ đầu)."
  },
  {
    id: 49,
    question: "Assuming there is an entry in /etc/passwd file with the following content: john:x:1002:1000:Jonh Henry:/bin/bash. Choose the best correct statement:",
    options: [
      "Username = john and userid = 1002",
      "Username = Jonh Henry and userid = 1002",
      "Username = john and userid = 1000",
      "Username = Jonh Henry and userid = 1000"
    ],
    correct: 0, // A
    type: "single",
    explanation: "Cấu trúc file /etc/passwd là: username:password:UID:GID:comment:home:shell. Do đó Username là 'john' và UID là 1002."
  },
  {
    id: 50,
    question: "Differentiate between Type 1 and Type 2 hypervisors in terms of their implementation and performance. Which type is generally more efficient for enterprise environments, and why?",
    options: [
      "Type 1 hypervisors, as they run directly on hardware",
      "Type 2 hypervisors, as they offer more flexibility.",
      "Type 1 hypervisors, for simpler management than Type 2",
      "Both types are equally efficient in enterprises"
    ],
    correct: 0, // A
    type: "single",
    explanation: "Type 1 (Bare-metal) Hypervisor chạy trực tiếp trên phần cứng (không qua HĐH máy chủ) nên có hiệu suất cao hơn và được dùng trong môi trường doanh nghiệp."
  }
];
