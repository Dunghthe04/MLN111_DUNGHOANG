import { Shield, Code, BookOpen, Presentation, Users } from "lucide-react";
import { Particles } from "../components/magicui/Special Effect/particles";

// TODO: Nhóm cần cập nhật thông tin thành viên thực tế ở đây
const members = [
  {
    name: "Phạm Nguyệt Anh",
    role: "TRƯỞNG NHÓM",
    mssv: "HS186599",
    works: "Điều phối & tổng hợp dự án, nghiên cứu lý luận triết học Mác-Lênin, thuyết trình, phản biện nhóm.",
    initials: "NA",
    tags: ["Leader", "Research", "Presenter"],
  },
  {
    name: "Hoàng Tuấn Dũng",
    role: "Thành viên",
    mssv: "He182368",
    works: "Lên ý tưởng, phát triển Web, thiết kế giao diện & cơ sở dữ liệu, tối ưu hóa hiệu năng và triển khai ứng dụng.",
    initials: "DH",
    tags: ["Dev", "Designer", "Research"],
  },
  {
    name: "Nguyễn Thị Út Thương ",
    role: "Thành viên",
    mssv: "HA170011",
    works: "Nghiên cứu tư liệu về bối cảnh lịch sử hình thành triết học Mác-Lênin, hỗ trợ xây dựng nội dung.",
    initials: "UT",
    tags: ["Research", "Content"],
  },
  {
    name: "Kim Đình Tuấn",
    role: "Thành viên",
    mssv: "HE186039",
    works: "Nghiên cứu tiền đề lý luận (triết học Đức, KTCT Anh, CNXH không tưởng Pháp), tổng hợp nội dung.",
    initials: "KT",
    tags: ["Research", "Content", "Presenter"],
  },
  {
    name: "Đồng Hoàng Minh",
    role: "Thành viên",
    mssv: "HS180981",
    works: "Nghiên cứu giai đoạn Marx-Engels, các tác phẩm triết học tiêu biểu, biên soạn nội dung sảnh 3.",
    initials: "TV5",
    tags: ["Research", "Content"],
  },
  {
    name: "Đào Nhật Tân",
    role: "Thành viên",
    mssv: "HS180223",
    works: "Nghiên cứu giai đoạn Lenin phát triển triết học Mác, Cách mạng Tháng Mười, biên soạn nội dung sảnh 4.",
    initials: "NT",
    tags: ["Research", "Content"],
  },
  {
    name: "Vũ Tùng Duy",
    role: "Thành viên",
    mssv: "HE180740",
    works: "Nghiên cứu đặc trưng và vai trò của triết học Mác-Lênin, biên soạn ngân hàng câu hỏi trắc nghiệm.",
    initials: "TD",
    tags: ["Research", "Content"],
  },
   {
    name: "Trần Mai Chi",
    role: "Thành viên",
    mssv: "HS186360",
    works: "Nghiên cứu đặc trưng và vai trò của triết học Mác-Lênin, biên soạn ngân hàng câu hỏi trắc nghiệm.",
    initials: "MC",
    tags: ["Research", "Content"],
  },
   {
    name: "Nguyễn Trang Nhung",
    role: "Thành viên",
    mssv: "HS186608",
    works: "Nghiên cứu đặc trưng và vai trò của triết học Mác-Lênin, biên soạn ngân hàng câu hỏi trắc nghiệm.",
    initials: "TN",
    tags: ["Research", "Content"],
  },
   {
    name: "Hoàng Thị Thùy Linh",
    role: "Thành viên",
    mssv: "HS186042",
    works: "Nghiên cứu đặc trưng và vai trò của triết học Mác-Lênin, biên soạn ngân hàng câu hỏi trắc nghiệm.",
    initials: "TL",
    tags: ["Research", "Content"],
  },
];

export default function Member() {
  return (
    <div className="min-h-screen relative p-6 pt-20 bg-gradient-to-b from-[#FDF6E3] to-white flex flex-col justify-center items-center select-none">

      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-30 pointer-events-none"
        style={{ backgroundImage: 'url("/imgs/real/member-cover.jpg")' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80 pointer-events-none" />

      {/* Particles */}
      <Particles
        className="absolute inset-0 z-10"
        quantity={50}
        staticity={30}
        ease={70}
        color="#b91c1c"
        size={1.2}
      />

      <div className="max-w-6xl w-full relative z-20 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 text-red-600 px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
            <Users className="w-4.5 h-4.5" /> Thành viên dự án
          </div>

          <h1 className="text-4xl md:text-5xl font-title tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-amber-600 to-red-700 drop-shadow-[0_0_8px_rgba(185,28,28,0.2)]">
            NHÓM 2 — MLN111
          </h1>
          <p className="text-stone-500 text-sm md:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Đội ngũ phát triển dự án <strong>"Hành Trình Hình Thành Triết Học Mác-Lênin"</strong> — MLN111, kết hợp nghiên cứu lý luận triết học và ứng dụng công nghệ số.
          </p>
          <div className="mt-4 inline-block px-4 py-1.5 bg-amber-600/10 border border-amber-600/30 text-amber-700 text-xs font-semibold rounded-full">
            FPT University · Học kỳ SUMMER 2026
          </div>
        </div>

        {/* Member cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch justify-center">
          {members.map((member) => {
            const isLeader = member.role === "TRƯỞNG NHÓM";

            return (
              <div
                key={member.name}
                className={`gold-glow-panel rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] bg-white/90 border relative group overflow-hidden ${
                  isLeader ? "border-red-600/40 shadow-[0_0_20px_rgba(185,28,28,0.1)]" : "border-red-800/15"
                }`}
              >
                {isLeader && (
                  <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-red-600/10 blur-xl pointer-events-none" />
                )}

                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg border ${
                      isLeader
                        ? "bg-red-600/15 text-red-600 border-red-600/30 shadow-[0_0_10px_rgba(185,28,28,0.15)]"
                        : "bg-stone-200/60 text-stone-600 border-stone-300/50"
                    }`}>
                      {member.initials}
                    </div>

                    {isLeader && (
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-extrabold uppercase bg-red-600 text-white tracking-wider shadow-md">
                        <Shield className="w-3.5 h-3.5" /> Trưởng Nhóm
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold font-heading text-stone-800 group-hover:text-red-600 transition-colors duration-200">
                    {member.name}
                  </h3>
                  <div className="flex gap-2 items-center mt-0.5 mb-4">
                    <span className="text-xs font-semibold text-stone-400">{member.role}</span>
                    <span className="text-stone-400">|</span>
                    <span className="text-xs font-mono font-semibold text-red-700/80">{member.mssv}</span>
                  </div>

                  <p className="text-stone-500 text-sm leading-relaxed mb-6">{member.works}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-red-800/8">
                  {member.tags.map((tag) => {
                    let IconComponent = BookOpen;
                    if (tag === "Dev") IconComponent = Code;
                    if (tag === "Presenter") IconComponent = Presentation;

                    return (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide bg-stone-200/60 border border-stone-300/50 text-stone-600"
                      >
                        <IconComponent className="w-3 h-3" /> {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note for group */}
       
      </div>
    </div>
  );
}