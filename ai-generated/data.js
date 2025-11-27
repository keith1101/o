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

    // ========== CÂU HỎI 2 ==========
    {
        id: 2,
        question: "You are designing a file system for a 1 TB (10^12 bytes) disk drive using 4 KB (2^12 bytes) blocks. If you choose to manage free space using a bitmap, approximately how much memory (in MB) is required to store the bitmap in RAM?",
        options: [
            "4 MB",
            "16 MB",
            "30.5 MB",
            "128 MB"
        ],
        correct: 2,
        type: "single",
        explanation: "Tổng số khối = 10^12 / 4096 ≈ 244,140,625. Bitmap cần 1 bit/khối => 244,140,625 bits. Tổng bytes = 244,140,625 / 8 ≈ 30,517,578 bytes ≈ 30.5 MB. [cite: 2836]"
    },

    // ========== CÂU HỎI 3 ==========
    {
        id: 3,
        question: "Consider the UNIX V7 file system architecture. Assume a block size of 4 KB and a block pointer size of 4 bytes. What is the maximum file size strictly using the double indirect block mechanism?",
        options: [
            "4 MB",
            "16 MB",
            "4 GB",
            "1 TB"
        ],
        correct: 2,
        type: "single",
        explanation: "Số con trỏ mỗi khối = 4096 / 4 = 1024. Double indirect trỏ đến 1024 khối, mỗi khối trỏ đến 1024 khối dữ liệu. Tổng khối dữ liệu = 1024 * 1024 = 1,048,576. Dung lượng = 1,048,576 * 4KB = 4GB. [cite: 2983]"
    },

    // ========== CÂU HỎI 4 ==========
    {
        id: 4,
        question: "A system has 4 processes (A, B, C, D) and 10 units of Resource R. Used: 8 (A:2, B:1, C:2, D:3). Available: 2. Max Needs: A(6), B(5), C(4), D(7). Is the state Safe?",
        options: [
            "Unsafe",
            "Safe (Sequence: A, B, C, D)",
            "Safe (Sequence: C, B, A, D)",
            "Safe (Sequence: D, C, B, A)"
        ],
        correct: 2,
        type: "single",
        explanation: "Available=2. C cần 2 (Max 4 - Has 2), đủ => Run C. C trả 2 => Avail=4. A cần 4 (6-2), B cần 4 (5-1), D cần 4 (7-3). Tất cả <= 4. Chạy B, A, D. Chuỗi an toàn: C, B, A, D. [cite: 605]"
    },

    // ========== CÂU HỎI 5 ==========
    {
        id: 5,
        question: "A system uses a 32-bit virtual address space and 4 KB pages. If the system uses a single-level page table, how many entries are in the page table?",
        options: [
            "2^10 (1024)",
            "2^12 (4096)",
            "2^20 (approx 1 million)",
            "2^32 (approx 4 billion)"
        ],
        correct: 2,
        type: "single",
        explanation: "Kích thước trang 4KB = 2^12 bytes (offset 12 bit). Địa chỉ ảo 32 bit. Số bit cho VPN = 32 - 12 = 20. Số mục bảng trang = 2^20. [cite: 6843]"
    },

    // ========== CÂU HỎI 6 ==========
    {
        id: 6,
        question: "Which of the following correctly describes the distinction between a Type 1 and Type 2 hypervisor?",
        options: [
            "Type 1 runs on top of a host OS; Type 2 runs on bare metal.",
            "Type 1 runs on bare metal; Type 2 runs on top of a host OS.",
            "Type 1 uses binary translation; Type 2 uses paravirtualization.",
            "Type 1 supports Windows guests only; Type 2 supports Linux guests only."
        ],
        correct: 1,
        type: "single",
        explanation: "Type 1 hypervisor chạy trực tiếp trên phần cứng (bare metal), trong khi Type 2 chạy như một ứng dụng trên hệ điều hành chủ. [cite: 1298]"
    },

    // ========== CÂU HỎI 7 ==========
    {
        id: 7,
        question: "In the Windows operating system architecture, what is the specific role of the HAL (Hardware Abstraction Layer)?",
        options: [
            "To manage the GUI and windowing system.",
            "To check security descriptors and Access Control Lists.",
            "To present a uniform hardware interface to the kernel, masking hardware differences.",
            "To manage the Windows Registry hives."
        ],
        correct: 2,
        type: "single",
        explanation: "HAL (hal.dll) tạo ra một giao diện phần cứng tiêu chuẩn cho kernel, che giấu sự khác biệt giữa các triển khai bo mạch chủ. [cite: 7691]"
    },

    // ========== CÂU HỎI 8 ==========
    {
        id: 8,
        question: "What is the primary advantage of Segmentation over Paging?",
        options: [
            "It eliminates external fragmentation.",
            "It provides a single linear address space.",
            "It facilitates sharing of procedures and data between users by providing logically independent address spaces.",
            "It is transparent to the programmer."
        ],
        correct: 2,
        type: "single",
        explanation: "Phân đoạn cho phép chương trình được chia thành các không gian địa chỉ độc lập hợp lý (như code, data, stack), hỗ trợ chia sẻ và bảo vệ tốt hơn. [cite: 7403]"
    },

    // ========== CÂU HỎI 9 ==========
    {
        id: 9,
        question: "Which of the following is the correct sequence for a DMA transfer?",
        options: [
            "CPU interrupts device -> Device transfers data -> CPU acknowledges.",
            "CPU programs DMA controller -> DMA requests transfer -> Disk transfers data -> DMA interrupts CPU.",
            "Device transfers data -> CPU programs DMA -> Disk controller interrupts.",
            "DMA controller interrupts CPU -> CPU programs disk -> Data flows to memory."
        ],
        correct: 1,
        type: "single",
        explanation: "CPU lập trình bộ điều khiển DMA -> DMA yêu cầu chuyển -> Dữ liệu được chuyển -> DMA gửi ngắt khi hoàn tất. [cite: 3144]"
    },

    // ========== CÂU HỎI 10 ==========
    {
        id: 10,
        question: "Which RAID level provides redundancy by duplicating all data on a second drive (mirroring) without using parity?",
        options: [
            "RAID 0",
            "RAID 1",
            "RAID 5",
            "RAID 6"
        ],
        correct: 1,
        type: "single",
        explanation: "RAID 1 là ánh xạ (mirroring), cung cấp dự phòng thực sự mà không cần parity. RAID 0 chỉ striping, RAID 5/6 dùng parity. [cite: 3453]"
    },

    // ========== CÂU HỎI 11 ==========
    {
        id: 11,
        question: "In a NUMA (Non-Uniform Memory Access) multiprocessor system:",
        options: [
            "Access to all memory modules takes the same amount of time.",
            "Access to remote memory is possible but slower than access to local memory.",
            "There is no shared memory; communication is done purely via messages.",
            "All CPUs share a single L2 cache."
        ],
        correct: 1,
        type: "single",
        explanation: "Hệ thống NUMA có không gian địa chỉ đơn nhưng truy cập bộ nhớ từ xa (trên node khác) chậm hơn bộ nhớ cục bộ. [cite: 8516]"
    },

    // ========== CÂU HỎI 12 ==========
    {
        id: 12,
        question: "What is the specific function of the Zygote process in Android?",
        options: [
            "It is the kernel scheduler for Android.",
            "It acts as the window manager for the GUI.",
            "It creates a new Dalvik process by forking itself to speed up application launch.",
            "It manages the SQL database (SQLite)."
        ],
        correct: 2,
        type: "single",
        explanation: "Zygote tải trước các lớp và tài nguyên chung, sau đó fork chính nó để tạo ra tiến trình Dalvik mới nhanh chóng cho ứng dụng. [cite: 6035]"
    },

    // ========== CÂU HỎI 13 ==========
    {
        id: 13,
        question: "When a virtual page number is found in the Translation Lookaside Buffer (TLB), what happens?",
        options: [
            "A page fault occurs.",
            "The hardware fetches the page frame number directly from the TLB without accessing the page table in memory.",
            "The OS loads the page from the disk to memory.",
            "The MMU switches to segmentation mode."
        ],
        correct: 1,
        type: "single",
        explanation: "TLB là bộ nhớ cache phần cứng ánh xạ trang ảo sang khung vật lý. Nếu hit, việc dịch địa chỉ diễn ra ngay lập tức mà không cần truy cập bảng trang trong bộ nhớ. [cite: 6896]"
    },

    // ========== CÂU HỎI 14 ==========
    {
        id: 14,
        question: "Where is the Boot Configuration Database (BCD) stored in the Windows Registry?",
        options: [
            "HKLM\\SOFTWARE",
            "HKLM\\SAM",
            "HKLM\\BCD",
            "HKEY_USERS\\DEFAULT"
        ],
        correct: 2,
        type: "single",
        explanation: "Cơ sở dữ liệu cấu hình khởi động (BCD) được lưu trữ tại HKLM\\BCD00000000. [cite: 7663]"
    },

    // ========== CÂU HỎI 15 ==========
    {
        id: 15,
        question: "Android uses a specific mechanism for Inter-Process Communication (IPC) based on OpenBinder. What is this mechanism called?",
        options: [
            "D-Bus",
            "Pipes",
            "Binder",
            "Local Procedure Call (LPC)"
        ],
        correct: 2,
        type: "single",
        explanation: "Android sử dụng cơ chế Binder IPC để cho phép các ứng dụng và dịch vụ hệ thống giao tiếp. [cite: 6041]"
    },

    // ========== CÂU HỎI 16 ==========
    {
        id: 16,
        question: "You are managing a system with a mix of highly interactive I/O-bound processes and CPU-bound background processes. Which scheduling algorithm is best suited to ensure the interface remains responsive?",
        options: [
            "First-Come First-Served",
            "Priority Scheduling",
            "Shortest Job First",
            "Lottery Scheduling"
        ],
        correct: 1,
        type: "single",
        explanation: "Các hệ thống tương tác ưu tiên thời gian phản hồi. Lập lịch ưu tiên (Priority Scheduling) cho phép các tiến trình I/O-bound (thường dùng CPU ngắn) chạy ngay lập tức khi sẵn sàng. [cite: 4976]"
    },

    // ========== CÂU HỎI 17 ==========
    {
        id: 17,
        question: "What is the primary disadvantage of implementing threads purely in User Space?",
        options: [
            "Context switching is slower.",
            "Blocking System Calls block the entire process.",
            "They require hardware support.",
            "They cannot share global variables."
        ],
        correct: 1,
        type: "single",
        explanation: "Trong user-level threads, kernel không biết về thread. Nếu một thread thực hiện blocking call, kernel chặn cả tiến trình, chặn tất cả các thread khác. [cite: 4257]"
    },

    // ========== CÂU HỎI 18 ==========
    {
        id: 18,
        question: "In a multiprocessor system, what is 'Gang Scheduling'?",
        options: [
            "Scheduling processes based on their gang affiliation (Process Group ID).",
            "Scheduling a group of related threads onto different CPUs simultaneously.",
            "Using a single global queue for all processors.",
            "Allowing one thread to monopolize all CPUs."
        ],
        correct: 1,
        type: "single",
        explanation: "Gang scheduling lập lịch một nhóm các thread liên quan cùng lúc trên các CPU khác nhau để giảm thiểu thời gian chờ đợi khi giao tiếp. [cite: 8763]"
    },

    // ========== CÂU HỎI 19 ==========
    {
        id: 19,
        question: "How does Lottery Scheduling handle process priority?",
        options: [
            "By assigning static priority numbers.",
            "By using aging.",
            "By distributing 'tickets'; probability of running is proportional to tickets held.",
            "By giving more time slice to CPU-bound processes."
        ],
        correct: 2,
        type: "single",
        explanation: "Lottery scheduling cấp vé số cho các tiến trình. Khi lập lịch, một vé được chọn ngẫu nhiên; tiến trình giữ vé đó được chạy. Độ ưu tiên tỉ lệ thuận với số vé. [cite: 5017]"
    },

    // ========== CÂU HỎI 20 ==========
    {
        id: 20,
        question: "What is the defining difference between Hard Real-Time and Soft Real-Time scheduling?",
        options: [
            "Hard Real-Time is faster.",
            "Soft Real-Time uses shorter time slices.",
            "Hard Real-Time must meet absolute deadlines; Soft Real-Time tolerates occasional misses.",
            "Hard Real-Time is for military use only."
        ],
        correct: 2,
        type: "single",
        explanation: "Hard real-time bắt buộc phải đáp ứng deadline tuyệt đối (nếu lỡ sẽ gây lỗi nghiêm trọng). Soft real-time chấp nhận lỡ deadline thỉnh thoảng (chỉ giảm chất lượng)."
    },

    // ========== CÂU HỎI 21 ==========
    {
        id: 21,
        question: "Contrast the Bell-LaPadula model with the Biba model. What is the primary goal of each?",
        options: [
            "Bell-LaPadula: Integrity; Biba: Confidentiality",
            "Bell-LaPadula: Availability; Biba: Integrity",
            "Bell-LaPadula: Confidentiality; Biba: Integrity",
            "Both focus on Confidentiality"
        ],
        correct: 2,
        type: "single",
        explanation: "Bell-LaPadula tập trung vào bảo mật thông tin (No Read Up, No Write Down). Biba tập trung vào tính toàn vẹn dữ liệu (No Read Down, No Write Up). [cite: 1622]"
    },

    // ========== CÂU HỎI 22 ==========
    {
        id: 22,
        question: "In Android, if an application tries to access a resource (like the Camera) for which it has not been granted permission in the manifest, what happens?",
        options: [
            "The OS prompts the user.",
            "A Security Exception is thrown.",
            "The application crashes silently.",
            "The access is granted but logged."
        ],
        correct: 1,
        type: "single",
        explanation: "Android sử dụng mô hình bảo mật dựa trên quyền. Nếu ứng dụng truy cập Content Provider mà không có quyền, hệ thống từ chối và ném ra ngoại lệ bảo mật. [cite: 6453]"
    },

    // ========== CÂU HỎI 23 ==========
    {
        id: 23,
        question: "Windows uses a specific structure to define who can access a secure object. What is the list called that contains the Access Control Entries (ACEs) defining allowed/denied permissions?",
        options: [
            "SACL",
            "DACL",
            "Token",
            "SID"
        ],
        correct: 1,
        type: "single",
        explanation: "Security Descriptor chứa DACL (Discretionary Access Control List), danh sách này chứa các mục (ACE) xác định quyền cho phép hoặc từ chối truy cập. [cite: 8367]"
    },

    // ========== CÂU HỎI 24 ==========
    {
        id: 24,
        question: "Referencing Chapter 9 (Security), how does a 'stack canary' help prevent buffer overflow attacks?",
        options: [
            "It encrypts the return address.",
            "It randomizes the stack location (ASLR).",
            "It places a known value before the return address; if modified, overflow is detected.",
            "It makes the stack non-executable."
        ],
        correct: 2,
        type: "single",
        explanation: "Stack canary là một giá trị đã biết đặt giữa biến cục bộ và địa chỉ trả về. Nếu canary bị thay đổi (do tràn bộ đệm), hệ thống phát hiện và hủy tiến trình. [cite: 1828]"
    },

    // ========== CÂU HỎI 25 ==========
    {
        id: 25,
        question: "How does Code Signing ensure the integrity of software received over the internet?",
        options: [
            "By encrypting the entire code.",
            "By using a checksum.",
            "By encrypting a hash of the code with the vendor's private key.",
            "By registering the software with Microsoft."
        ],
        correct: 2,
        type: "single",
        explanation: "Code signing: nhà cung cấp tạo hash của mã, mã hóa hash bằng khóa riêng. Người dùng giải mã bằng khóa công khai và so sánh hash để đảm bảo tính toàn vẹn. [cite: 2170]"
    },

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
        correct: 1,
        type: "single",
        explanation: "Vị trí hiện tại: 50. Các yêu cầu: 100, 180, 40, 120.\n1. Từ 50, gần nhất là 40 (khoảng cách 10).\n2. Từ 40, gần nhất là 100 (khoảng cách 60).\n3. Từ 100, gần nhất là 120 (khoảng cách 20).\n4. Từ 120, gần nhất là 180 (khoảng cách 60).\nTổng di chuyển: 10 + 60 + 20 + 60 = 150. (Chapter 5, Disk Arm Scheduling Algorithms)."
    },

    // ========== CÂU HỎI 27 ==========
    {
        id: 27,
        question: "In the context of Memory Management, what is 'Thrashing'?",
        options: [
            "When the hard disk fails due to excessive writes.",
            "When a process spends more time paging (swapping pages in and out) than executing.",
            "When the CPU clock speed is throttled to save power.",
            "When memory is fully fragmented and no processes can run."
        ],
        correct: 1,
        type: "single",
        explanation: "Thrashing xảy ra khi hệ thống dành phần lớn thời gian để chuyển trang (paging) giữa bộ nhớ chính và đĩa thay vì thực thi lệnh, thường do tập làm việc (working set) của các tiến trình lớn hơn bộ nhớ vật lý. (Chapter 3)."
    },

    // ========== CÂU HỎI 28 ==========
    {
        id: 28,
        question: "Regarding file linking in UNIX/Linux filesystems, what is a key limitation of 'Hard Links' compared to 'Symbolic Links'?",
        options: [
            "Hard links consume more disk space.",
            "Hard links cannot point to directories or files on a different partition/file system.",
            "Hard links are slower to access.",
            "Hard links become invalid if the original file name is changed."
        ],
        correct: 1,
        type: "single",
        explanation: "Hard link trỏ trực tiếp đến i-node của file. Do số i-node chỉ có ý nghĩa trong một file system cụ thể, hard link không thể trỏ sang file system (phân vùng) khác. Symbolic link chứa đường dẫn nên có thể trỏ đi bất cứ đâu. (Chapter 4, File Sharing)."
    },

    // ========== CÂU HỎI 29 ==========
    {
        id: 29,
        question: "In the 'Reader-Writers' problem, what is the primary constraint required to prevent data corruption?",
        options: [
            "Multiple readers and multiple writers can access the database simultaneously.",
            "Only one reader can access the database at a time.",
            "Writers must have exclusive access; no other reader or writer can be active while a writer is writing.",
            "Readers must wait for all writers to finish before checking the database status."
        ],
        correct: 2,
        type: "single",
        explanation: "Để đảm bảo tính toàn vẹn, khi một Writer đang viết, không ai khác (Reader hoặc Writer) được phép truy cập. Nhiều Reader có thể đọc cùng lúc nếu không có Writer. (Chapter 2, The Readers and Writers Problem)."
    },

    // ========== CÂU HỎI 30 ==========
    {
        id: 30,
        question: "Which hardware component allows the operating system to support Virtual Memory by translating virtual addresses to physical addresses?",
        options: [
            "ALU (Arithmetic Logic Unit)",
            "DMA Controller",
            "MMU (Memory Management Unit)",
            "BIOS"
        ],
        correct: 2,
        type: "single",
        explanation: "MMU (Memory Management Unit) là phần cứng chịu trách nhiệm dịch địa chỉ ảo sang địa chỉ vật lý và kiểm tra quyền truy cập bộ nhớ. (Chapter 3, Paging)."
    },

    // ========== CÂU HỎI 31 ==========
    {
        id: 31,
        question: "Consider the WSClock page replacement algorithm. What happens if the hand points to a page with R=1 (Referenced bit is set)?",
        options: [
            "The page is immediately evicted to disk.",
            "The R bit is cleared (set to 0), the time of last use is updated, and the hand advances.",
            "The algorithm stops and allocates more memory.",
            "The page is locked into memory permanently."
        ],
        correct: 1,
        type: "single",
        explanation: "Trong thuật toán WSClock, nếu R=1, trang đó vừa được sử dụng. Hệ thống sẽ xóa bit R, cập nhật thời gian sử dụng lần cuối, và chuyển sang trang tiếp theo để tránh loại bỏ trang đang dùng. (Chapter 3, Figure 3-20)."
    },

    // ========== CÂU HỎI 32 ==========
    {
        id: 32,
        question: "In Windows, the 'Registry' is a hierarchical database used to store configuration. Which 'Hive' typically stores configuration data specific to the currently logged-in user?",
        options: [
            "HKLM (HKEY_LOCAL_MACHINE)",
            "HKCU (HKEY_CURRENT_USER)",
            "HKCR (HKEY_CLASSES_ROOT)",
            "HKU (HKEY_USERS)"
        ],
        correct: 1,
        type: "single",
        explanation: "HKCU (HKEY_CURRENT_USER) chứa dữ liệu cấu hình cho người dùng hiện đang đăng nhập. Nó thực chất là một liên kết đến subkey tương ứng trong HKEY_USERS. (Chapter 11, The Windows Registry)."
    },

    // ========== CÂU HỎI 33 ==========
    {
        id: 33,
        question: "What is the main purpose of a 'Trap' (or Exception) in an operating system?",
        options: [
            "To physically disconnect I/O devices.",
            "To switch execution from User Mode to Kernel Mode to perform a system call or handle an error.",
            "To prevent the CPU from overheating.",
            "To deadlock a process intentionally."
        ],
        correct: 1,
        type: "single",
        explanation: "Trap là một cơ chế phần mềm (như lệnh ngắt mềm) chuyển CPU từ chế độ người dùng sang chế độ nhân để thực hiện system call hoặc xử lý lỗi (như chia cho 0). (Chapter 1, System Calls)."
    },

    // ========== CÂU HỎI 34 ==========
    {
        id: 34,
        question: "In the context of Deadlock Detection, if a Resource Allocation Graph contains a cycle, does it always imply a deadlock?",
        options: [
            "Yes, a cycle always means deadlock.",
            "No, a cycle is necessary but not sufficient if there are multiple instances of each resource type.",
            "No, cycles are irrelevant to deadlock.",
            "Yes, but only in single-processor systems."
        ],
        correct: 1,
        type: "single",
        explanation: "Nếu mỗi loại tài nguyên chỉ có 1 đơn vị, vòng tròn đồng nghĩa với deadlock. Nhưng nếu có nhiều đơn vị (multiple instances), vòng tròn là điều kiện cần nhưng chưa đủ (process khác có thể giải phóng tài nguyên phá vỡ vòng tròn). (Chapter 6, Deadlock Detection)."
    },

    // ========== CÂU HỎI 35 ==========
    {
        id: 35,
        question: "Which I/O software layer is responsible for naming, protection, blocking, buffering, and allocation?",
        options: [
            "Interrupt Handlers",
            "Device Drivers",
            "Device-Independent I/O Software",
            "User-level I/O Software"
        ],
        correct: 2,
        type: "single",
        explanation: "Phần mềm I/O độc lập với thiết bị (Device-Independent I/O Software) thực hiện các chức năng chung cho mọi thiết bị như đặt tên, bảo vệ, đệm, v.v. (Chapter 5, Figure 5-17)."
    },

    // ========== CÂU HỎI 36 ==========
    {
        id: 36,
        question: "In Android, which component is primarily responsible for managing the lifecycle of applications and the back stack of screens?",
        options: [
            "PackageManager",
            "ActivityManager",
            "WindowManager",
            "TelephonyManager"
        ],
        correct: 1,
        type: "single",
        explanation: "ActivityManager quản lý vòng đời của các Activity (màn hình ứng dụng) và ngăn xếp (stack) điều hướng của người dùng. (Chapter 10, Android Architecture)."
    },

    // ========== CÂU HỎI 37 ==========
    {
        id: 37,
        question: "Calculate the maximum number of pages a 32-bit virtual address space can support if the page size is 8 KB.",
        options: [
            "2^19",
            "2^20",
            "2^32",
            "2^13"
        ],
        correct: 0,
        type: "single",
        explanation: "Page size = 8KB = 2^13 bytes. Virtual Address = 32 bits. Số bit cho Page Number = 32 - 13 = 19. Số trang = 2^19 = 524,288 trang. (Chapter 3)."
    },

    // ========== CÂU HỎI 38 ==========
    {
        id: 38,
        question: "Which type of malware is a standalone program that replicates itself to spread to other computers, often over a network, without needing a host program?",
        options: [
            "Virus",
            "Worm",
            "Trojan Horse",
            "Spyware"
        ],
        correct: 1,
        type: "single",
        explanation: "Worm (Sâu máy tính) là chương trình độc lập tự nhân bản qua mạng. Virus cần đính kèm vào vật chủ (file/chương trình). (Chapter 9)."
    },

    // ========== CÂU HỎI 39 ==========
    {
        id: 39,
        question: "What is 'Paravirtualization'?",
        options: [
            "Virtualization where the guest OS is unmodified and thinks it's running on real hardware.",
            "Virtualization where the guest OS is modified to communicate explicitly with the hypervisor for better performance.",
            "Running a virtual machine inside another virtual machine.",
            "Using a simulator to run code from a different CPU architecture."
        ],
        correct: 1,
        type: "single",
        explanation: "Paravirtualization yêu cầu sửa đổi hệ điều hành khách (Guest OS) để nó biết nó đang chạy trên ảo hóa và gọi hypercalls để tối ưu hiệu năng. (Chapter 7)."
    },

    // ========== CÂU HỎI 40 ==========
    {
        id: 40,
        question: "In a Unix-like file system using I-nodes, where are the file's attributes (metadata like owner, permissions, size) stored?",
        options: [
            "In the file's data blocks.",
            "In the directory entry.",
            "In the I-node.",
            "In the Superblock."
        ],
        correct: 2,
        type: "single",
        explanation: "Trong UNIX, tên file nằm trong thư mục, nhưng tất cả metadata (metadata) như quyền, chủ sở hữu, kích thước, thời gian đều nằm trong cấu trúc I-node. (Chapter 4, I-nodes)."
    },

    // ========== CÂU HỎI 41 ==========
    {
        id: 41,
        question: "Which problem involves a lower-priority process holding a lock needed by a higher-priority process, preventing the high-priority process from running?",
        options: [
            "Deadlock",
            "Priority Inversion",
            "Starvation",
            "Race Condition"
        ],
        correct: 1,
        type: "single",
        explanation: "Priority Inversion (Đảo ngược độ ưu tiên) xảy ra khi tiến trình ưu tiên thấp giữ tài nguyên mà tiến trình ưu tiên cao cần, khiến tiến trình ưu tiên cao phải chờ (gián tiếp bị 'chậm' hơn tiến trình thấp). (Chapter 11, Figure 11-27)."
    },

    // ========== CÂU HỎI 42 ==========
    {
        id: 42,
        question: "In the context of Security, what is a 'Covert Channel'?",
        options: [
            "An encrypted connection like HTTPS.",
            "A mechanism for processes to communicate in a way that violates the system's security policy (e.g., leaking data via CPU load modulation).",
            "A secure tunnel for VPN.",
            "A back door left by a developer."
        ],
        correct: 1,
        type: "single",
        explanation: "Covert Channel là kênh giao tiếp không chính thống dùng để truyền thông tin trái phép, ví dụ như sử dụng việc khóa file hoặc tải CPU để truyền bit 0/1. (Chapter 9, Covert Channels)."
    },

    // ========== CÂU HỎI 43 ==========
    {
        id: 43,
        question: "What is the purpose of the 'Lookaside Lists' in the Windows Heap Manager?",
        options: [
            "To store backup copies of the registry.",
            "To optimize the allocation and deallocation of small, fixed-size memory blocks.",
            "To manage the list of active processes.",
            "To cache disk sectors for faster I/O."
        ],
        correct: 1,
        type: "single",
        explanation: "Lookaside lists (trong Windows Heap Manager) là các danh sách liên kết đơn dùng để cấp phát nhanh các khối bộ nhớ nhỏ, kích thước cố định mà không cần tìm kiếm phức tạp. (Chapter 11)."
    },

    // ========== CÂU HỎI 44 ==========
    {
        id: 44,
        question: "Which scheduling algorithm is designed to give each user a fair share of the CPU, regardless of how many processes each user is running?",
        options: [
            "Round Robin",
            "Fair-Share Scheduling",
            "Priority Scheduling",
            "Shortest Job First"
        ],
        correct: 1,
        type: "single",
        explanation: "Fair-Share Scheduling chia CPU theo người dùng (users) thay vì theo tiến trình. Nếu User A có 1 process và User B có 50 process, Fair-Share vẫn đảm bảo User A nhận được khoảng 50% CPU. (Chapter 2)."
    },

    // ========== CÂU HỎI 45 ==========
    {
        id: 45,
        question: "In a Distributed System, what is 'False Sharing'?",
        options: [
            "When two users share a password incorrectly.",
            "When two unrelated variables reside in the same memory page/block, causing unnecessary cache invalidations between processors.",
            "When a file is shared but neither user can write to it.",
            "When the OS reports more memory than is physically available."
        ],
        correct: 1,
        type: "single",
        explanation: "False Sharing xảy ra trong hệ thống đa xử lý khi hai biến độc lập nằm cùng một cache line hoặc page. Khi CPU 1 ghi biến A, nó làm mất hiệu lực cache của CPU 2 đang đọc biến B (cùng line), gây giảm hiệu năng. (Chapter 8, Figure 8-23)."
    },

    // ========== CÂU HỎI 46 ==========
    {
        id: 46,
        question: "What does the 'Sticky Bit' on a directory in UNIX/Linux typically achieve?",
        options: [
            "It keeps the directory in memory permanently.",
            "It allows only the file's owner (or root) to delete or rename files within that directory.",
            "It prevents any new files from being created.",
            "It makes all files in the directory executable."
        ],
        correct: 1,
        type: "single",
        explanation: "Sticky bit (thường dùng cho /tmp) đảm bảo rằng chỉ chủ sở hữu của file mới có quyền xóa file đó, ngay cả khi thư mục có quyền ghi cho mọi người (rwxrwxrwx). (Chapter 4)."
    },

    // ========== CÂU HỎI 47 ==========
    {
        id: 47,
        question: "Which mechanism is used in Windows to ensure that kernel-mode drivers are authentic and haven't been tampered with?",
        options: [
            "ASLR",
            "Code Signing (Driver Signing)",
            "DEP (Data Execution Prevention)",
            "UAC (User Account Control)"
        ],
        correct: 1,
        type: "single",
        explanation: "Driver Signing (Code Signing) yêu cầu driver phải được ký số bởi một thực thể tin cậy (như Microsoft) mới được tải vào kernel 64-bit, đảm bảo tính toàn vẹn. (Chapter 11, Security Mitigations)."
    },

    // ========== CÂU HỎI 48 ==========
    {
        id: 48,
        question: "In the context of Multiprocessor Systems, what does UMA stand for?",
        options: [
            "Uniform Memory Access",
            "Universal Memory Architecture",
            "Unique Memory Allocation",
            "User Mode Access"
        ],
        correct: 0,
        type: "single",
        explanation: "UMA (Uniform Memory Access) là kiến trúc đa xử lý mà thời gian truy cập bất kỳ vị trí bộ nhớ nào là như nhau đối với mọi CPU. (Chapter 8)."
    },

    // ========== CÂU HỎI 49 ==========
    {
        id: 49,
        question: "Consider a system with 4 resources of the same type. 3 processes (P1, P2, P3) each need maximum 2 resources. Is a deadlock possible?",
        options: [
            "Yes, if all request 1 resource simultaneously.",
            "No, deadlock is impossible.",
            "Yes, if P1 requests 2 resources immediately.",
            "Depends on the scheduling algorithm."
        ],
        correct: 1,
        type: "single",
        explanation: "Tổng nhu cầu tối đa nếu mỗi process giữ 1 resource là 3. Có 4 resource, nên luôn còn ít nhất 1 resource để một process hoàn thành (nhận resource thứ 2). Do đó, deadlock là không thể. (Chapter 6)."
    },

    // ========== CÂU HỎI 50 ==========
    {
        id: 50,
        question: "What is the 'Ostrich Algorithm' in the context of operating systems?",
        options: [
            "An algorithm that hides processes from the user.",
            "A strategy of ignoring potential problems (like rare deadlocks) because the cost of prevention is too high.",
            "A fast search algorithm for large databases.",
            "A scheduling algorithm that favors long jobs."
        ],
        correct: 1,
        type: "single",
        explanation: "Thuật toán Đà điểu (Ostrich Algorithm) là chiến lược 'vùi đầu vào cát': giả vờ như sự cố (thường là deadlock rất hiếm gặp) không bao giờ xảy ra vì chi phí xử lý triệt để quá đắt so với tần suất xảy ra lỗi. (Chapter 6, Deadlock Modeling)."
    }
];
