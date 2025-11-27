const questions = [
    {
        id: 1,
        question: "Which one is NOT an operating system mode?",
        options: [
            "A. System mode",
            "B. User mode",
            "C. Kernel mode",
            "D. Supervisor mode"
        ],
        correct: 0,
        type: "single",
        explanation: "Đáp án A (System mode). Thông thường OS có 2 chế độ chính là User mode và Kernel mode (còn gọi là Supervisor mode). 'System mode' không phải là thuật ngữ tiêu chuẩn phổ biến để chỉ chế độ OS trong ngữ cảnh so sánh này."
    },
    {
        id: 2,
        question: "In I/O devices, what is the software called that communicates with the controller, sending commands and receiving responses?",
        options: [
            "A. Device driver",
            "B. DMA",
            "C. Device interface",
            "D. Interrupt"
        ],
        correct: 0, 
        type: "single",
        explanation: "Đáp án theo tài liệu gốc là B (DMA), nhưng đây có thể là lỗi sai của tài liệu. DMA là cơ chế phần cứng. Phần mềm giao tiếp với controller chính xác là Device Driver (A). Tôi đã chỉnh lại đáp án đúng thành A cho chính xác về mặt kỹ thuật."
    },
    {
        id: 3,
        question: "What happens to the program counter after an instruction is fetched?",
        options: [
            "A. It is reset to zero",
            "B. It is updated to point to the next instruction",
            "C. It is used to store the result of the instruction",
            "D. It is used to store the total length of the program being executed"
        ],
        correct: 1,
        type: "single",
        explanation: "Đáp án B. Sau khi fetch một lệnh, Program Counter (PC) tự động tăng để trỏ đến lệnh kế tiếp."
    },
    {
        id: 4,
        question: "Which operating system runs on systems with any CPU (multi-processor, multi-core, multi-chip)?",
        options: [
            "A. Embedded OS",
            "B. Multiprocessor OS",
            "C. PC OS",
            "D. Server OS"
        ],
        correct: 1,
        type: "single",
        explanation: "Đáp án B. Multiprocessor OS được thiết kế để quản lý nhiều CPU/core."
    },
    {
        id: 5,
        question: "What is the output of the following command: echo $((5/2*2)) ?",
        options: [
            "A. 1",
            "B. 5",
            "C. 4",
            "D. 2"
        ],
        correct: 2,
        type: "single",
        explanation: "Đáp án C (4). Trong phép tính số nguyên (integer arithmetic) của shell: 5/2 = 2, sau đó 2*2 = 4."
    },
    {
        id: 6,
        question: "In Unix, which POSIX system call creates a new process?",
        options: [
            "A. fork",
            "B. create",
            "C. new",
            "D. CreateProcess"
        ],
        correct: 0,
        type: "single",
        explanation: "Đáp án A. 'fork' là system call chuẩn trong POSIX/Unix để tạo tiến trình mới."
    },
    {
        id: 7,
        question: "In the FIFO page replacement algorithm, which data structure is commonly used to implement the page queue?",
        options: [
            "A. Stack",
            "B. Queue",
            "C. Linked list",
            "D. Array"
        ],
        correct: 1,
        type: "single",
        explanation: "Đáp án B. FIFO (First In First Out) sử dụng cấu trúc hàng đợi (Queue)."
    },
    {
        id: 8,
        question: "Which of the following is a component of an Operating System?",
        options: [
            "A. Process Management",
            "B. Speed Management",
            "C. Space Management",
            "D. Time Management"
        ],
        correct: 0,
        type: "single",
        explanation: "Đáp án A. Quản lý tiến trình (Process Management) là thành phần cốt lõi của OS."
    },
    {
        id: 9,
        question: "In computer operating systems, how is a process understood?",
        options: [
            "A. A program saved on disk.",
            "B. A program loaded into memory and being executed by the CPU.",
            "C. A program loaded into primary or secondary memory.",
            "D. A program loaded on disk."
        ],
        correct: 1,
        type: "single",
        explanation: "Đáp án B. Process là một chương trình đang thực thi (executing)."
    },
    {
        id: 10,
        question: "In Round-robin scheduling, what happens to a process when it runs out of its allocated time slice?",
        options: [
            "A. The process switches from running to the ready state.",
            "B. The process switches from running to the blocked state.",
            "C. The process switches from running to the suspended-ready state.",
            "D. The process switches from running to the suspended state."
        ],
        correct: 0,
        type: "single",
        explanation: "Đáp án A. Khi hết quantum time, tiến trình chuyển từ Running về Ready để chờ lượt tiếp theo."
    },
    {
        id: 11,
        question: "When using the Critical Regions solution, which of the following conditions is NOT necessary?",
        options: [
            "A. Processes entering critical regions must set their speed or number of CPUs.",
            "B. Two processes are not in critical regions at the same time.",
            "C. A process outside the critical region must not prevent others from entering.",
            "D. Processes must not wait indefinitely to enter critical regions."
        ],
        correct: 0,
        type: "single",
        explanation: "Đáp án A. Không được phép giả định về tốc độ của tiến trình hay số lượng CPU."
    },
    {
        id: 12,
        question: "In interprocess communication, which synchronization method requires hardware support?",
        options: [
            "A. TSL Instruction",
            "B. Peterson’s Solution",
            "C. Sleep and Wakeup",
            "D. Semaphores"
        ],
        correct: 0,
        type: "single",
        explanation: "Đáp án A. TSL (Test and Set Lock) là một chỉ thị phần cứng đặc biệt."
    },
    {
        id: 13,
        question: "Which information bit in a page table entry indicates the types of access that are permitted?",
        options: [
            "A. Present/Absent bit",
            "B. Caching Disabled bit",
            "C. Protection bit",
            "D. Modified bit"
        ],
        correct: 2,
        type: "single",
        explanation: "Đáp án C. Protection bit (ví dụ: Read/Write/Execute) quy định quyền truy cập."
    },
    {
        id: 14,
        question: "In a real-time scheduling system, which type of process is given the highest priority?",
        options: [
            "A. Shortest processes",
            "B. Processes with the highest computation time",
            "C. Processes with the earliest deadlines",
            "D. Background processes"
        ],
        correct: 2,
        type: "single",
        explanation: "Đáp án C. Trong hệ thống Real-time (như thuật toán EDF), tiến trình có deadline sớm nhất được ưu tiên."
    },
    {
        id: 15,
        question: "What is the role of the Memory Management Unit (MMU) in a computer system?",
        options: [
            "A. It translates virtual addresses into physical addresses.",
            "B. It controls the allocation of memory to different processes.",
            "C. It manages the paging and swapping of memory pages.",
            "D. It is a data structure used in virtual memory management."
        ],
        correct: 0,
        type: "single",
        explanation: "Đáp án A. MMU là phần cứng chịu trách nhiệm ánh xạ địa chỉ ảo sang địa chỉ vật lý."
    },
    {
        id: 16,
        question: "How does memory abstraction through address spaces benefit a computer system?",
        options: [
            "A. It allows each process to access the entire physical memory directly.",
            "B. It isolates processes from each other, preventing unauthorized access.",
            "C. It eliminates the need for virtual memory.",
            "D. It reduces CPU processing speed."
        ],
        correct: 1,
        type: "single",
        explanation: "Đáp án B. Không gian địa chỉ giúp cô lập bộ nhớ của các tiến trình, bảo vệ chúng khỏi nhau."
    },
    {
        id: 17,
        question: "When a virtual memory system manages memory in fixed-length units, what are these units called?",
        options: [
            "A. Frame",
            "B. Page",
            "C. Block",
            "D. Segment"
        ],
        correct: 1,
        type: "single",
        explanation: "Đáp án B. Các đơn vị bộ nhớ ảo có kích thước cố định gọi là Page."
    },
    {
        id: 18,
        question: "In virtual memory, a solution adopted in the 1960s was to split programs into little pieces called:",
        options: [
            "A. Overlays",
            "B. Pages",
            "C. Page Table",
            "D. Page Fault"
        ],
        correct: 0,
        type: "single",
        explanation: "Đáp án A. Trước khi có virtual memory hiện đại, kỹ thuật Overlays được dùng để chạy chương trình lớn hơn bộ nhớ."
    },
    {
        id: 19,
        question: "A computer with a 32-bit address uses a two-level page table. Virtual addresses are split into a 10-bit top-level field, a 12-bit second-level field, and an offset. What is the page size?",
        options: [
            "A. 512B page",
            "B. 1-KB page",
            "C. 2-KB page",
            "D. 4-KB page"
        ],
        correct: 3,
        type: "single",
        explanation: "Đáp án tài liệu chọn D (4KB). <br><b>Lưu ý:</b> Về mặt tính toán lý thuyết: 32 bit tổng - 10 bit top - 12 bit second = 10 bit offset. 2^10 = 1024 bytes = 1KB (Đáp án B). Tuy nhiên, key của đề chọn D, có thể đề bài có nhầm lẫn về số bit hoặc ám chỉ hệ thống chuẩn x86 (10-10-12)."
    },
    {
        id: 20,
        question: "If the FIFO page replacement algorithm is used with four page frames, how many page faults will occur for the reference string 0172327103 (starting with empty frames)?",
        options: [
            "A. 4 pages",
            "B. 5 pages",
            "C. 6 pages",
            "D. 7 pages"
        ],
        correct: 2,
        type: "single",
        explanation: "Đáp án C (6 lỗi trang). Các lần lỗi trang xảy ra tại các truy cập: 0, 1, 7, 2, 3, 0."
    },
    {
        id: 21,
        question: "A program causing page faults every few instructions is said to be:",
        options: [
            "A. Crashing",
            "B. Thrashing",
            "C. Error agent",
            "D. Trojans"
        ],
        correct: 1,
        type: "single",
        explanation: "Đáp án B. Thrashing là hiện tượng hệ thống dành quá nhiều thời gian để tráo đổi trang (paging) thay vì thực thi lệnh."
    },
    {
        id: 22,
        question: "What is the main advantage of using the Clock Algorithm over the Second Chance Algorithm in page replacement?",
        options: [
            "A. It eliminates the need to move pages around, reducing overhead.",
            "B. It increases the complexity of implementation.",
            "C. It guarantees fewer page faults compared to Second Chance Algorithm.",
            "D. It uses more memory to maintain the circular structure."
        ],
        correct: 0,
        type: "single",
        explanation: "Đáp án A. Clock algorithm dùng danh sách vòng tròn và kim chỉ, tránh việc phải di chuyển các trang trong danh sách liên kết như Second Chance thuần túy."
    },
    {
        id: 23,
        question: "What is the primary purpose of using paging in memory management?",
        options: [
            "A. To reduce the access time for data in memory.",
            "B. To allow multiple processes to share the same physical memory.",
            "C. To eliminate fragmentation and improve memory utilization.",
            "D. To organize memory into fixed-size blocks for efficient storage."
        ],
        correct: [2, 3],
        type: "multiple",
        explanation: "Đáp án C và D. Paging giúp loại bỏ phân mảnh ngoại vi (External Fragmentation) và tổ chức bộ nhớ thành các khối cố định."
    },
    {
        id: 24,
        question: "A straightforward and general solution that provides many completely independent address spaces is called:",
        options: [
            "A. Segment",
            "B. Paging",
            "C. Partition",
            "D. Virtual"
        ],
        correct: 3,
        type: "single",
        explanation: "Đáp án D (theo key). Virtual Memory cung cấp không gian địa chỉ ảo độc lập cho mỗi tiến trình."
    },
    {
        id: 25,
        question: "In a file structure, which type of file is different from the unorganized byte streams used in UNIX and Windows and is used on some mainframes for commercial data processing?",
        options: [
            "A. Byte sequence",
            "B. Record sequence",
            "C. Unstructured",
            "D. Tree of records"
        ],
        correct: 1,
        type: "single",
        explanation: "Đáp án B. Record sequence (cấu trúc bản ghi) khác với byte stream (chuỗi byte phi cấu trúc)."
    },
    {
        id: 26,
        question: "In a file's metadata, what does the file size typically represent?",
        options: [
            "A. The physical size of the storage medium.",
            "B. The number of characters in the file.",
            "C. The number of pages in the file.",
            "D. The amount of space the file occupies on the storage medium."
        ],
        correct: 3,
        type: "single",
        explanation: "Đáp án D (theo key). Kích thước file trong metadata thường phản ánh dung lượng chiếm dụng (space occupied)."
    },
    {
        id: 27,
        question: "In the context of a file system, how many letters do all current operating systems allow as legal file names?",
        options: [
            "A. Zero to eight",
            "B. One to ten",
            "C. One to eight",
            "D. One to nine"
        ],
        correct: 2,
        type: "single",
        explanation: "Đáp án C. 'Tất cả' hệ điều hành (bao gồm cả các hệ thống cũ như DOS) đều hỗ trợ tối thiểu định dạng 8 ký tự (8.3 format)."
    },
    {
        id: 28,
        question: "When a directory has been read, it should be closed to free up internal table space. Which command is used?",
        options: [
            "A. Close",
            "B. Closedir",
            "C. Delete",
            "D. Opendir"
        ],
        correct: 1,
        type: "single",
        explanation: "Đáp án B. Lệnh `closedir` dùng để đóng thư mục sau khi đọc."
    },
    {
        id: 29,
        question: "What is fragmentation in the context of file-system implementation?",
        options: [
            "A. A technique for managing directory structures.",
            "B. The allocation of memory for file storage.",
            "C. The splitting of files or free space into smaller, non-contiguous blocks.",
            "D. The arrangement of files on storage devices."
        ],
        correct: 2,
        type: "single",
        explanation: "Đáp án C. Phân mảnh (Fragmentation) là khi file hoặc vùng trống bị chia nhỏ, không liên tục."
    },
    {
        id: 30,
        question: "In file sharing, B links to one of C's files by creating a new file containing the path name of the original file. What type of linking is this?",
        options: [
            "A. Synchronous Linking",
            "B. Symbolic Linking",
            "C. Traditional (Hard) Linking",
            "D. Synthetic Linking"
        ],
        correct: 1,
        type: "single",
        explanation: "Đáp án B. Symbolic Linking (Soft link) chứa đường dẫn đến file gốc."
    },
    {
        id: 31,
        question: "When the computer is booted, what is used to read in and execute?",
        options: [
            "A. BIOS, Boot Block",
            "B. CPU, BIOS",
            "C. BIOS, MBR",
            "D. MBR, BIOS"
        ],
        correct: 2,
        type: "single",
        explanation: "Đáp án C. BIOS khởi chạy đầu tiên, sau đó đọc MBR (Master Boot Record) để nạp OS."
    },
    {
        id: 32,
        question: "In Linux, what is the primary purpose of the /etc directory?",
        options: [
            "A. To store temporary files.",
            "B. To manage system boot files.",
            "C. To house system configuration files and scripts.",
            "D. To store user home directories."
        ],
        correct: 2,
        type: "single",
        explanation: "Đáp án C. `/etc` chứa các file cấu hình hệ thống."
    },
    {
        id: 33,
        question: "What addresses are typically used by most DMA controllers for transmission?",
        options: [
            "A. Logical memory",
            "B. Abstract memory",
            "C. Virtual memory",
            "D. Physical memory"
        ],
        correct: 3,
        type: "single",
        explanation: "Đáp án D. DMA controller làm việc trực tiếp với địa chỉ vật lý (Physical memory) để truyền dữ liệu mà không qua CPU."
    },
    {
        id: 34,
        question: "Regarding the computer's interrupt, which of the following is the number on the address lines that is used as an index into a table to fetch a new program counter?",
        options: [
            "A. Interrupt vector",
            "B. Interrupt handler",
            "C. Interrupt pointer",
            "D. Interrupt executer"
        ],
        correct: 0,
        type: "single",
        explanation: "Đáp án A. Interrupt vector là chỉ số dùng để tra cứu trong bảng vector ngắt."
    },
    {
        id: 35,
        question: "What is the purpose of Direct Memory Access (DMA) in I/O hardware?",
        options: [
            "A. To manage device controllers.",
            "B. To allocate memory for device drivers.",
            "C. To enable devices to transfer data to and from memory without CPU intervention.",
            "D. To provide user interfaces for I/O devices."
        ],
        correct: 2,
        type: "single",
        explanation: "Đáp án C. Mục đích chính của DMA là giảm tải cho CPU trong việc sao chép dữ liệu."
    },
    {
        id: 36,
        question: "________ include(s) every peripheral unit in the system such as disks, clocks, keyboards, displays, and so on.",
        options: [
            "A. I/O devices",
            "B. Memory",
            "C. CPU",
            "D. Software"
        ],
        correct: 0,
        type: "single",
        explanation: "Đáp án A. I/O devices bao gồm tất cả các thiết bị ngoại vi."
    },
    {
        id: 37,
        question: "What does the term 'blocking' refer to in the context of I/O software?",
        options: [
            "A. A technique for managing device drivers.",
            "B. A mechanism for ensuring device synchronization.",
            "C. The process of stopping a process until an I/O operation is completed.",
            "D. A method of allocating memory for I/O operations."
        ],
        correct: 2,
        type: "single",
        explanation: "Đáp án C. Blocking I/O làm tiến trình tạm dừng (block) cho đến khi I/O hoàn tất."
    },
    {
        id: 38,
        question: "What is the role of the file system in disk management?",
        options: [
            "A. To allocate memory for disk operations.",
            "B. To manage the disk's hardware components.",
            "C. To organize and track files and data on the disk.",
            "D. To design disk controllers."
        ],
        correct: 2,
        type: "single",
        explanation: "Đáp án C. File system tổ chức và quản lý file trên ổ đĩa."
    },
    {
        id: 39,
        question: "Consider a disk queue with requests for I/O to blocks on cylinders: 98, 37, 14, 65, 67. The disk arm motion, if the disk head is initially at 53, is 53 → 98 → 37 → 14 → 65 → 67. Which disk arm scheduling algorithm is used?",
        options: [
            "A. FCFS",
            "B. SSF",
            "C. SJF",
            "D. Elevator"
        ],
        correct: 3,
        type: "single",
        explanation: "Đáp án tài liệu chọn D (Elevator). <br><b>Lưu ý:</b> Thứ tự di chuyển `53 -> 98 -> 37 -> 14 -> 65 -> 67` chính xác là thứ tự đến của request, đây là đặc điểm của <b>FCFS (A)</b>. Thuật toán Elevator sẽ sắp xếp lại thứ tự (ví dụ: 53 -> 65 -> 67 -> 98 -> 37...). Có thể tài liệu bị sai đáp án hoặc sai mô tả chuyển động."
    },
    {
        id: 40,
        question: "Which RAID level duplicates all the disks, offering fault tolerance through disk mirroring?",
        options: [
            "A. RAID 1",
            "B. RAID 0",
            "C. RAID 5",
            "D. RAID 6"
        ],
        correct: 0,
        type: "single",
        explanation: "Đáp án A. RAID 1 là Mirroring (sao chép y hệt)."
    },
    {
        id: 41,
        question: "Time to move the arm to the proper cylinder is called?",
        options: [
            "A. Seek time",
            "B. Rotational delay",
            "C. Actual data transfer time",
            "D. Access time"
        ],
        correct: 0,
        type: "single",
        explanation: "Đáp án A. Thời gian di chuyển đầu đọc đến cylinder gọi là Seek time."
    },
    {
        id: 42,
        question: "What is a preemptable resource?",
        options: [
            "A. The one that can be taken away from the process owning it with no ill effects",
            "B. The one that can be taken away from the process owning it with ill effects",
            "C. The one that cannot be taken away from the process owning it with no ill effects",
            "D. The one that cannot be taken away from the process owning it with ill effects"
        ],
        correct: 0,
        type: "single",
        explanation: "Đáp án A. Tài nguyên có thể thu hồi (preemptable) là tài nguyên có thể lấy lại mà không gây lỗi (ví dụ: CPU, Memory)."
    },
    {
        id: 43,
        question: "Which of the following statements regarding deadlock is correct?",
        options: [
            "A. Allocation is a logical process while acquisition is its physical implementation.",
            "B. Banker's Algorithm is used to guarantee absolute mutual exclusion during resource acquisition.",
            "C. A combination of semaphore and mutex ensures safe resource allocation.",
            "D. Kernel is responsible for exclusive resource acquisition by a process while IPC takes care of safe resource allocation among multiple processes."
        ],
        correct: 2,
        type: "single",
        explanation: "Đáp án C (theo key). Việc kết hợp các cơ chế đồng bộ hóa giúp đảm bảo an toàn, dù câu này hơi chung chung."
    },
    {
        id: 44,
        question: "In deadlock, what is mutual exclusion condition?",
        options: [
            "A. Processes currently holding resources that were granted earlier can request new resources.",
            "B. Resources previously granted cannot be forcibly taken away from a process. They must be explicitly released by the process holding them.",
            "C. There must be a circular list of two or more processes, each of which is waiting for a resource held by the next member of the chain.",
            "D. Each resource is either currently assigned to exactly one process or is available."
        ],
        correct: 3,
        type: "single",
        explanation: "Đáp án D. Mutual Exclusion (Loại trừ tương hỗ) nghĩa là tài nguyên chỉ thuộc về 1 tiến trình hoặc đang rảnh."
    },
    {
        id: 45,
        question: "In the context of resource allocation or resource management models. What does it mean for an arc to be directed from a process to a resource?",
        options: [
            "A. That the process is currently waiting for that resource.",
            "B. That the process is currently ready waiting for that resource.",
            "C. That the process is currently blocked waiting for that resource.",
            "D. That the process is currently running for that resource."
        ],
        correct: 0,
        type: "single",
        explanation: "Đáp án A. Cạnh từ Process -> Resource biểu thị yêu cầu (Request) và đang chờ."
    },
    {
        id: 46,
        question: "What does a resource allocation graph represent in the context of deadlock detection?",
        options: [
            "A. A graph that shows the number of resources allocated to each process.",
            "B. A graph that depicts the processes and resources and their relationships.",
            "C. A chart showing the execution order of processes.",
            "D. A diagram of CPU scheduling."
        ],
        correct: 1,
        type: "single",
        explanation: "Đáp án B. Biểu đồ phân phối tài nguyên thể hiện mối quan hệ giữa tiến trình và tài nguyên."
    },
    {
        id: 47,
        question: "In the Banker's algorithm, what is the purpose of the 'maximum demand' matrix?",
        options: [
            "A. To specify the number of instances of each resource currently held by each process.",
            "B. To record the maximum resources each process may need during its execution.",
            "C. To list the resources currently available in the system.",
            "D. To identify deadlocked processes."
        ],
        correct: 1,
        type: "single",
        explanation: "Đáp án B. Ma trận Max Demand ghi lại nhu cầu tối đa của mỗi tiến trình để thuật toán tính toán trạng thái an toàn."
    },
    {
        id: 48,
        question: "Which deadlock condition does 'Take resources away' attack?",
        options: [
            "A. Hold and wait",
            "B. Mutual exclusion",
            "C. No preemption",
            "D. Circular wait"
        ],
        correct: 2,
        type: "single",
        explanation: "Đáp án C. Việc lấy lại tài nguyên (Take resources away) chính là tấn công vào điều kiện 'No preemption' (Không được trưng dụng)."
    },
    {
        id: 49,
        question: "A problem closely related to deadlock and livelock is",
        options: [
            "A. Starvation",
            "B. Communication",
            "C. Two-phase locking",
            "D. Prevention"
        ],
        correct: 0,
        type: "single",
        explanation: "Đáp án A. Starvation (đói tài nguyên) là vấn đề liên quan mật thiết đến deadlock."
    },
    {
        id: 50,
        question: "Paravirtualization takes a different approach by modifying the source code of the guest operating system instead of performing sensitive instructions. In this context, which of the following is true?",
        options: [
            "A. The paravirtualized guest executes system calls",
            "B. The paravirtualized guest executes virtual calls",
            "C. The paravirtualized guest executes hyper calls",
            "D. The paravirtualized guest executes Hyper commands"
        ],
        correct: 2,
        type: "single",
        explanation: "Đáp án C. Trong Paravirtualization, OS máy khách thực hiện 'hyper calls' để giao tiếp trực tiếp với Hypervisor."
    }
];
