// Questions data for Fall 2024 Review
const questions = [
// ========== CÂU HỎI 1 ==========
{
    id: 1,
    question: "The operating system can be viewed as both a resource manager and an extended machine. From the extended machine perspective, what does the system provide to make the machine easier for users to operate?",
    options: [
        "Provide users with abstract information.",
        "Provide users with progress information.",
        "Provide users with memory information.",
        "Provide users with drive information."
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì từ góc độ máy mở rộng, hệ điều hành cung cấp thông tin trừu tượng để giúp người dùng vận hành máy dễ dàng hơn."
},

// ========== CÂU HỎI 2 ==========
{
    id: 2,
    question: "What is the structure of a disk drive?",
    options: [
        "Only one metal platter.",
        "Two metal platters.",
        "One or more metal platters.",
        "Many metal platters."
    ],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng vì ổ đĩa có cấu trúc gồm một hoặc nhiều đĩa kim loại."
},

// ========== CÂU HỎI 3 ==========
{
    id: 3,
    question: "What happens to the Program Counter after an instruction is fetched?",
    options: [
        "It is reset to zero.",
        "It is updated to point to the next instruction.",
        "It is used to store the result of the instruction.",
        "It is used to store the total length of the program being executed."
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì sau khi lấy lệnh, bộ đếm chương trình được cập nhật để trỏ đến lệnh tiếp theo."
},

// ========== CÂU HỎI 4 ==========
{
    id: 4,
    question: "What is the main advantage of multiprocessor systems, such as those used by Windows and Linux?",
    options: [
        "Increased throughput.",
        "Decreased throughput.",
        "Low-speed communication.",
        "Reduced reliability."
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì lợi thế chính của hệ thống đa xử lý là tăng thông lượng."
},

// ========== CÂU HỎI 5 ==========
{
    id: 5,
    question: "Which of the following is NOT part of the operating system?",
    options: [
        "Performance monitor.",
        "Input/Output control program.",
        "Job control program.",
        "Supervisor."
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì Performance monitor không phải là thành phần của hệ điều hành."
},

// ========== CÂU HỎI 6 ==========
{
    id: 6,
    question: "In Unix, which command is used to move the file pointer?",
    options: [
        "Write.",
        "Mount.",
        "Link.",
        "Iseek."
    ],
    correct: 3,
    type: "single",
    explanation: "Đáp án D đúng vì trong Unix, lệnh Iseek được sử dụng để di chuyển con trỏ file."
},

// ========== CÂU HỎI 7 ==========
{
    id: 7,
    question: "In a monolithic system, a simple structuring model includes:",
    options: [
        "Main procedure.",
        "Service procedures.",
        "Utility procedures.",
        "All of the above."
    ],
    correct: 3,
    type: "single",
    explanation: "Đáp án D đúng vì trong hệ thống monolithic, mô hình cấu trúc đơn giản bao gồm Main procedure, Service procedures và Utility procedures."
},

// ========== CÂU HỎI 8 ==========
{
    id: 8,
    question: "What are the basic states of a process?",
    options: [
        "Running, Ready, and Blocked.",
        "Running, Blocked, and Exit.",
        "Create, Running, and Exit.",
        "Create, Running, and Blocked."
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì các trạng thái cơ bản của một tiến trình là Running (đang chạy), Ready (sẵn sàng) và Blocked (bị chặn)."
},

// ========== CÂU HỎI 9 ==========
{
    id: 9,
    question: "Which of the following process state transitions is illegal?",
    options: [
        "Ready → Blocked (waiting).",
        "Running → Blocked (waiting).",
        "Blocked → Ready.",
        "Running → Ready."
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì chuyển đổi từ Ready sang Blocked là không hợp lệ. Tiến trình ở trạng thái Ready không thể chuyển trực tiếp sang Blocked."
},

// ========== CÂU HỎI 10 ==========
{
    id: 10,
    question: "A computer has 4GB of RAM, with 2GB used by the operating system. Each process is 1024MB and behaves the same. If the processes are idle and waiting for I/O 50% of the time, what is the CPU utilization?",
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
    question: "What defines a critical section in the context of the Windows operating system?",
    options: [
        "A section of code where the processor executes multiple threads simultaneously.",
        "A section of code where hardware interrupts are disabled.",
        "A segment of code that only one thread can execute at a time to avoid conflicts.",
        "A part of the kernel where system-level processes have higher priority than user processes."
    ],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng vì critical section là đoạn mã mà chỉ một thread có thể thực thi tại một thời điểm để tránh xung đột."
},

// ========== CÂU HỎI 12 ==========
{
    id: 12,
    question: "When a process is running in a contention zone and no other processes are running in that zone, what is this condition called?",
    options: [
        "Mutual exclusion.",
        "Bounded-waiting.",
        "Progress.",
        "Critical exclusion."
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì đây là điều kiện loại trừ lẫn nhau (Mutual exclusion)."
},

// ========== CÂU HỎI 13 ==========
{
    id: 13,
    question: "A preemptive version of Shortest Job First (SJF) scheduling is:",
    options: [
        "Shortest Process Next.",
        "First-Come, First-Served.",
        "Shortest Remaining Time Next.",
        "Shortest Used Time."
    ],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng vì Shortest Remaining Time Next là phiên bản chiếm ưu thế của SJF."
},

// ========== CÂU HỎI 14 ==========
{
    id: 14,
    question: "Which page table entry bit is used to indicate types of permitted access?",
    options: [
        "Present/absent bit.",
        "Caching disabled.",
        "Protection bit.",
        "Modified bit."
    ],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng vì Protection bit chỉ ra các loại truy cập được phép."
},

// ========== CÂU HỎI 15 ==========
{
    id: 15,
    question: "What is the address that the main memory unit sees and manipulates called?",
    options: [
        "Physical address.",
        "Address space.",
        "Physical space.",
        "Logical address."
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì địa chỉ mà bộ nhớ chính nhìn thấy và thao tác được gọi là địa chỉ vật lý (Physical address)."
},

// ========== CÂU HỎI 16 ==========
{
    id: 16,
    question: "Which memory management technique uses a binary representation where each bit corresponds to an allocation unit?",
    options: [
        "Bitmap.",
        "Linked List.",
        "Paging.",
        "Partition."
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì kỹ thuật Bitmap sử dụng biểu diễn nhị phân trong đó mỗi bit tương ứng với một đơn vị cấp phát."
},

// ========== CÂU HỎI 17 ==========
{
    id: 17,
    question: "A process that needs 12KB of memory is placed into a 20KB block. Which memory allocation method is used?",
    options: [
        "Worst-fit.",
        "First-fit.",
        "Best-fit.",
        "Next-fit."
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì Worst-fit sẽ đặt process vào khối nhớ lớn nhất có sẵn (20KB)."
},

// ========== CÂU HỎI 18 ==========
{
    id: 18,
    question: "Most virtual memory systems use a technique called:",
    options: [
        "Page Fault.",
        "Page Frames.",
        "Page Table.",
        "Paging."
    ],
    correct: 3,
    type: "single",
    explanation: "Đáp án D đúng vì hầu hết các hệ thống bộ nhớ ảo sử dụng kỹ thuật phân trang (Paging)."
},

// ========== CÂU HỎI 19 ==========
{
    id: 19,
    question: "A computer with a 32-bit address uses a two-level page table. If virtual addresses are split into a 10-bit top-level field, a 12-bit second-level field, and an offset, what is the page size?",
    options: [
        "512B page.",
        "1-KB page.",
        "2-KB page.",
        "4-KB page."
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng. Tính toán: Offset = 32 - 10 - 12 = 10 bits. Page size = 2^10 = 1024 bytes = 1KB."
},

// ========== CÂU HỎI 20 ==========
{
    id: 20,
    question: "If FIFO page replacement is used with three page frames, how many page faults occur with the reference string: 1, 3, 0, 3, 5, 6 (frames initially empty)?",
    options: [
        "6",
        "4",
        "7",
        "3"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng. Tính toán với chuỗi tham chiếu 1,3,0,3,5,6 và 3 khung trang sẽ cho 6 lỗi trang."
},

// ========== CÂU HỎI 21 ==========
{
    id: 21,
    question: "If FIFO page replacement is used with three page frames, how many page faults will occur with the reference string 1, 2, 3, 4, 1, 2 (assuming the frames are initially empty)?",
    options: [
        "6",
        "4",
        "5",
        "3"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng. Tính toán với chuỗi tham chiếu 1,2,3,4,1,2 và 3 khung trang sẽ cho 6 lỗi trang."
},

// ========== CÂU HỎI 22 ==========
{
    id: 22,
    question: "When a new process is created in a paging system, which timing is used to determine program size and create the page table?",
    options: [
        "Process creation time",
        "Process execution time",
        "Page fault time",
        "Process termination time"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì khi tạo process mới trong hệ thống phân trang, thời điểm tạo process được sử dụng để xác định kích thước chương trình và tạo bảng trang."
},

// ========== CÂU HỎI 23 ==========
{
    id: 23,
    question: "In memory management, what is the primary advantage of segmented memory over paging?",
    options: [
        "Simplified address translation",
        "Efficient use of memory space",
        "Reduced overhead in memory management",
        "Elimination of fragmentation"
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì lợi thế chính của bộ nhớ phân đoạn so với phân trang là sử dụng bộ nhớ hiệu quả hơn."
},

// ========== CÂU HỎI 24 ==========
{
    id: 24,
    question: "In a file access system, random access files are important for applications like databases. What two methods are used to specify where to start reading?",
    options: [
        "Write and Read",
        "Write and Seek",
        "Read and Seek",
        "Read and Write"
    ],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng vì Read và Seek là hai phương thức được sử dụng để chỉ định nơi bắt đầu đọc."
},

// ========== CÂU HỎI 25 ==========
{
    id: 25,
    question: "In UNIX, which type of file is used to model disks?",
    options: [
        "Regular files",
        "Character special files",
        "Block special files",
        "Directories"
    ],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng vì trong UNIX, block special files được sử dụng để mô hình hóa đĩa."
},

// ========== CÂU HỎI 26 ==========
{
    id: 26,
    question: "What is the state of a file when the process finishes and the file can be accessed by other processes?",
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

// ========== CÂU HỎI 27 ==========
{
    id: 27,
    question: "After a directory is read, what should be done to free internal table space?",
    options: [
        "Close",
        "Closedir",
        "Delete",
        "Opendir"
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì hàm closedir được sử dụng để đóng thư mục sau khi đọc và giải phóng không gian bảng nội bộ."
},

// ========== CÂU HỎI 28 ==========
{
    id: 28,
    question: "The simplest form of directory system, where one directory contains all files, is called the:",
    options: [
        "Root directory",
        "User directory",
        "Parent directory",
        "Current directory"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì hệ thống thư mục đơn giản nhất, nơi một thư mục chứa tất cả các file, được gọi là thư mục gốc (Root directory)."
},

// ========== CÂU HỎI 29 ==========
{
    id: 29,
    question: "Sector 0 of the disk, used to boot the computer, is called the:",
    options: [
        "DMA",
        "MBR",
        "FAT",
        "NTFS"
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì sector 0 của đĩa, được sử dụng để khởi động máy tính, được gọi là MBR (Master Boot Record)."
},

// ========== CÂU HỎI 30 ==========
{
    id: 30,
    question: "When the computer is booted, what is used to read and execute the boot process?",
    options: [
        "BIOS, Boot Block",
        "CPU, BIOS",
        "BIOS, MBR",
        "MBR, BIOS"
    ],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng vì khi máy tính khởi động, BIOS và MBR được sử dụng để đọc và thực thi quá trình khởi động."
},

// ========== CÂU HỎI 31 ==========
{
    id: 31,
    question: "Disk can be divided into one or more partitions. The first block of every partition is called:",
    options: [
        "Boot block",
        "Free block",
        "Super block",
        "MBR"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì khối đầu tiên của mỗi partition được gọi là boot block."
},

// ========== CÂU HỎI 32 ==========
{
    id: 32,
    question: "In Windows 95, what is the maximum partition size if the FAT type is FAT-32 and the block size is 16 KB?",
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

// ========== CÂU HỎI 33 ==========
{
    id: 33,
    question: "In a DMA transfer cycle, what two modes can many buses operate in?",
    options: [
        "Word-at-a-time mode and byte mode",
        "Word-at-a-time mode and block mode",
        "Word-at-a-time mode and bit mode",
        "Word-at-a-time mode and page mode"
    ],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì trong chu kỳ chuyển DMA, nhiều bus có thể hoạt động ở chế độ Word-at-a-time và Block mode."
},

// ========== CÂU HỎI 34 ==========
{
    id: 34,
    question: "An interrupt has four properties: 1) The PC (Program Counter) is saved in a known place. 2) All instructions before the one pointed to by the PC have completed. 3) No instruction beyond the one pointed to by the PC has finished. 4) The execution state of the instruction pointed to by the PC is known. What type of interrupt is this?",
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
    question: "Which I/O mode is most suitable for transferring data between memory and I/O devices without the CPU being bothered?",
    options: [
        "Direct Memory Access",
        "Programmed I/O",
        "Interrupt-driven I/O",
        "Polling"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì DMA phù hợp nhất để chuyển dữ liệu giữa bộ nhớ và thiết bị I/O mà không làm phiền CPU."
},

// ========== CÂU HỎI 36 ==========
{
    id: 36,
    question: "What does the term 'blocking' refer to in the context of I/O software?",
    options: [
        "A technique for managing device drivers",
        "A mechanism for ensuring device synchronization",
        "The process of stopping a process until an I/O operation is completed",
        "A method of allocating memory for I/O operations"
    ],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng vì 'blocking' đề cập đến quá trình dừng một process cho đến khi hoạt động I/O hoàn tất."
},

// ========== CÂU HỎI 37 ==========
{
    id: 37,
    question: "Which of the following is NOT a responsibility of the Device-Independent I/O Software layer?",
    options: [
        "Uniform interfacing for device drivers",
        "Allocating and releasing dedicated devices",
        "Providing a device-independent block size",
        "Allocating port numbers to I/O devices",
        "Error handling",
        "Buffering"
    ],
    correct: 3,
    type: "single",
    explanation: "Đáp án D đúng vì cấp phát số cổng cho thiết bị I/O KHÔNG phải là trách nhiệm của lớp phần mềm I/O độc lập thiết bị."
},

// ========== CÂU HỎI 38 ==========
{
    id: 38,
    question: "RAID level ___ works worst with operating systems that habitually ask for data one sector at a time.",
    options: [
        "0",
        "1",
        "2",
        "3"
    ],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì RAID level 0 hoạt động kém nhất với hệ điều hành thường xuyên yêu cầu dữ liệu một sector tại một thời điểm."
},

// ========== CÂU HỎI 39 ==========
{
    id: 39,
    question: "Which operation in stable storage involves writing and verifying a block on both drives until it is successfully written and verified?",
    options: [
        "Stable read",
        "Crash recovery",
        "Stable write",
        "Data synchronization"
    ],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng vì Stable write liên quan đến việc ghi và xác minh một khối trên cả hai ổ đĩa cho đến khi nó được ghi và xác minh thành công."
},

// ========== CÂU HỎI 40 ==========
{
    id: 40,
    question: "Which type of clock in a computer system keeps track of the current time and date and is typically battery-powered to retain data even when the system is turned off?",
    options: [
        "System clock",
        "CPU clock",
        "Real-time clock (RTC)",
        "Network clock"
    ],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng vì Real-time clock (RTC) theo dõi thời gian và ngày hiện tại, thường được cấp nguồn bằng pin để giữ dữ liệu ngay cả khi hệ thống tắt."
}
];