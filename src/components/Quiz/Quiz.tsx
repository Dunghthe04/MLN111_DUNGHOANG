import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { db } from "../../services/firebaseService";
import { ref, push, set, get } from "firebase/database";
import { useAuthStore } from "../../stores/authStore";
import QuestionImage from "./QuestionImage";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
}

interface QuizDataMap {
  [key: string]: Question[];
}

interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  total: number;
  percentage: number;
  chapter: string;
  timestamp: number;
  uid: string;
  timeTaken?: number;
}

const defaultQuizData: Question[] = [
  {
    id: 1,
    question: "Luận điểm cơ bản của phép biện chứng duy vật là gì?",
    options: [
      "Ý thức quyết định mọi vật chất",
      "Thực tại vật chất quyết định ý thức",
      "Chủ thể quyết định khách thể",
      "Không có mối quan hệ giữa ý thức và vật chất",
    ],
    correctAnswer: 1,
    image: "/imgs/triethoc-1.svg",
    imageAlt: "Thế giới quan duy vật biện chứng",
    imageCaption: "Vật chất tồn tại khách quan, quyết định ý thức con người",
  },
  {
    id: 2,
    question:
      "Trong triết học Mác-Lênin, mâu thuẫn biện chứng được hiểu là gì?",
    options: [
      "Sự đấu tranh giữa hai yếu tố đối lập trong cùng một sự vật",
      "Sự tồn tại độc lập của hai thực thể khác biệt",
      "Trạng thái cân bằng vĩnh cửu của sự vật",
      "Một hiện tượng ngẫu nhiên không có quy luật",
    ],
    correctAnswer: 0,
    image: "/imgs/triethoc-2.svg",
    imageAlt: "Mâu thuẫn biện chứng",
    imageCaption: "Hai mặt đối lập thống nhất trong cùng một sự vật",
  },
  {
    id: 3,
    question:
      "Nguyên lý lượng và chất chuyển hóa lẫn nhau cho thấy điều gì?",
    options: [
      "Sự thay đổi định lượng tích lũy cuối cùng dẫn đến biến đổi chất",
      "Chất luôn tồn tại độc lập và không thay đổi",
      "Lượng chỉ là hình thức bên ngoài của chất",
      "Sự thay đổi chất không liên quan đến lượng",
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    question:
      "Theo Mác-Lênin, phương pháp biện chứng khác với phép siêu hình ở điểm nào?",
    options: [
      "Biện chứng xem sự vật là tĩnh, còn siêu hình là động",
      "Biện chứng nhìn sự vật trong mối quan hệ vận động, còn siêu hình coi sự vật cô lập",
      "Biện chứng chỉ quan tâm đến ý thức, còn siêu hình chỉ quan tâm đến vật chất",
      "Không có sự khác biệt rõ ràng",
    ],
    correctAnswer: 1,
    image: "/imgs/hegel-feuerbach.jpg",
    imageAlt: "Hegel và Feuerbach",
    imageCaption: "Marx kế thừa phép biện chứng Hegel, cải tạo thành duy vật biện chứng",
  },
  {
    id: 5,
    question:
      "Trong triết học Mác-Lênin, thực tiễn có vai trò gì đối với chân lý?",
    options: [
      "Là tiêu chuẩn cuối cùng của chân lý",
      "Là hình thức phản ánh phụ thuộc vào ý thức",
      "Là khái niệm triết học trừu tượng",
      "Không có vai trò quyết định",
    ],
    correctAnswer: 0,
    image: "/imgs/industrial-revolution.jpg",
    imageAlt: "Cách mạng Công nghiệp",
    imageCaption: "Thực tiễn xã hội là tiêu chuẩn kiểm nghiệm chân lý",
  },
  {
    id: 6,
    question:
      "Nguyên lý nội dung và hình thức của sự vật theo triết học Mác-Lênin khẳng định điều gì?",
    options: [
      "Hình thức có trước nội dung",
      "Nội dung quyết định hình thức và đồng thời điều kiện cho hình thức",
      "Nội dung và hình thức không liên quan",
      "Hình thức luôn thống trị nội dung",
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    question:
      "Khái niệm nào sau đây không phải là khái niệm cơ bản của phép biện chứng duy vật?",
    options: [
      "Mâu thuẫn",
      "Chuyển hóa dần dần",
      "Phân rã tuyệt đối",
      "Sự phát triển",
    ],
    correctAnswer: 2,
  },
  {
    id: 8,
    question:
      "Theo triết học Mác-Lênin, khả năng nhận thức của con người tăng lên khi nào?",
    options: [
      "Khi con người xa rời thực tiễn",
      "Khi con người gắn lý luận với thực tiễn",
      "Khi con người chỉ dựa vào trực giác",
      "Khi con người chỉ dựa vào truyền thống",
    ],
    correctAnswer: 1,
  },
  {
    id: 9,
    question:
      "Luận điểm nào sau đây thể hiện tính quy luật của sự vận động?",
    options: [
      "Sự vật vận động ngẫu nhiên không quy luật",
      "Sự vận động của sự vật theo quy luật khách quan",
      "Sự vật chỉ thay đổi theo ý muốn của con người",
      "Sự vật luôn đứng yên",
    ],
    correctAnswer: 1,
  },
  {
    id: 10,
    question:
      "Quan điểm nào sau đây là đặc trưng của phép biện chứng duy vật?",
    options: [
      "Tồn tại mâu thuẫn trong mọi sự vật",
      "Mâu thuẫn chỉ xảy ra trong xã hội",
      "Mâu thuẫn là dấu hiệu của suy thoái",
      "Không cần mâu thuẫn để phát triển",
    ],
    correctAnswer: 0,
    image: "/imgs/triethoc-3.svg",
    imageAlt: "Phát triển theo quy luật",
    imageCaption: "Mâu thuẫn là nguồn gốc và động lực phát triển",
  },
  {
    id: 11,
    question:
      "Trong triết học Mác-Lênin, 'phát triển' được hiểu là gì?",
    options: [
      "Sự tuần hoàn không đổi của sự vật",
      "Sự biến đổi theo chiều hướng mới cao hơn",
      "Sự ổn định tuyệt đối của sự vật",
      "Sự phân chia không ngừng",
    ],
    correctAnswer: 1,
    image: "/imgs/halls/hall-1-2.svg",
    imageAlt: "Sự phát triển",
    imageCaption: "Phát triển là biến đổi theo chiều hướng cao hơn",
  },
  {
    id: 12,
    question:
      "Luận điểm nào thể hiện tính khách quan của quy luật?",
    options: [
      "Quy luật tồn tại nhờ ý chí chủ quan",
      "Quy luật tồn tại độc lập với nhận thức con người",
      "Quy luật chỉ áp dụng cho con người",
      "Quy luật thay đổi theo tâm trạng",
    ],
    correctAnswer: 1,
    image: "/imgs/triethoc-4.svg",
    imageAlt: "Quy luật khách quan",
    imageCaption: "Quy luật tồn tại độc lập với nhận thức con người",
  },
  {
    id: 13,
    question:
      "Theo triết học Mác-Lênin, thực tiễn khoa học có vai trò gì?",
    options: [
      "Xác nhận chân lý và sáng tạo tri thức mới",
      "Là hoạt động vô nghĩa",
      "Chỉ là công cụ truyền thống",
      "Hoàn toàn phụ thuộc vào ý thức",
    ],
    correctAnswer: 0,
  },
  {
    id: 14,
    question:
      "Mối quan hệ giữa nhân tố chung và nhân tố riêng trong phép biện chứng biểu hiện ở:",
    options: [
      "Nhân tố chung luôn chiếm ưu thế",
      "Nhân tố riêng và chung tác động lẫn nhau",
      "Nhân tố riêng không ảnh hưởng gì đến nhân tố chung",
      "Nhân tố riêng và nhân tố chung không liên quan",
    ],
    correctAnswer: 1,
  },
  {
    id: 15,
    question:
      "Khái niệm 'mâu thuẫn cơ bản' trong phép biện chứng chỉ về điều gì?",
    options: [
      "Sự tồn tại của hai yếu tố tương đồng",
      "Sự đối lập cơ bản quyết định hướng phát triển của sự vật",
      "Sự thống nhất không thể tách rời",
      "Sự biến đổi ngẫu nhiên của sự vật",
    ],
    correctAnswer: 1,
    image: "/imgs/halls/hall-1-3.svg",
    imageAlt: "Mâu thuẫn cơ bản",
    imageCaption: "Mâu thuẫn cơ bản quyết định hướng phát triển của sự vật",
  },
];

const matTranDanTocQuizData: Question[] = [
  {
    id: 1,
    question:
      "Cơ sở hạ tầng trong thuyết duy vật lịch sử là gì?",
    options: [
      "Tư tưởng, luật pháp, tổ chức xã hội",
      "Quan hệ sản xuất và lực lượng sản xuất",
      "Nền văn hóa và tôn giáo",
      "Chính trị và nghệ thuật",
    ],
    correctAnswer: 1,
    image: "/imgs/halls/hall-2-1.svg",
    imageAlt: "Cơ sở hạ tầng và siêu cấu trúc",
    imageCaption: "Cơ sở hạ tầng = quan hệ sản xuất + lực lượng sản xuất",
  },
  {
    id: 2,
    question:
      "Siêu cấu trúc bao gồm những yếu tố nào?",
    options: [
      "Công cụ sản xuất và kỹ thuật",
      "Tôn giáo, nghệ thuật, luật pháp, chính trị",
      "Tư liệu lao động và tài nguyên",
      "Quy mô dân số và địa lý",
    ],
    correctAnswer: 1,
  },
  {
    id: 3,
    question:
      "Theo duy vật lịch sử, sự thay đổi của xã hội chủ yếu bắt nguồn từ đâu?",
    options: [
      "Sự phát triển tư tưởng",
      "Sự biến đổi của quan hệ sản xuất",
      "Thiên tai và biến đổi khí hậu",
      "Sự giao lưu văn hóa giữa các dân tộc",
    ],
    correctAnswer: 1,
    image: "/imgs/industrial-revolution.jpg",
    imageAlt: "Biến đổi quan hệ sản xuất",
    imageCaption: "Cách mạng Công nghiệp thay đổi quan hệ sản xuất xã hội",
  },
  {
    id: 4,
    question:
      "Trong mô hình xã hội Mác-Lênin, giai cấp nào là chủ thể cách mạng?",
    options: [
      "Tư sản dân tộc",
      "Giai cấp công nhân",
      "Trí thức",
      "Nông dân giàu có",
    ],
    correctAnswer: 1,
  },
  {
    id: 5,
    question:
      "Khái niệm 'chế độ sản xuất' trong duy vật lịch sử chỉ gì?",
    options: [
      "Bộ máy nhà nước",
      "Tổng thể quan hệ sản xuất và lực lượng sản xuất",
      "Mô hình quản lý kinh tế",
      "Hệ thống văn hóa và giáo dục",
    ],
    correctAnswer: 1,
    image: "/imgs/halls/hall-2-2.svg",
    imageAlt: "Chế độ sản xuất",
    imageCaption: "Chế độ sản xuất = lực lượng sản xuất + quan hệ sản xuất",
  },
  {
    id: 6,
    question:
      "Luận điểm nào phản ánh quan điểm của Mác về sự phát triển xã hội?",
    options: [
      "Sự phát triển chỉ nhờ vào ý chí con người",
      "Sự phát triển do mâu thuẫn giữa lực lượng và quan hệ sản xuất",
      "Sự phát triển không liên quan đến sản xuất",
      "Sự phát triển chỉ do yếu tố tự nhiên quyết định",
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    question:
      "Trong lịch sử, mâu thuẫn cơ bản nhất được xác định là gì?",
    options: [
      "Mâu thuẫn giữa cá nhân và xã hội",
      "Mâu thuẫn giữa sản xuất vật chất và quan hệ sản xuất",
      "Mâu thuẫn giữa văn hóa và chính trị",
      "Mâu thuẫn giữa các quốc gia",
    ],
    correctAnswer: 1,
  },
  {
    id: 8,
    question:
      "Theo Mác-Lênin, xã hội tư bản chủ nghĩa chủ yếu được xây dựng trên quan hệ sản xuất nào?",
    options: [
      "Tư hữu tư liệu sản xuất",
      "Các hợp tác xã nông nghiệp",
      "Chủ nghĩa cộng sản nguyên thủy",
      "Quan hệ sản xuất phong kiến",
    ],
    correctAnswer: 0,
  },
  {
    id: 9,
    question:
      "Thuật ngữ 'giá trị thặng dư' trong Mác-Lênin chỉ điều gì?",
    options: [
      "Phần giá trị do người lao động tạo ra mà bị tư bản chiếm đoạt",
      "Tổng giá trị của máy móc và công cụ sản xuất",
      "Phần lợi nhuận trả cho người lao động",
      "Giá trị của nguyên liệu thô",
    ],
    correctAnswer: 0,
    image: "/imgs/marx-portrai.jpg",
    imageAlt: "Karl Marx",
    imageCaption: "Học thuyết giá trị thặng dư — cốt lõi phân tích bóc lột CNTB",
  },
  {
    id: 10,
    question:
      "Theo Mác-Lênin, chuyển hóa từ xã hội tư bản chủ nghĩa sang xã hội xã hội chủ nghĩa phải trải qua bước nào?",
    options: [
      "Chuyển hóa trực tiếp không qua giai đoạn nào",
      "Giai đoạn đấu tranh giai cấp và thiết lập chuyên chính vô sản",
      "Giai đoạn phục hưng phong kiến",
      "Giai đoạn cải cách nông nghiệp tư nhân",
    ],
    correctAnswer: 1,
    image: "/imgs/communist-manifesto.jpg",
    imageAlt: "Tuyên ngôn Đảng Cộng sản",
    imageCaption: "Con đường cách mạng vô sản qua đấu tranh giai cấp",
  },
  {
    id: 11,
    question:
      "Ai là người đề xuất khái niệm 'sức mạnh lịch sử của giai cấp công nhân'?",
    options: [
      "Ph.Ăng-ghen",
      "C.Mác",
      "V.I.Lenin",
      "Tất cả các đáp án trên",
    ],
    correctAnswer: 3,
    image: "/imgs/engels-portrait.webp",
    imageAlt: "Marx và Engels",
    imageCaption: "Mác, Engels và Lenin cùng phát triển học thuyết giai cấp công nhân",
  },
  {
    id: 12,
    question:
      "Theo Mác-Lênin, quá trình đấu tranh giai cấp dẫn đến:",
    options: [
      "Sự bất ổn xã hội vĩnh viễn",
      "Sự biến đổi của cơ sở hạ tầng và siêu cấu trúc",
      "Sự ổn định về chính trị",
      "Sự bảo tồn nguyên trạng xã hội",
    ],
    correctAnswer: 1,
  },
  {
    id: 13,
    question:
      "Trong thuyết duy vật lịch sử, lực lượng sản xuất bao gồm những yếu tố nào?",
    options: [
      "Nhân lực, tư liệu lao động và kỹ thuật",
      "Luật pháp, tôn giáo và ý thức hệ",
      "Dân số, đất đai và khí hậu",
      "Các tổ chức chính trị và quân sự",
    ],
    correctAnswer: 0,
  },
  {
    id: 14,
    question:
      "Theo Mác-Lênin, sự phát triển của xã hội chủ nghĩa được bảo đảm bởi yếu tố nào?",
    options: [
      "Sự tư hữu cá nhân về tư liệu sản xuất",
      "Sự phát triển lực lượng sản xuất và quan hệ sản xuất mới",
      "Sự phân hóa giai cấp sâu sắc",
      "Sự cô lập khỏi cộng đồng quốc tế",
    ],
    correctAnswer: 1,
  },
  {
    id: 15,
    question:
      "Luận điểm nào thể hiện tính chủ quan trong thuyết duy vật lịch sử?",
    options: [
      "Quá trình phát triển xã hội có tính khách quan độc lập với con người",
      "Con người là động lực chủ yếu để thay đổi xã hội",
      "Lực lượng sản xuất tự chuyển hóa mà không cần tác động của con người",
      "Sự tiến hóa xã hội dựa trên quy luật tự nhiên",
    ],
    correctAnswer: 1,
    image: "/imgs/halls/hall-2-3.svg",
    imageAlt: "Tính chủ quan trong lịch sử",
    imageCaption: "Con người là động lực chủ yếu thay đổi xã hội",
  },
];

const tuTuongMacLeninQuizData: Question[] = [
  {
    id: 1,
    question:
      "Khái niệm 'vật chất' trong triết học Mác-Lênin được hiểu là gì?",
    options: [
      "Thực tại khách quan tồn tại độc lập với ý thức",
      "Sản phẩm của ý thức con người",
      "Một khái niệm thuần túy tinh thần",
      "Hiện tượng hình thức của tư duy",
    ],
    correctAnswer: 0,
    image: "/imgs/marx-portrai.jpg",
    imageAlt: "Karl Marx",
    imageCaption: "Vật chất là thực tại khách quan, tồn tại độc lập với ý thức",
  },
  {
    id: 2,
    question:
      "Theo Mác-Lênin, mối quan hệ giữa thực tiễn và ý thức là gì?",
    options: [
      "Ý thức quyết định thực tiễn",
      "Thực tiễn quyết định ý thức",
      "Hai yếu tố độc lập không liên quan",
      "Thực tiễn chỉ là phần mở rộng của ý thức",
    ],
    correctAnswer: 1,
  },
  {
    id: 3,
    question:
      "Nguyên lý lượng và chất chuyển hóa lẫn nhau cho thấy điều gì?",
    options: [
      "Sự biến đổi định lượng tích lũy dẫn đến biến đổi chất",
      "Chất không chịu ảnh hưởng bởi lượng",
      "Lượng luôn chi phối chất mà không đổi khác",
      "Sự thay đổi xảy ra hoàn toàn ngẫu nhiên",
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    question:
      "Theo phép biện chứng duy vật, mâu thuẫn trong sự vật có vai trò nào?",
    options: [
      "Là nguồn gốc và động lực phát triển của sự vật",
      "Là biểu hiện sự suy thoái của sự vật",
      "Là điều kiện để duy trì trạng thái cân bằng",
      "Không tồn tại trong các sự vật tự nhiên",
    ],
    correctAnswer: 0,
    image: "/imgs/triethoc-2.svg",
    imageAlt: "Mâu thuẫn biện chứng",
    imageCaption: "Mâu thuẫn — nguồn gốc và động lực phát triển",
  },
  {
    id: 5,
    question:
      "Theo Mác-Lênin, lực lượng sản xuất gồm những yếu tố nào?",
    options: [
      "Tư liệu sản xuất và lao động",
      "Luật pháp và nhà nước",
      "Văn hóa và tư tưởng",
      "Dân số và địa lý",
    ],
    correctAnswer: 0,
    image: "/imgs/industrial-revolution.jpg",
    imageAlt: "Lực lượng sản xuất",
    imageCaption: "Tư liệu sản xuất và lao động — hai yếu tố của lực lượng sản xuất",
  },
  {
    id: 6,
    question:
      "Khái niệm 'giá trị thặng dư' trong kinh tế chính trị Mác-Lênin chỉ điều gì?",
    options: [
      "Phần giá trị lao động không được người lao động nhận lại",
      "Lợi nhuận sau thuế của doanh nghiệp",
      "Tổng giá trị hàng hóa xuất khẩu",
      "Giá trị của nguyên liệu thô",
    ],
    correctAnswer: 0,
  },
  {
    id: 7,
    question:
      "Siêu cấu trúc trong duy vật lịch sử gồm những thành phần nào?",
    options: [
      "Chính trị, pháp luật, tư tưởng và văn hóa",
      "Lực lượng sản xuất và quan hệ sản xuất",
      "Tư liệu sản xuất và lao động",
      "Địa lý và điều kiện tự nhiên",
    ],
    correctAnswer: 0,
  },
  {
    id: 8,
    question:
      "Theo Mác-Lênin, giai cấp nào được xác định là lực lượng tiên phong dẫn dắt cách mạng vô sản?",
    options: [
      "Giai cấp công nhân",
      "Tư sản dân tộc",
      "Nông dân",
      "Giới trí thức",
    ],
    correctAnswer: 0,
    image: "/imgs/lenin-portrait.jpg",
    imageAlt: "Vladimir Lenin",
    imageCaption: "Lenin phát triển lý luận về giai cấp công nhân tiên phong",
  },
  {
    id: 9,
    question:
      "Chuyển hóa từ lượng sang chất biểu hiện điều gì trong phép biện chứng?",
    options: [
      "Khi số lượng thay đổi đủ lớn sẽ tạo ra sự biến đổi bản chất",
      "Định lượng và chất luôn tách biệt",
      "Chất xác định lượng nhưng không đổi",
      "Lượng không ảnh hưởng đến chất",
    ],
    correctAnswer: 0,
  },
  {
    id: 10,
    question:
      "Theo triết học Mác-Lênin, ý thức là gì?",
    options: [
      "Sự phản ánh chủ quan của thế giới vật chất",
      "Một thực thể tồn tại độc lập với vật chất",
      "Một sản phẩm của thần thánh",
      "Một trạng thái tĩnh của tâm lý",
    ],
    correctAnswer: 0,
    image: "/imgs/triethoc-1.svg",
    imageAlt: "Ý thức",
    imageCaption: "Ý thức là sự phản ánh chủ quan của thế giới vật chất",
  },
  {
    id: 11,
    question:
      "Khái niệm 'chế độ sản xuất' trong duy vật lịch sử chỉ gì?",
    options: [
      "Toàn bộ quan hệ sản xuất gắn với lực lượng sản xuất",
      "Hình thức quản lý chính trị",
      "Thể chế văn hóa",
      "Cơ sở hạ tầng vật chất độc lập với xã hội",
    ],
    correctAnswer: 0,
  },
  {
    id: 12,
    question:
      "Giai đoạn chuyển tiếp từ chủ nghĩa tư bản lên chủ nghĩa cộng sản được mô tả bởi Mác-Lênin là gì?",
    options: [
      "Chuyên chính vô sản",
      "Chủ nghĩa tư tưởng dân tộc",
      "Chủ nghĩa phong kiến mới",
      "Nền kinh tế thị trường tự do",
    ],
    correctAnswer: 0,
  },
  {
    id: 13,
    question:
      "Theo Mác-Lênin, quan hệ sản xuất mới trong chủ nghĩa xã hội được xây dựng dựa trên nguyên tắc nào?",
    options: [
      "Sở hữu xã hội về tư liệu sản xuất",
      "Sở hữu tư nhân tuyệt đối",
      "Tư hữu cá nhân về đất đai",
      "Bình đẳng trong việc tích lũy tư bản cá nhân",
    ],
    correctAnswer: 0,
  },
  {
    id: 14,
    question:
      "Trong triết học Mác-Lênin, mâu thuẫn chủ yếu của xã hội tư bản chủ nghĩa là gì?",
    options: [
      "Mâu thuẫn giữa lao động và tư bản",
      "Mâu thuẫn giữa các quốc gia",
      "Mâu thuẫn giữa nghệ thuật và khoa học",
      "Mâu thuẫn giữa con người và tự nhiên",
    ],
    correctAnswer: 0,
    image: "/imgs/halls/hall-3-2.svg",
    imageAlt: "Đấu tranh giai cấp",
    imageCaption: "Mâu thuẫn cơ bản: lao động và tư bản",
  },
  {
    id: 15,
    question:
      "Theo Mác-Lênin, thực tiễn có vị trí đặc biệt nào với nhận thức?",
    options: [
      "Là tiêu chuẩn cuối cùng của chân lý",
      "Là phần không quan trọng của nhận thức",
      "Là điều kiện phụ thuộc vào ý muốn cá nhân",
      "Là biểu hiện của sự may rủi",
    ],
    correctAnswer: 0,
    image: "/imgs/halls/hall-5-1.svg",
    imageAlt: "Thực tiễn và nhận thức",
    imageCaption: "Thực tiễn là tiêu chuẩn cuối cùng của chân lý",
  },
];

const quizDataMap: QuizDataMap = {
  "duy-vat-bien-chung": defaultQuizData,
  "duy-vat-lich-su": matTranDanTocQuizData,
  "tu-tuong-mac-lenin": tuTuongMacLeninQuizData,
  default: defaultQuizData,
};

// Function to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function Quiz() {
  const [searchParams] = useSearchParams();
  const chapter = searchParams.get("chapter") || "default";
  const currentQuizData = quizDataMap[chapter] || defaultQuizData;

  const bgImages = [
    "/imgs/real/quiz-bg-1.jpg",
    "/imgs/real/quiz-bg-2.jpg",
    "/imgs/real/quiz-bg-3.jpg",
    "/imgs/real/quiz-bg-4.jpg",
  ];
  const bg = bgImages[Math.floor(Math.random() * bgImages.length)];

  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>(() =>
    shuffleArray(currentQuizData)
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(
    new Array(currentQuizData.length).fill(-1)
  );
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(-1);
  const [participantName, setParticipantName] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const uid = useAuthStore((s) => s.uid);
  
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  // Update quiz data when chapter changes
  useEffect(() => {
    const newQuizData = quizDataMap[chapter] || defaultQuizData;
    setShuffledQuestions(shuffleArray(newQuizData));
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(newQuizData.length).fill(-1));
    setShowResults(false);
    setSelectedOption(-1);
    setIsSaved(false);
    setParticipantName("");
    setStartTime(Date.now());
    setElapsedTime(0);
  }, [chapter]);

  // Handle active countdown / elapsed time ticker
  useEffect(() => {
    if (showResults) return;
    const interval = setInterval(() => {
      setElapsedTime(Math.round((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime, showResults]);

  // Load leaderboard when results are shown
  useEffect(() => {
    if (showResults) {
      const scoresRef = ref(db, "scores");
      get(scoresRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            const list = Object.keys(data).map((key) => ({
              id: key,
              ...(data[key] as Omit<LeaderboardEntry, "id">),
            })) as LeaderboardEntry[];
            
            // Sort by: score desc, timeTaken asc (if exists), then timestamp asc
            const filtered = list
              .filter((item) => item.chapter === chapter)
              .sort((a, b) => {
                if (b.score !== a.score) {
                  return b.score - a.score;
                }
                const aTime = a.timeTaken !== undefined ? a.timeTaken : 999999;
                const bTime = b.timeTaken !== undefined ? b.timeTaken : 999999;
                if (aTime !== bTime) {
                  return aTime - bTime;
                }
                return a.timestamp - b.timestamp;
              })
              .slice(0, 10);
            setLeaderboard(filtered);
          } else {
            setLeaderboard([]);
          }
        })
        .catch((err) => {
          console.error("Error fetching leaderboard:", err);
        });
    }
  }, [showResults, chapter, isSaved]);

  const saveScore = async () => {
    const trimmed = participantName.trim();
    if (!trimmed) {
      alert("Vui lòng nhập tên của bạn!");
      return;
    }
    setIsSaving(true);
    try {
      const score = calculateScore();
      const percentage = (score / shuffledQuestions.length) * 100;
      
      const newScoreRef = push(ref(db, "scores"));
      await set(newScoreRef, {
        name: trimmed,
        score: score,
        total: shuffledQuestions.length,
        percentage: percentage,
        chapter: chapter,
        timestamp: Date.now(),
        uid: uid || "anonymous",
        timeTaken: elapsedTime
      });
      setIsSaved(true);
    } catch (err) {
      console.error("Error saving score:", err);
      alert("Không thể lưu điểm số. Vui lòng kiểm tra lại kết nối hoặc Rules của bạn!");
    } finally {
      setIsSaving(false);
    }
  };

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(selectedAnswers[currentQuestion + 1]);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(selectedAnswers[currentQuestion - 1]);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return (
        score + (answer === shuffledQuestions[index].correctAnswer ? 1 : 0)
      );
    }, 0);
  };

  const resetQuiz = () => {
    setShuffledQuestions(shuffleArray(currentQuizData));
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(currentQuizData.length).fill(-1));
    setShowResults(false);
    setSelectedOption(-1);
    setIsSaved(false);
    setParticipantName("");
    setStartTime(Date.now());
    setElapsedTime(0);
  };

  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / shuffledQuestions.length) * 100;

    return (
      <div
        className="min-h-screen relative p-6 pt-20"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.85), rgba(30,58,138,0.85)), url("${bg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
      >
        {/* Background overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 58, 138, 0.85) 50%, rgba(15, 23, 42, 0.9) 100%)",
            zIndex: 2,
          }}
        ></div>
        <div className="max-w-4xl mx-auto relative z-40">
          {/* Header Results */}
          <div className="bg-white/90 border border-stone-200 rounded-3xl shadow-2xl p-8 mb-6">
            <div className="flex items-center justify-between text-stone-800 mb-6">
              <div className="flex items-center gap-3">
                <svg
                  className="w-8 h-8 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <h1 className="text-3xl font-bold">Kết quả Quiz</h1>
              </div>
              <button
                onClick={resetQuiz}
                className="bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Làm lại Quiz
              </button>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold text-stone-800 mb-2">
                {score}/{shuffledQuestions.length}
              </div>
              <p className="text-xl text-stone-500 mb-4">
                Bạn đã trả lời đúng {score} trên {shuffledQuestions.length} câu
                hỏi
              </p>

              <div className="mb-6">
                {percentage >= 80 ? (
                  <div className="text-green-400">
                    <p className="text-lg font-semibold">Xuất sắc! 🎉</p>
                    <p>
                      Bạn đã nắm vững kiến thức về triết học Mác-Lênin.
                    </p>
                  </div>
                ) : percentage >= 60 ? (
                  <div className="text-blue-400">
                    <p className="text-lg font-semibold">Khá tốt! 👍</p>
                    <p>
                      Bạn có hiểu biết cơ bản, hãy tiếp tục học tập để nâng cao
                      kiến thức.
                    </p>
                  </div>
                ) : (
                  <div className="text-orange-400">
                    <p className="text-lg font-semibold">
                      Cần cố gắng thêm! 💪
                    </p>
                    <p>Hãy ôn tập lại các nội dung về triết học Mác-Lênin.</p>
                  </div>
                )}
              </div>

              {/* Save Score Section */}
              <div className="mt-8 border-t border-stone-300 pt-6 max-w-md mx-auto">
                {!isSaved ? (
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block text-left">
                      ✍️ Ghi danh vào Bảng Vàng danh dự
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Nhập tên/lớp của bạn để lưu..."
                        value={participantName}
                        onChange={(e) => setParticipantName(e.target.value)}
                        disabled={isSaving}
                        className="flex-1 bg-white/80 border border-stone-300 rounded-xl px-4 py-2 text-stone-800 text-sm focus:outline-none focus:border-red-500 placeholder:text-stone-400 disabled:opacity-50"
                      />
                      <button
                        onClick={saveScore}
                        disabled={isSaving}
                        className="bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-500 hover:to-yellow-500 disabled:opacity-50 text-white font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center min-w-[100px]"
                      >
                        {isSaving ? "Đang lưu..." : "Lưu Điểm"}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-xl text-green-400 text-sm font-semibold animate-pulse">
                    ✨ Điểm số của bạn đã được ghi nhận trên Bảng Vàng!
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Leaderboard Panel */}
          <div className="bg-white/90 border border-stone-200 rounded-3xl shadow-2xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-4 border-b border-stone-300 pb-3">
              <span className="text-xl">🏆</span>
              <h2 className="text-lg font-bold text-yellow-500 uppercase tracking-wider">
                Bảng Vàng Danh Dự
              </h2>
            </div>
            
            {leaderboard.length === 0 ? (
              <p className="text-gray-500 text-xs text-center py-4">Chưa có kết quả thi cử nào được lưu trữ. Hãy là người đầu tiên!</p>
            ) : (
              <div className="space-y-2">
                {leaderboard.map((item, idx) => {
                  const isGold = idx === 0;
                  const isSilver = idx === 1;
                  const isBronze = idx === 2;
                  
                  let rankIcon = <span className="text-gray-400 font-bold text-xs">#{idx + 1}</span>;
                  if (isGold) rankIcon = <span className="text-lg">🥇</span>;
                  if (isSilver) rankIcon = <span className="text-lg">🥈</span>;
                  if (isBronze) rankIcon = <span className="text-lg">🥉</span>;
                  
                  return (
                    <div 
                      key={item.id} 
                      className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-300 ${
                        item.uid === uid 
                          ? "border-yellow-500 bg-yellow-500/10" 
                          : "border-gray-800 bg-gray-900/30 text-gray-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 flex justify-center">{rankIcon}</div>
                        <div>
                          <span className={`font-semibold text-sm block ${item.uid === uid ? "text-yellow-400" : "text-gray-200"}`}>
                            {item.name}
                          </span>
                          <span className="text-[10px] text-gray-500 block">
                            {new Date(item.timestamp).toLocaleString("vi-VN", { dateStyle: "short", timeStyle: "short" })}
                          </span>
                        </div>
                      </div>
                      <div className="text-right flex flex-col items-end">
                        <span className="font-extrabold text-sm text-yellow-400 block">{item.score} / {item.total}</span>
                        <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-medium">
                          {item.timeTaken !== undefined && (
                            <span className="bg-gray-800 px-1 py-0.5 rounded text-gray-300 font-mono text-[9px]">
                              ⏱️ {Math.floor(item.timeTaken / 60)}:{(item.timeTaken % 60).toString().padStart(2, '0')}
                            </span>
                          )}
                          <span>({Math.round(item.percentage)}%)</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Detailed Results */}
          <div className="space-y-4">
            {shuffledQuestions.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;

              return (
                <div
                  key={question.id}
                  className="bg-white/90 border border-stone-200 rounded-2xl border-2 border-stone-300 p-6"
                >
                  {/* Question */}
                  {question.image && (
                    <QuestionImage
                      src={question.image}
                      alt={question.imageAlt}
                      caption={question.imageCaption}
                      size="sm"
                    />
                  )}
                  <h3 className="text-stone-800 font-semibold mb-4 leading-relaxed">
                    {question.question}
                  </h3>

                  {/* User's Answer */}
                  {userAnswer !== -1 && (
                    <div
                      className={`flex items-start gap-3 p-4 rounded-xl border-2 mb-3 ${
                        isCorrect
                          ? "border-green-500 bg-green-500/10"
                          : "border-red-500 bg-red-500/10"
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                          isCorrect ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {isCorrect ? (
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <p
                          className={`font-medium ${
                            isCorrect ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {isCorrect ? "Đáp án đúng: " : "Đáp án sai: "}
                          {question.options[userAnswer]}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Correct Answer (if user was wrong) */}
                  {!isCorrect && (
                    <div className="flex items-start gap-3 p-4 rounded-xl border-2 border-green-500 bg-green-500/10">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-green-400 font-medium">
                          Đáp án đúng:{" "}
                          {question.options[question.correctAnswer]}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

    return (
    <div
      className="min-h-screen relative flex items-center justify-center p-6 pt-20"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.85), rgba(30,58,138,0.85)), url("${bg}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 1,
      }}
    >
      {/* Background overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 58, 138, 0.85) 50%, rgba(15, 23, 42, 0.9) 100%)",
          zIndex: 2,
        }}
      ></div>
      <div className="max-w-4xl w-full relative z-40">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header with Progress */}
          <div className="bg-gradient-to-r from-red-600 to-yellow-600 p-6">
            <div className="flex items-center justify-between text-white mb-4">
              <h1 className="text-2xl font-bold">Quiz: Triết học Mác-Lênin</h1>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold bg-black/20 px-3 py-1 rounded-full border border-stone-200">
                  ⏱️ {Math.floor(elapsedTime / 60)}:{(elapsedTime % 60).toString().padStart(2, '0')}
                </span>
                <span className="text-lg font-semibold bg-white/10 px-3 py-1 rounded-full border border-stone-200">
                  {currentQuestion + 1}/{shuffledQuestions.length}
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-white/20 rounded-full h-3">
              <div
                className="bg-white h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question Content */}
          <div className="p-8">
            <div className="mb-8">
              {shuffledQuestions[currentQuestion].image && (
                <QuestionImage
                  src={shuffledQuestions[currentQuestion].image!}
                  alt={shuffledQuestions[currentQuestion].imageAlt}
                  caption={shuffledQuestions[currentQuestion].imageCaption}
                />
              )}
              <h2 className="text-xl font-semibold text-gray-800 leading-relaxed">
                {shuffledQuestions[currentQuestion].question}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-4 mb-8">
              {shuffledQuestions[currentQuestion].options.map(
                (option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] ${
                      selectedOption === index
                        ? "border-red-500 bg-red-50 text-red-700 shadow-lg"
                        : "border-gray-200 hover:border-red-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center">
                      <span
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 text-sm font-semibold ${
                          selectedOption === index
                            ? "border-red-500 bg-red-500 text-white"
                            : "border-gray-300"
                        }`}
                      >
                        {String.fromCharCode(97 + index)}
                      </span>
                      <span className="text-gray-700">{option}</span>
                    </div>
                  </button>
                )
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  currentQuestion === 0
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gray-600 text-white hover:bg-gray-700 transform hover:scale-105"
                }`}
              >
                ← Câu trước
              </button>

              <button
                onClick={handleNext}
                disabled={selectedOption === -1}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedOption === -1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-red-600 to-yellow-600 text-white hover:from-red-700 hover:to-yellow-700 transform hover:scale-105 shadow-lg"
                }`}
              >
                {currentQuestion === shuffledQuestions.length - 1
                  ? "Hoàn thành"
                  : "Câu tiếp →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
