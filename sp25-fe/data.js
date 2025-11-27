// Questions data for Spring 2025 Final Exam
const questions = [
// ========== CÂU HỎI 1 ==========
{
    id: 1,
    question: "In an operating system, what is the main priority of a time-sharing system compared to a multiprogramming system?",
    options: [
        "Lower cost of managing small processes",
        "Improve CPU performance",
        "Provide faster response time",
        "Shorten the burst time of processes"
    ],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng vì ưu tiên chính của hệ thống chia sẻ thời gian so với hệ thống đa chương là cung cấp thời gian phản hồi nhanh hơn."
},
{
    id: 2,
    question: "Which early operating system was developed for the UNIVAC I computer and is considered one of the first operating systems?",
    options: ["MS-DOS","UNIX","COBOL","EDVAC"],
    correct: 3,
    type: "single",
    explanation: "Đáp án D đúng vì EDVAC được phát triển cho máy tính UNIVAC I và được coi là một trong những hệ điều hành đầu tiên."
},
{
    id: 3,
    question: "What is the structure of a disk drive?",
    options: ["Only one metal platter","Two metal platters","One or more metal platters","Many metal platters"],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng vì ổ đĩa có cấu trúc gồm một hoặc nhiều đĩa kim loại."
},
{
    id: 4,
    question: "In Linux, the command ps -aux shows information similar to which function in Windows?",
    options: ["Start/shutdown","Start menu > Run > type CMD","Open Task Manager","Open Add/Remove Programs"],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng vì lệnh ps -aux trong Linux hiển thị thông tin tương tự như Task Manager trong Windows."
},
{
    id: 5,
    question: "Which of the following is not a part of an operating system?",
    options: ["Performance monitor","Input/output control program","Job control program","Supervisor"],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì Performance monitor không phải là thành phần của hệ điều hành."
},
{
    id: 6,
    question: "Which of the following is not a main feature of a monolithic operating system?",
    options: ["Information hiding: Each procedure is hidden from others","The entire operating system runs as a single program in kernel mode","The system is organized in layers","The system is a large program made of linked procedures"],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì ẩn thông tin không phải là đặc điểm chính của hệ điều hành monolithic."
},
{
    id: 7,
    question: "What is the main role of the kernel in an operating system?",
    options: ["To provide a user interface","To manage hardware and offer services to software","To store user files and data","To control display and graphics"],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì vai trò chính của kernel là quản lý phần cứng và cung cấp dịch vụ cho phần mềm."
},
{
    id: 8,
    question: "A computer has 4GB RAM, with 2GB used by the operating system. Each process uses 1GB and is idle 50% of the time (waiting for I/O). What is the CPU utilization percentage?",
    options: ["75%","90%","1%","50%"],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng. CPU utilization = 1 - (0.5)^2 = 75%."
},
{
    id: 9,
    question: "Which of the following process state transitions is illegal?",
    options: ["Ready → Blocked","Running → Blocked","Blocked → Ready","Running → Ready"],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì Ready không thể chuyển trực tiếp sang Blocked."
},
{
    id: 10,
    question: "What is the main function of a Process Control Block (PCB) in process management?",
    options: ["To display running processes","To store user programs and data","To maintain process information like state, program counter, and CPU registers","To allocate memory to new processes"],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng vì PCB duy trì thông tin tiến trình."
},
{
    id: 11,
    question: "Which statement best describes the relationship between threads within a single process?",
    options: ["Threads are completely independent and share no resources.","Threads share the same memory space but have their own registers.","Threads are isolated from one another.","Threads are tightly integrated and have their own separate memory spaces."],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì thread chia sẻ bộ nhớ nhưng có thanh ghi riêng."
},
{
    id: 12,
    question: "Which of the following cannot be shared among threads within the same process?",
    options: ["Process code","Open files","Process data","Thread stack"],
    correct: 3,
    type: "single",
    explanation: "Đáp án D đúng vì thread stack không thể chia sẻ."
},
{
    id: 13,
    question: "What is the preemptive version of the Shortest Job First (SJF) scheduling algorithm called?",
    options: ["Shortest Process Next","First-Come, First-Served","Shortest Remaining Time Next","Shortest Used Time"],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng vì đó là SRTN."
},
{
    id: 14,
    question: "In the Dining Philosophers problem, what do the philosophers represent?",
    options: ["Real-world philosophers eating at a restaurant","Concurrent processes competing for shared resources","Philosophical concepts unrelated to computing","A type of computer virus"],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì là các tiến trình đồng thời cạnh tranh tài nguyên dùng chung."
},
{
    id: 15,
    question: "Which memory management technique divides memory into fixed-size partitions?",
    options: ["Paging","Contiguous Allocation","Segmentation","Virtual Memory Management"],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì Paging chia bộ nhớ thành các trang cố định."
},
{
    id: 16,
    question: "Which memory management technique uses a binary representation where each bit represents an allocation unit?",
    options: ["Bitmap","Linked List","Paging","Partition"],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì Bitmap dùng bit cho đơn vị cấp phát."
},
{
    id: 17,
    question: "In virtual memory, the virtual address space is divided into pages. What are the corresponding units called in physical memory?",
    options: ["Page Faults","Page Frames","Page Tables","Paging"],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng vì Page Frames là đơn vị vật lý."
},
{
    id: 18,
    question: "A computer uses a 32-bit virtual address with a two-level page table. The address is divided into a 10-bit top-level (PT1), a 10-bit second-level (PT2), and an offset. Given the virtual address 0x00403008, what are the values for PT1, PT2, and offset?",
    options: ["PT1 = 1; PT2 = 3; offset = 8","PT1 = 1; PT2 = 1; offset = 8","PT1 = 4; PT2 = 3; offset = 8","PT1 = 4; PT2 = 1; offset = 8"],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng. PT1=1, PT2=3, offset=8."
},
{
    id: 19,
    question: "In which page replacement algorithm can the page fault rate increase even if more frames are allocated (Belady's anomaly)?",
    options: ["FIFO","LRU","NRU","OPT"],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng vì FIFO có thể có Belady's anomaly."
},
{
    id: 20,
    question: "If LRU page replacement is used with three page frames, how many page faults occur for the reference string: 7, 0, 1, 2, 0, 3 (assuming initially empty frames)?",
    options: ["5","4","6","3"],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng, kết quả 5 lỗi trang."
},
{
    id: 21,
    question: "When a new process is created in a paging system, which of the following is needed to determine the program size and create the page table?",
    options: ["Process creation time","Process execution time","Page fault time","Process termination time"],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng."
},
{
    id: 22,
    question: "Which of the following best describes the difference between a process and a thread in the Windows operating system?",
    options: ["A process contains multiple threads and shares resources, while a thread is an independent execution unit within a process.","A process is a program in execution, while a thread is a sequence of instructions that can execute independently.","A process and a thread are essentially the same in Windows OS, with no significant difference between them.","A process represents system resources, while a thread is responsible for user interface interactions."],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng."
},
{
    id: 23,
    question: "What is segmentation with paging, and how does it enhance memory management?",
    options: ["A technique for managing multiple memory segments simultaneously.","A method that combines the flexibility of segmentation with the efficiency of paging.","A scheme that uses fixed-size pages to allocate memory.","A scheduling algorithm for thread management."],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng."
},
{
    id: 24,
    question: "When a process creates a file, what is assigned to the file?",
    options: ["A name","A thread","A process","A space"],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng."
},
{
    id: 25,
    question: "What is the state of the file when the creating process finishes, and the file becomes accessible to other processes?",
    options: ["Exit","Terminate","Exist","Suspend"],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng."
},
{
    id: 26,
    question: "In file access systems, random access files are essential for many applications, such as database systems. What two methods are used to specify where to start reading?",
    options: ["Write and Read","Write and Seek","Read and Seek","Read and Write"],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng."
},
{
    id: 27,
    question: "The simplest form of a directory system has one directory containing all the files. It is called:",
    options: ["Root directory","User directory","Parent directory","Current directory"],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng."
},
{
    id: 28,
    question: "Sector 0 of the disk is called:",
    options: ["DMA","MBR","FAT","NTFS"],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng."
},
{
    id: 29,
    question: "Disks can be divided into one or more partitions. What is the first block of every partition called?",
    options: ["Boot block","Free block","Superblock","MBR"],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng."
},
{
    id: 30,
    question: "In file systems, what is sector 0 of the disk called?",
    options: ["Boot block","Superblock","MBR (Master Boot Record)","Free space management"],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng."
},
{
    id: 31,
    question: "Which file access method is often used to optimize access to large files in a file system?",
    options: ["Sequential access","Direct access","Indexed access","Linked access"],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng."
},
{
    id: 32,
    question: "In Windows 95, what is the maximum partition size if the FAT type is FAT-16 and the block size is 4 KB?",
    options: ["128MB","256MB","512MB","1024MB"],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng."
},
{
    id: 33,
    question: "In memory-mapped I/O, to prevent software from entering an infinite loop while waiting for a device, which hardware feature can be used?",
    options: ["Selectively able caching","Selectively disable buffer","Selectively able buffer","Selectively disable caching"],
    correct: 3,
    type: "single",
    explanation: "Đáp án D đúng."
},
{
    id: 34,
    question: "What are the two main types of I/O devices?",
    options: ["Block devices and sequence devices","Block devices and character devices","Character devices and I/O devices","Character devices and digital devices"],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng."
},
{
    id: 35,
    question: "In a DMA transfer cycle, what is the operation called when the DMA controller acquires the bus, performs multiple transfers, and then releases the bus?",
    options: ["Fly-by mode","Word-at-a-time mode","Burst mode","Caching mode"],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng."
},
{
    id: 36,
    question: "Blu-ray discs are an example of which type of I/O device?",
    options: ["Block device","Disk device","Input device","Character device"],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng."
},
{
    id: 37,
    question: "Which I/O mode is most suitable for transferring data between memory and I/O devices without involving the CPU?",
    options: ["Direct Memory Access","Programmed I/O","Interrupt-driven I/O","Polling"],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng."
},
{
    id: 38,
    question: "Which of the following is NOT a responsibility of the Device-Independent I/O Software layer?",
    options: ["Uniform interfacing for device drivers","Allocating and releasing dedicated devices","Providing a device-independent block size","Allocating port numbers to I/O devices","Error handling","Buffering"],
    correct: 3,
    type: "single",
    explanation: "Đáp án D đúng."
},
{
    id: 39,
    question: "What is the term for the time taken to move the disk arm to the proper cylinder?",
    options: ["Seek time","Position time","Rotational delay","Transfer time"],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng."
},
{
    id: 40,
    question: "What is the main function of a watchdog timer in an operating system?",
    options: ["Measure the performance of user programs and evaluate them","Detect system crashes and reset the system if necessary","Schedule tasks to execute at predetermined real-time intervals","Manage memory allocation"],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng."
},
{
    id: 41,
    question: "The first general-purpose electronic computer, the ENIAC, had 18,000 vacuum tubes and consumed watts of power.",
    options: ["1,400,000","140,000","14,000","1,400"],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng."
},
{
    id: 42,
    question: "If a process has begun to burn a Blu-ray, suddenly taking the Blu-ray recorder away from it and giving it to another process will result in a garbled Blu-ray. What does the scenario above indicate?",
    options: ["It's an Un-preemptable resource","It's a Preemptable resource","It's a Non-sharable resource","It's a Non-preemptable resource"],
    correct: 3,
    type: "single",
    explanation: "Đáp án D đúng."
},
{
    id: 43,
    question: "What is a nonpreemptable resource?",
    options: ["The one that can be taken away from its current owner with potentially causing failure.","The one that cannot be taken away from its current owner with potentially causing failure.","The one that can be taken away from its current owner without potentially causing failure.","The one that cannot be taken away from its current owner without potentially causing failure."],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng."
},
{
    id: 44,
    question: "What does 'no preemption' imply in the context of deadlocks?",
    options: ["Resources can be preempted from one process to another.","Resources cannot be preempted once allocated.","Processes can be terminated to free up resources.","Resources are allocated in a circular manner."],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng."
},
{
    id: 45,
    question: "In deadlock, what is no-preemption condition?",
    options: ["Processes currently holding resources that were granted earlier can request new resources.","Resources previously granted cannot be forcibly taken away from a process. They must be explicitly released by the process holding them.","There must be a circular list of two or more processes, each of which is waiting for a resource held by the next member of the chain.","Each resource is either currently assigned to exactly one process or is available."],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng."
},
{
    id: 46,
    question: "What is the Ostrich algorithm?",
    options: ["A deadlock recovery algorithm","A deadlock dealing algorithm","A deadlock detection algorithm","A deadlock avoidance algorithm"],
    correct: 1,
    type: "single",
    explanation: "Đáp án B đúng."
},
{
    id: 47,
    question: "Which tool is used for both Deadlock Detection & Recovery and Deadlock Avoidance?",
    options: ["Resource Request Matrix","Resource Allocation Matrix","Resource Graph","Pie chart"],
    correct: 2,
    type: "single",
    explanation: "Đáp án C đúng."
},
{
    id: 48,
    question: "Who is responsible for the Banker's algorithm?",
    options: ["Dijkstra","Zobel","Newton","Ostrich"],
    correct: 0,
    type: "single",
    explanation: "Đáp án A đúng."
},
{
    id: 49,
    question: "Which condition, if not present in the system, can help prevent deadlocks?",
    options: ["Mutual exclusion","Hold and wait","No preemption","Circular wait"],
    correct: 3,
    type: "single",
    explanation: "Đáp án D đúng."
},
{
    id: 50,
    question: "Which resource allocation method can help prevent deadlocks by requiring processes to request and hold all necessary resources at once?",
    options: ["Contiguous allocation","Clustered allocation","Linked allocation","Resource allocation"],
    correct: 3,
    type: "single",
    explanation: "Đáp án D đúng."
}
];