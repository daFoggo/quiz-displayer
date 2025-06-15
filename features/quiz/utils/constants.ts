import { Question } from "./types";

export const DE_1: Question[] = [
  {
    id: 1,
    question:
      "An toàn thông tin được định nghĩa là việc bảo vệ thông tin chống lại hành động nào sau đây?",
    options: [
      "Truy nhập trái phép",
      "Sử dụng trái phép",
      "Tiết lộ, sửa đổi, hoặc phá hủy trái phép",
      "Tất cả các phương án trên",
    ],
    correctAnswer: "D",
    chapter: "Chương 1: Tổng quan về An toàn Bảo mật Hệ thống Thông tin",
  },
  {
    id: 2,
    question:
      "Thuộc tính nào sau đây không phải là một trong ba thuộc tính cốt lõi của An toàn thông tin (CIA Triad)?",
    options: [
      "Tính bí mật (Confidentiality)",
      "Tính toàn vẹn (Integrity)",
      "Tính sẵn dùng (Availability)",
      "Tính tuân thủ (Compliance)",
    ],
    correctAnswer: "D",
    chapter: "Chương 1: Tổng quan về An toàn Bảo mật Hệ thống Thông tin",
  },
  {
    id: 3,
    question:
      "Theo các nguồn tài liệu, lý do chính khiến việc đảm bảo an toàn thông tin trở nên cấp thiết là gì?",
    options: [
      "Số lượng người dùng mạng Internet giảm.",
      "Sự gia tăng của các phần mềm độc hại và kỹ thuật tấn công tinh vi.",
      "Hệ thống thông tin không còn đóng vai trò quan trọng trong các tổ chức.",
      "Chi phí đầu tư cho an toàn thông tin quá thấp.",
    ],
    correctAnswer: "B",
    chapter: "Chương 1: Tổng quan về An toàn Bảo mật Hệ thống Thông tin",
  },
  {
    id: 4,
    question:
      "Trong mô hình bảy vùng của hạ tầng CNTT, vùng nào được cho là có nhiều mối đe dọa và nguy cơ nhất do bản chất khó đoán định và khó kiểm soát hành vi của người dùng?",
    options: [
      "Vùng máy trạm",
      "Vùng mạng WAN",
      "Vùng người dùng",
      "Vùng hệ thống/ứng dụng",
    ],
    correctAnswer: "C",
    chapter: "Chương 1: Tổng quan về An toàn Bảo mật Hệ thống Thông tin",
  },
  {
    id: 5,
    question:
      "Mô hình tổng quát để đảm bảo an toàn hệ thống thông tin, khuyến nghị tạo ra nhiều lớp bảo vệ để bổ sung cho nhau, được gọi là gì?",
    options: [
      "Mô hình CIA",
      "Phòng vệ theo chiều sâu (Defence in Depth)",
      "Mô hình ba lớp chính",
      "Mô hình bảy lớp bảo vệ",
    ],
    correctAnswer: "B",
    chapter: "Chương 1: Tổng quan về An toàn Bảo mật Hệ thống Thông tin",
  },
  {
    id: 6,
    question:
      "An toàn máy tính và dữ liệu thuộc thành phần chính nào của an toàn thông tin?",
    options: [
      "An ninh mạng",
      "Quản lý an toàn thông tin",
      "Chính sách an toàn thông tin",
      "An toàn máy tính và dữ liệu",
    ],
    correctAnswer: "D",
    chapter: "Chương 1: Tổng quan về An toàn Bảo mật Hệ thống Thông tin",
  },
  {
    id: 7,
    question:
      "Một hệ thống thông tin dựa trên máy tính thường gồm các thành phần chính nào?",
    options: [
      "Phần mềm, cơ sở dữ liệu, mạng, và thủ tục",
      "Phần cứng, phần mềm, cơ sở dữ liệu, mạng, và thủ tục",
      "Phần cứng, phần mềm, và dữ liệu",
      "Chỉ có mạng và cơ sở dữ liệu",
    ],
    correctAnswer: "B",
    chapter: "Chương 1: Tổng quan về An toàn Bảo mật Hệ thống Thông tin",
  },
  {
    id: 8,
    question:
      "Tính bí mật của thông tin có thể được đảm bảo bằng các biện pháp nào?",
    options: [
      "Bảo vệ vật lý",
      "Sử dụng mật mã",
      "Sử dụng đường hầm VPN",
      "Tất cả các phương án trên",
    ],
    correctAnswer: "D",
    chapter: "Chương 1: Tổng quan về An toàn Bảo mật Hệ thống Thông tin",
  },
  {
    id: 9,
    question: "Vùng mạng WAN, hay mạng Internet, có nguy cơ lớn nhất là gì?",
    options: [
      "Tấn công vét cạn mật khẩu",
      "Dễ bị nghe trộm và dễ bị tấn công từ chối dịch vụ (DoS/DDoS)",
      "Truy nhập trái phép vật lý",
      "Lỗ hổng trong các bộ định tuyến",
    ],
    correctAnswer: "B",
    chapter: "Chương 1: Tổng quan về An toàn Bảo mật Hệ thống Thông tin",
  },
  {
    id: 10,
    question:
      "Trong mô hình đảm bảo an toàn thông tin, việc cân bằng giữa các yếu tố nào là cần thiết để hệ thống thực sự phù hợp và hiệu quả?",
    options: [
      "An toàn, Chi phí, và Độ phức tạp",
      "An toàn, Chi phí, và Tính hữu dụng",
      "An toàn, Tính hữu dụng, và Tốc độ",
      "An toàn, Tốc độ, và Độ tin cậy",
    ],
    correctAnswer: "B",
    chapter: "Chương 1: Tổng quan về An toàn Bảo mật Hệ thống Thông tin",
  },
  {
    id: 11,
    question: "Trong an toàn thông tin, lỗ hổng bảo mật là gì?",
    options: [
      "Bất kỳ một hành động nào có thể gây hư hại đến các tài nguyên hệ thống",
      "Một lỗi trong hệ điều hành",
      "Một điểm yếu tồn tại trong một hệ thống cho phép tin tặc khai thác gây tổn hại đến các thuộc tính an ninh của hệ thống đó",
      "Các thiết bị hỗ trợ tấn công",
    ],
    correctAnswer: "C",
    chapter: "Chương 2: Các Dạng Tấn công và Phần mềm Độc hại",
  },
  {
    id: 12,
    question:
      "Theo số liệu thống kê từ Cơ sở dữ liệu lỗ hổng quốc gia Hoa Kỳ năm 2014, các lỗ hổng bảo mật chủ yếu xuất hiện trong thành phần nào của hệ thống?",
    options: ["Phần cứng", "Hệ điều hành", "Phần mềm ứng dụng", "Hạ tầng mạng"],
    correctAnswer: "C",
    chapter: "Chương 2: Các Dạng Tấn công và Phần mềm Độc hại",
  },
  {
    id: 13,
    question:
      "Tấn công chỉ có thể trở thành hiện thực nếu có sự tồn tại đồng thời của những yếu tố nào?",
    options: [
      "Điểm yếu và Lỗ hổng",
      "Mối đe dọa và Lỗ hổng",
      "Mối đe dọa và Điểm yếu",
      "Tấn công chủ động và Tấn công thụ động",
    ],
    correctAnswer: "B",
    chapter: "Chương 2: Các Dạng Tấn công và Phần mềm Độc hại",
  },
  {
    id: 14,
    question:
      "Loại tấn công nào thường không gây ra thay đổi trên hệ thống và điển hình là nghe trộm và giám sát lưu lượng trên đường truyền?",
    options: [
      "Tấn công chủ động",
      "Tấn công thụ động",
      "Tấn công giả mạo",
      "Tấn công gây ngắt quãng",
    ],
    correctAnswer: "B",
    chapter: "Chương 2: Các Dạng Tấn công và Phần mềm Độc hại",
  },
  {
    id: 15,
    question:
      "Công cụ hỗ trợ tấn công nào cho phép bắt các gói tin khi chúng được truyền trên mạng và thu thập thông tin nhạy cảm nếu không được mã hóa?",
    options: [
      "Công cụ rà quét lỗ hổng",
      "Công cụ quét cổng dịch vụ",
      "Công cụ nghe lén (Sniffer)",
      "Công cụ ghi phím gõ (Keylogger)",
    ],
    correctAnswer: "C",
    chapter: "Chương 2: Các Dạng Tấn công và Phần mềm Độc hại",
  },
  {
    id: 16,
    question: "Lỗi tràn bộ đệm (Buffer Overflow) xảy ra khi nào?",
    options: [
      "Một ứng dụng cố gắng đọc dữ liệu vượt khỏi phạm vi của bộ nhớ đệm.",
      "Một ứng dụng cố gắng ghi dữ liệu vượt khỏi phạm vi của bộ nhớ đệm.",
      "Hệ thống không đủ bộ nhớ RAM.",
      "Ổ cứng bị đầy.",
    ],
    correctAnswer: "B",
    chapter: "Chương 2: Các Dạng Tấn công và Phần mềm Độc hại",
  },
  {
    id: 17,
    question:
      "Sâu SQL Slammer khai thác lỗi tràn bộ đệm trong thành phần nào của hệ quản trị cơ sở dữ liệu Microsoft SQL Server 2000?",
    options: [
      "SQL Server Database Engine",
      "SQL Server Management Studio",
      "Microsoft SQL Server Resolution Service",
      "SQL Server Reporting Services",
    ],
    correctAnswer: "C",
    chapter: "Chương 2: Các Dạng Tấn công và Phần mềm Độc hại",
  },
  {
    id: 18,
    question:
      "Biện pháp chủ yếu để phòng chống tấn công khai thác lỗi không kiểm tra đầu vào (Unvalidated input) là gì?",
    options: [
      "Tăng cường phần cứng",
      "Lọc dữ liệu đầu vào",
      "Giới hạn số lượng người dùng",
      "Thay đổi cổng dịch vụ",
    ],
    correctAnswer: "B",
    chapter: "Chương 2: Các Dạng Tấn công và Phần mềm Độc hại",
  },
  {
    id: 19,
    question:
      "Tấn công chèn mã SQL (SQL Injection) có khả năng cho phép kẻ tấn công thực hiện hành động nào trên hệ thống nạn nhân?",
    options: [
      "Vượt qua các khâu xác thực người dùng",
      "Chèn, sửa đổi, hoặc xóa dữ liệu",
      "Đánh cắp các thông tin trong cơ sở dữ liệu",
      "Tất cả các phương án trên",
    ],
    correctAnswer: "D",
    chapter: "Chương 2: Các Dạng Tấn công và Phần mềm Độc hại",
  },
  {
    id: 20,
    question:
      "Tấn công từ chối dịch vụ (DoS) SYN Flood khai thác điểm yếu trong thủ tục nào?",
    options: [
      "Giao thức HTTP",
      "Thủ tục bắt tay 3 bước của TCP",
      "Giao thức UDP",
      "Giao thức ICMP",
    ],
    correctAnswer: "B",
    chapter: "Chương 2: Các Dạng Tấn công và Phần mềm Độc hại",
  },
  {
    id: 21,
    question:
      "Điểm khác biệt chính giữa tấn công DDoS (Distributed Denial of Service) và DoS (Denial of Service) là gì?",
    options: [
      "Mục đích tấn công",
      "Công cụ sử dụng",
      "Phạm vi (scope) tấn công, số lượng máy tham gia và vị trí địa lý",
      "Mức độ gây hại",
    ],
    correctAnswer: "C",
    chapter: "Chương 2: Các Dạng Tấn công và Phần mềm Độc hại",
  },
  {
    id: 22,
    question:
      "Biện pháp phòng chống tấn công giả mạo địa chỉ IP hiệu quả nhất là gì?",
    options: [
      "Sử dụng phần mềm diệt virus",
      "Cấu hình máy chủ DNS",
      "Sử dụng kỹ thuật lọc trên tường lửa hoặc router",
      "Tăng băng thông mạng",
    ],
    correctAnswer: "C",
    chapter: "Chương 2: Các Dạng Tấn công và Phần mềm Độc hại",
  },
  {
    id: 23,
    question:
      "Tấn công kiểu người đứng giữa (Man in the middle) thường có mục đích chính là gì?",
    options: [
      "Phá hoại hệ thống",
      "Đánh cắp thông tin",
      "Từ chối dịch vụ",
      "Chỉnh sửa cấu hình mạng",
    ],
    correctAnswer: "B",
    chapter: "Chương 2: Các Dạng Tấn công và Phần mềm Độc hại",
  },
  {
    id: 24,
    question:
      "Trò lừa đảo Nigeria 4-1-9 là một dạng tấn công sử dụng kỹ thuật nào?",
    options: [
      "Tấn công mã độc",
      "Tấn công từ chối dịch vụ",
      "Kỹ thuật xã hội (Social engineering)",
      "Tấn công tràn bộ đệm",
    ],
    correctAnswer: "C",
    chapter: "Chương 2: Các Dạng Tấn công và Phần mềm Độc hại",
  },
  {
    id: 25,
    question:
      "Phishing là dạng tấn công đặc biệt mạnh của kỹ thuật xã hội, trong đó kẻ tấn công thường thực hiện điều gì để lấy thông tin cá nhân/tài khoản?",
    options: [
      "Cài đặt mã độc trực tiếp vào máy tính nạn nhân.",
      "Giả mạo các trang web hoặc email của tổ chức tài chính, ngân hàng, yêu cầu xác thực thông tin.",
      "Tấn công vào máy chủ DNS để chuyển hướng truy cập.",
      "Sử dụng bom thư để làm quá tải hộp thư.",
    ],
    correctAnswer: "B",
    chapter: "Chương 2: Các Dạng Tấn công và Phần mềm Độc hại",
  },
  {
    id: 26,
    question:
      'Tấn công Pharming dạng "cướp" trình duyệt (Browser hijacking) thường do nguyên nhân nào?',
    options: [
      "Lỗi cấu hình máy chủ web.",
      "Người dùng gõ sai địa chỉ website.",
      "Kẻ tấn công sử dụng sâu, vi rút hoặc các phần mềm độc hại cài vào hệ thống để điều khiển trình duyệt của người dùng.",
      "Tấn công vào hệ thống DNS.",
    ],
    correctAnswer: "C",
    chapter: "Chương 2: Các Dạng Tấn công và Phần mềm Độc hại",
  },
  {
    id: 27,
    question:
      "Các thuộc tính quan trọng của tấn công APT (Advanced Persistent Threat) là gì?",
    options: [
      "Nhanh chóng và gây thiệt hại lớn.",
      "Ngẫu nhiên và dễ phát hiện.",
      "Tiên tiến (Advanced) và Kiên trì (Persistent).",
      "Phụ thuộc vào yếu tố vật lý.",
    ],
    correctAnswer: "C",
    chapter: "Chương 2: Các Dạng Tấn công và Phần mềm Độc hại",
  },
  {
    id: 28,
    question:
      "Trong số các phần mềm độc hại, những loại nào có khả năng tự lây nhiễm (self-infection) hay tự nhân bản (self-replicate)?",
    options: [
      "Logic bomb và Trojan Horse",
      "Virus, Sâu và Phần mềm máy tính ma (Bot/Zombie)",
      "Backdoor và Adware",
      "Spyware và Rootkit",
    ],
    correctAnswer: "B",
    chapter: "Chương 2: Các Dạng Tấn công và Phần mềm Độc hại",
  },
  {
    id: 29,
    question: "Điều gì làm cho Rootkit rất khó bị phát hiện?",
    options: [
      "Nó hoạt động độc lập với hệ điều hành.",
      "Nó không gây ra bất kỳ thay đổi nào trên hệ thống.",
      "Nó có quyền truy nhập hệ thống ở mức quản trị và thường che giấu mình bằng cách đội lót một phần mềm khác.",
      "Nó chỉ hoạt động trong một khoảng thời gian ngắn.",
    ],
    correctAnswer: "C",
    chapter: "Chương 2: Các Dạng Tấn công và Phần mềm Độc hại",
  },
  {
    id: 30,
    question: "Nguyên tắc chung trong phòng chống phần mềm độc hại vẫn là gì?",
    options: [
      "Chỉ sử dụng phần mềm có bản quyền.",
      "Cập nhật hệ điều hành thường xuyên.",
      "Phòng vệ theo chiều sâu, trong đó nhiều nhóm biện pháp đảm bảo an toàn cần được áp dụng.",
      "Chỉ cài đặt một bộ công cụ rà quét phần mềm độc hại.",
    ],
    correctAnswer: "C",
    chapter: "Chương 2: Các Dạng Tấn công và Phần mềm Độc hại",
  },
  {
    id: 31,
    question: "Trong một hệ mã hóa, Bản rõ (Plaintext) là gì?",
    options: [
      "Thông tin đã được mã hóa",
      "Thông tin ở dạng có thể hiểu được",
      "Khóa được sử dụng trong giải thuật mã hóa",
      "Tổng số khóa có thể có",
    ],
    correctAnswer: "B",
    chapter: "Chương 3: Đảm bảo An toàn Thông tin dựa trên Mã hóa",
  },
  {
    id: 32,
    question:
      "Mã hóa khóa đối xứng (Symmetric key cryptography) có đặc điểm nào sau đây?",
    options: [
      "Sử dụng một cặp khóa: khóa công khai và khóa riêng.",
      "Khóa công khai dùng để mã hóa, khóa riêng dùng để giải mã.",
      "Một khóa bí mật duy nhất được sử dụng cho cả quá trình mã hóa và giải mã.",
      "Chỉ khóa riêng cần phải giữ bí mật.",
    ],
    correctAnswer: "C",
    chapter: "Chương 3: Đảm bảo An toàn Thông tin dựa trên Mã hóa",
  },
  {
    id: 33,
    question: "Hàm băm (Hash function) có tối thiểu hai thuộc tính cơ bản nào?",
    options: [
      "Nén và Tốc độ",
      "Nén và Dễ tính toán",
      "Bảo mật và Dễ tính toán",
      "Nén và Khó giải mã",
    ],
    correctAnswer: "B",
    chapter: "Chương 3: Đảm bảo An toàn Thông tin dựa trên Mã hóa",
  },
  {
    id: 34,
    question:
      "Sự phát triển vượt bậc của mật mã trong thế kỷ 20 là nhờ sự phát triển của yếu tố nào?",
    options: [
      "Các kỹ thuật mã hóa thô sơ",
      "Sóng vô tuyến",
      "Máy tính điện tử và ngành công nghệ thông tin",
      "Các công cụ phá mã",
    ],
    correctAnswer: "C",
    chapter: "Chương 3: Đảm bảo An toàn Thông tin dựa trên Mã hóa",
  },
  {
    id: 35,
    question:
      "Phương pháp mã hóa cổ điển nào thực hiện sắp xếp lại các giá trị trong một khối bản rõ để tạo bản mã?",
    options: [
      "Phương pháp thay thế",
      "Phương pháp hoán vị",
      "Phương pháp XOR",
      "Phương pháp Vernam",
    ],
    correctAnswer: "B",
    chapter: "Chương 3: Đảm bảo An toàn Thông tin dựa trên Mã hóa",
  },
  {
    id: 36,
    question:
      "Giải thuật mã hóa DES (Data Encryption Standard) hiện nay được coi là không an toàn do lý do nào?",
    options: [
      "Tốc độ thực thi chậm",
      "Sử dụng chung một giải thuật cho cả mã hóa và giải mã",
      "Không gian khóa nhỏ, dễ bị vét cạn",
      "Chỉ hỗ trợ khối dữ liệu 64 bit",
    ],
    correctAnswer: "C",
    chapter: "Chương 3: Đảm bảo An toàn Thông tin dựa trên Mã hóa",
  },
  {
    id: 37,
    question:
      "Giải thuật mã hóa AES (Advanced Encryption Standard) được thiết kế dựa trên mạng nào?",
    options: [
      "Mạng Feistel",
      "Mạng thay thế-hoán vị (Substitution-permutation network)",
      "Mạng hỗn hợp",
      "Mạng khóa bí mật",
    ],
    correctAnswer: "B",
    chapter: "Chương 3: Đảm bảo An toàn Thông tin dựa trên Mã hóa",
  },
  {
    id: 38,
    question:
      "Độ an toàn của giải thuật mã hóa RSA dựa trên tính khó của việc gì?",
    options: [
      "Tính toán hàm băm",
      "Phân tích số nguyên rất lớn",
      "Tạo ra số nguyên tố",
      "Phân phối khóa",
    ],
    correctAnswer: "B",
    chapter: "Chương 3: Đảm bảo An toàn Thông tin dựa trên Mã hóa",
  },
  {
    id: 39,
    question:
      "Hàm băm MD5 tạo chuỗi giá trị băm đầu ra có kích thước bao nhiêu bit?",
    options: ["64 bit", "128 bit", "160 bit", "256 bit"],
    correctAnswer: "B",
    chapter: "Chương 3: Đảm bảo An toàn Thông tin dựa trên Mã hóa",
  },
  {
    id: 40,
    question:
      "Chữ ký số thường được sử dụng để đảm bảo thuộc tính nào của thông điệp?",
    options: [
      "Tính bí mật",
      "Tính sẵn dùng",
      "Tính toàn vẹn",
      "Tính không chối bỏ và tính bí mật",
    ],
    correctAnswer: "C",
    chapter: "Chương 3: Đảm bảo An toàn Thông tin dựa trên Mã hóa",
  },
  {
    id: 41,
    question:
      "Trong quá trình kiểm tra chữ ký số, người nhận sử dụng khóa nào của người gửi để giải mã chữ ký số?",
    options: ["Khóa riêng", "Khóa phiên", "Khóa công khai", "Khóa bí mật"],
    correctAnswer: "C",
    chapter: "Chương 3: Đảm bảo An toàn Thông tin dựa trên Mã hóa",
  },
  {
    id: 42,
    question:
      "Chứng chỉ số (Digital certificate) là một tài liệu điện tử sử dụng gì để liên kết một khóa công khai và thông tin nhận dạng của một thực thể?",
    options: ["Một mật khẩu", "Một địa chỉ IP", "Một chữ ký số", "Một hàm băm"],
    correctAnswer: "C",
    chapter: "Chương 3: Đảm bảo An toàn Thông tin dựa trên Mã hóa",
  },
  {
    id: 43,
    question:
      "Trung tâm phân phối khóa (KDC) giúp giải quyết bài toán nào trong hệ thống có nhiều người dùng sử dụng mã hóa khóa đối xứng?",
    options: [
      "Bài toán quản lý chứng chỉ số.",
      "Bài toán n² khóa (phân phối n² khóa).",
      "Bài toán tấn công DDoS.",
      "Bài toán xác thực người dùng.",
    ],
    correctAnswer: "B",
    chapter: "Chương 3: Đảm bảo An toàn Thông tin dựa trên Mã hóa",
  },
  {
    id: 44,
    question:
      "Giao thức SSL/TLS nằm ở vị trí nào trong chồng giao thức TCP/IP?",
    options: [
      "Tầng ứng dụng",
      "Tầng vận chuyển",
      "Giữa tầng ứng dụng và tầng vận chuyển",
      "Tầng mạng",
    ],
    correctAnswer: "C",
    chapter: "Chương 3: Đảm bảo An toàn Thông tin dựa trên Mã hóa",
  },
  {
    id: 45,
    question:
      "Một hệ thống kiểm soát truy cập (Access control) có thể được cấu thành từ ba dịch vụ chính nào?",
    options: [
      "Xác thực, Mã hóa, và Giải mã",
      "Xác thực, Trao quyền, và Quản trị",
      "Xác thực, Lọc gói tin, và Phát hiện xâm nhập",
      "Xác thực, Quản lý rủi ro, và Chính sách",
    ],
    correctAnswer: "B",
    chapter: "Chương 4: Các Kỹ thuật và Công nghệ Đảm bảo An toàn Thông tin",
  },
  {
    id: 46,
    question: "Đặc điểm nổi bật của kiểm soát truy cập tùy chọn (DAC) là gì?",
    options: [
      "Quyền truy cập do người quản trị hệ thống định ra trước.",
      "Không cho phép người tạo ra các đối tượng có toàn quyền truy cập.",
      "Cho phép người dùng có thể cấp hoặc hủy quyền truy cập cho các người dùng khác đến các đối tượng thuộc quyền điều khiển của họ.",
      "Dựa trên vai trò của người dùng trong tổ chức.",
    ],
    correctAnswer: "C",
    chapter: "Chương 4: Các Kỹ thuật và Công nghệ Đảm bảo An toàn Thông tin",
  },
  {
    id: 47,
    question:
      "Mô hình kiểm soát truy cập Bell-LaPadula sử dụng những nguyên tắc nào để đảm bảo an toàn?",
    options: [
      '"Đọc lên" và "ghi xuống"',
      '"Đọc xuống" và "ghi lên"',
      '"Chỉ đọc" và "chỉ ghi"',
      '"Đọc và thực thi"',
    ],
    correctAnswer: "B",
    chapter: "Chương 4: Các Kỹ thuật và Công nghệ Đảm bảo An toàn Thông tin",
  },
  {
    id: 48,
    question:
      "Kiểm soát truy cập dựa trên vai trò (RBAC) cho phép người dùng truy cập vào hệ thống và thông tin dựa trên yếu tố nào?",
    options: [
      "Tính nhạy cảm của thông tin",
      "Địa chỉ IP nguồn",
      "Vai trò (role) của họ trong cơ quan, tổ chức đó",
      "Thời gian đăng nhập",
    ],
    correctAnswer: "C",
    chapter: "Chương 4: Các Kỹ thuật và Công nghệ Đảm bảo An toàn Thông tin",
  },
  {
    id: 49,
    question:
      "Công nghệ kiểm soát truy cập nào được cho là có khả năng cung cấp độ an toàn cao nhất và cho phép xác thực chủ thể do các đặc điểm riêng có của người dùng?",
    options: [
      "Dựa trên mật khẩu",
      "Dựa trên các khóa mã",
      "Dựa trên thẻ thông minh",
      "Dựa trên các đặc điểm sinh trắc (biometric)",
    ],
    correctAnswer: "D",
    chapter: "Chương 4: Các Kỹ thuật và Công nghệ Đảm bảo An toàn Thông tin",
  },
  {
    id: 50,
    question:
      "Để đảm bảo hiệu quả bảo vệ, tường lửa thường được đặt ở vị trí nào trong mạng?",
    options: [
      "Tại máy chủ cơ sở dữ liệu",
      "Tại máy trạm của người dùng",
      "Ở vị trí cổng vào của mạng nội bộ",
      "Trên đám mây",
    ],
    correctAnswer: "C",
    chapter: "Chương 4: Các Kỹ thuật và Công nghệ Đảm bảo An toàn Thông tin",
  },
  {
    id: 51,
    question:
      "Tường lửa có trạng thái (Stateful firewall) khác với tường lửa không trạng thái (Stateless firewall) ở điểm nào?",
    options: [
      "Chỉ cho phép các gói tin đã mã hóa đi qua.",
      "Có khả năng lưu trạng thái của các kết nối mạng đi qua.",
      "Hoạt động ở tầng ứng dụng.",
      "Luôn chặn tất cả các gói tin đến từ bên ngoài.",
    ],
    correctAnswer: "B",
    chapter: "Chương 4: Các Kỹ thuật và Công nghệ Đảm bảo An toàn Thông tin",
  },
  {
    id: 52,
    question: "Một trong những hạn chế của tường lửa là gì?",
    options: [
      "Không thể chống lại các tấn công đi qua tường lửa.",
      "Không thể chống lại các hiểm họa từ bên trong, như từ người dùng trong mạng nội bộ.",
      "Không thể ngăn chặn việc vận chuyển các chương trình hoặc các file không bị nhiễm vi rút.",
      "Luôn yêu cầu tài nguyên hệ thống cao.",
    ],
    correctAnswer: "B",
    chapter: "Chương 4: Các Kỹ thuật và Công nghệ Đảm bảo An toàn Thông tin",
  },
  {
    id: 53,
    question:
      "IDS (Intrusion Detection System) và IPS (Intrusion Prevention System) có nhiệm vụ chính nào?",
    options: [
      "Chỉ ghi logs các hành vi tấn công, xâm nhập.",
      "Chỉ gửi thông báo cho người quản trị.",
      "Giám sát lưu lượng mạng hoặc các hành vi trên một hệ thống để nhận dạng các dấu hiệu của tấn công, xâm nhập.",
      "Chỉ ngăn chặn hoặc dừng các hành vi tấn công.",
    ],
    correctAnswer: "C",
    chapter: "Chương 4: Các Kỹ thuật và Công nghệ Đảm bảo An toàn Thông tin",
  },
  {
    id: 54,
    question: "Điểm khác biệt chính giữa IPS và IDS là gì?",
    options: [
      "IDS có khả năng chủ động ngăn chặn tấn công, xâm nhập, trong khi IPS chủ yếu giám sát và cảnh báo.",
      "IPS có khả năng chủ động ngăn chặn tấn công, xâm nhập và thường được đặt giữa đường truyền thông, trong khi IDS chủ yếu giám sát và cảnh báo.",
      "IDS được đặt sau tường lửa, còn IPS đặt trước tường lửa.",
      "IPS chỉ hoạt động ở tầng mạng, còn IDS hoạt động ở tầng ứng dụng.",
    ],
    correctAnswer: "B",
    chapter: "Chương 4: Các Kỹ thuật và Công nghệ Đảm bảo An toàn Thông tin",
  },
  {
    id: 55,
    question:
      "Ưu điểm lớn nhất của phương pháp phát hiện xâm nhập dựa trên chữ ký (Signature-based intrusion detection) là gì?",
    options: [
      "Có khả năng phát hiện các tấn công, xâm nhập mới.",
      "Tỷ lệ cảnh báo sai thấp.",
      "Có khả năng phát hiện các tấn công, xâm nhập đã biết một cách hiệu quả, tốc độ xử lý cao và yêu cầu tài nguyên thấp.",
      "Không yêu cầu cập nhật cơ sở dữ liệu chữ ký.",
    ],
    correctAnswer: "C",
    chapter: "Chương 4: Các Kỹ thuật và Công nghệ Đảm bảo An toàn Thông tin",
  },
  {
    id: 56,
    question: "Tài sản an toàn thông tin bao gồm những gì?",
    options: [
      "Chỉ có thông tin",
      "Chỉ có phần cứng và phần mềm",
      "Thông tin, thiết bị, hoặc các thành phần khác hỗ trợ các hoạt động có liên quan đến thông tin",
      "Chỉ có con người và dữ liệu",
    ],
    correctAnswer: "C",
    chapter: "Chương 5: Quản lý, Chính sách và Pháp luật An toàn Thông tin",
  },
  {
    id: 57,
    question:
      "Trong quản lý an toàn thông tin, quá trình đánh giá rủi ro là một bộ phận quan trọng của vấn đề nào?",
    options: [
      "Quản lý tài sản",
      "Quản lý rủi ro an toàn thông tin",
      "Quản lý chính sách",
      "Quản lý nhân sự",
    ],
    correctAnswer: "B",
    chapter: "Chương 5: Quản lý, Chính sách và Pháp luật An toàn Thông tin",
  },
  {
    id: 58,
    question:
      "Phương pháp đánh giá rủi ro nào phù hợp với các tổ chức chính phủ cung cấp các dịch vụ thiết yếu cho người dân và doanh nghiệp, hoặc các tổ chức có hệ thống CNTT quy mô lớn?",
    options: [
      "Phương pháp đường cơ sở (Baseline approach)",
      "Phương pháp không chính thức (Informal approach)",
      "Phương pháp phân tích chi tiết rủi ro (Detailed risk analysis)",
      "Phương pháp kết hợp (Combined approach)",
    ],
    correctAnswer: "C",
    chapter: "Chương 5: Quản lý, Chính sách và Pháp luật An toàn Thông tin",
  },
  {
    id: 59,
    question:
      "Chu trình Plan-Do-Check-Act (PDCA) là nền tảng của chuẩn quản lý an toàn thông tin nào?",
    options: [
      "NIST SP 800",
      "ISO/IEC 27001:2005",
      "ISO/IEC 27002",
      "ISO/IEC 27005",
    ],
    correctAnswer: "B",
    chapter: "Chương 5: Quản lý, Chính sách và Pháp luật An toàn Thông tin",
  },
  {
    id: 60,
    question:
      'Theo Viện đạo đức máy tính, một trong "Mười điều răn về đạo đức máy tính" là gì?',
    options: [
      "Nên sử dụng máy tính để thu thập thông tin cá nhân của người khác.",
      "Không được sao chép hoặc sử dụng phần mềm không có bản quyền.",
      "Nên can thiệp vào công việc của người khác trên máy tính nếu có lợi ích.",
      "Không cần suy nghĩ về các hậu quả xã hội của chương trình mình đang xây dựng.",
    ],
    correctAnswer: "B",
    chapter: "Chương 5: Quản lý, Chính sách và Pháp luật An toàn Thông tin",
  },
];