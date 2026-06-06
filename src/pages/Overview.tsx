import { ShootingStars } from "../components/aceternityui/shooting-stars";
import { StarsBackground } from "../components/aceternityui/stars-background";
import { AuroraText } from "../components/magicui/aurora-text";
import { Target, BookOpen, FlaskConical, Lightbulb, Scale } from "lucide-react";
import ChatGPTLogo from "../assets/ChatGPT_logo.svg?react"
import ChatGPT from "../assets/ChatGPT.svg?react"
import GeminiLogo from "../assets/Google-gemini-icon.svg?react"
import GeminiLetter from "../assets/Google_Gemini_logo.svg?react"
import { Pointer } from "../components/magicui/pointer";

const rules = [
  {
    title: "Nguyên tắc 1",
    content:
      "AI được sử dụng với vai trò công cụ hỗ trợ, không thay thế tư duy phân tích và sáng tạo của nhóm.",
  },
  {
    title: "Nguyên tắc 2",
    content:
      "Mọi thông tin do AI cung cấp đều được kiểm chứng với Giáo trình Triết học Mác-Lênin chính thống.",
  },
  {
    title: "Nguyên tắc 3",
    content:
      "Nội dung cuối cùng được chỉnh sửa, biên tập bởi các thành viên, không sao chép nguyên văn từ AI.",
  },
  {
    title: "Nguyên tắc 4",
    content:
      "Đảm bảo tính minh bạch, liêm chính học thuật và đạo đức trong việc ứng dụng công nghệ.",
  },
];

const LOs = [
  {
    code: "LO1",
    content:
      "Hiểu được điều kiện, tiền đề lịch sử-xã hội, khoa học-tự nhiên và lý luận hình thành triết học Mác-Lênin.",
  },
  {
    code: "LO2",
    content:
      "Nắm vững quá trình hình thành và phát triển triết học Mác qua các giai đoạn: Marx-Engels (1840-1895) và Lenin (1895-1924).",
  },
  {
    code: "LO3",
    content:
      "Hiểu được những đặc trưng cơ bản: tính khoa học, tính cách mạng, tính đảng và tính mở của triết học Mác-Lênin.",
  },
  {
    code: "LO4",
    content:
      "Vận dụng nền tảng triết học Mác-Lênin vào nhận thức các vấn đề thực tiễn xã hội Việt Nam hiện nay.",
  },
  {
    code: "LO5",
    content:
      "Phát triển kỹ năng làm việc nhóm, tư duy phân tích – phê phán, tìm kiếm và trình bày tài liệu học thuật, ứng dụng AI có đạo đức.",
  },
];

export default function Overview() {
  return (
    <div className="relative text-stone-600 w-full min-h-screen bg-[#FDF6E3] px-6 md:px-12 pt-28 pb-20 overflow-x-hidden z-0 scrollbar-thin scrollbar-thumb-red-800/20 scrollbar-track-transparent">
      {/* Background decoration */}
      <div className="fixed opacity-[0.04] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10 select-none text-[20vw] font-title text-red-700">
        MLN
      </div>

      <div className="max-w-6xl mx-auto z-10 relative space-y-16">
        {/* Title Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider uppercase">
            <span className="bg-gradient-to-b from-red-800 via-red-600 to-red-700 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(185,28,28,0.15)]">
              <AuroraText>Tổng Quan </AuroraText> Dự Án
            </span>
          </h2>
          <div className="space-y-1 text-sm md:text-base font-medium tracking-wide text-stone-500 uppercase">
            <p>"Hành Trình Hình Thành Triết Học Mác-Lênin"</p>
            <p className="text-red-700/80 text-xs md:text-sm">"Từ lý luận đến thực tiễn — Từ quá khứ đến hiện tại"</p>
          </div>
          <div className="text-xs text-stone-400 font-medium">MLN111 · Nhóm 2 · FPT University</div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-red-600/40 to-transparent mx-auto mt-4" />
        </div>

        {/* I. Tóm tắt dự án */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold uppercase tracking-wider text-red-600 border-l-2 border-red-600 pl-3 flex items-center gap-2">
            I. Tóm tắt dự án
          </h3>

          <div className="space-y-6">
            <p className="text-stone-600 leading-relaxed max-w-4xl text-base">
              Dự án làm rõ{" "}
              <span className="font-semibold text-amber-700">quá trình hình thành và phát triển Triết học Mác-Lênin</span>{" "}
              — từ những tiền đề lịch sử-xã hội, khoa học-tự nhiên và lý luận, đến các giai đoạn phát triển qua Marx, Engels và Lenin.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
              <div className="relative overflow-hidden rounded-xl border border-red-800/15 bg-[#FAF0DC]/60 backdrop-blur-sm p-6 shadow-sm hover:border-red-600/30 transition duration-300 lg:col-span-4 group hover:shadow-[0_0_20px_rgba(185,28,28,0.06)]">
                <h4 className="text-base font-bold text-amber-700 flex items-center gap-2">
                  <Target className="size-5 text-red-700" /> Mục tiêu
                </h4>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(320px_200px_at_15%_0%,rgba(185,28,28,0.04),transparent_60%)]" />
                <p className="text-stone-500 text-sm mt-3 leading-relaxed">
                  Giúp sinh viên hiểu sâu về nguồn gốc, bản chất và vai trò của Triết học Mác-Lênin qua không gian triển lãm số tương tác.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-red-800/15 bg-[#FAF0DC]/60 backdrop-blur-sm p-6 shadow-sm hover:border-red-600/30 transition duration-300 lg:col-span-4 group hover:shadow-[0_0_20px_rgba(185,28,28,0.06)]">
                <h4 className="text-base font-bold text-amber-700 flex items-center gap-2">
                  <BookOpen className="size-5 text-red-700" /> Phạm vi nghiên cứu
                </h4>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(320px_200px_at_85%_0%,rgba(185,28,28,0.04),transparent_60%)]" />
                <p className="text-stone-500 text-sm mt-3 leading-relaxed">
                  Chương 1 — MLN111: Triết học và vai trò của nó trong đời sống xã hội. Sự ra đời và phát triển của triết học Mác-Lênin.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-red-800/15 bg-[#FAF0DC]/60 backdrop-blur-sm p-6 shadow-sm hover:border-red-600/30 transition duration-300 lg:col-span-4 group hover:shadow-[0_0_20px_rgba(185,28,28,0.06)]">
                <h4 className="text-base font-bold text-amber-700 flex items-center gap-2">
                  <FlaskConical className="size-5 text-red-700" /> Phương pháp
                </h4>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(300px_180px_at_0%_100%,rgba(185,28,28,0.04),transparent_60%)]" />
                <p className="text-stone-500 text-sm mt-3 leading-relaxed">
                  Nghiên cứu tài liệu chính thống, tổng hợp và trình bày qua giao diện web tương tác với timeline, flashcard và quiz.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-red-800/15 bg-[#FAF0DC]/60 backdrop-blur-sm p-6 shadow-sm hover:border-red-600/30 transition duration-300 lg:col-span-6 group hover:shadow-[0_0_20px_rgba(185,28,28,0.06)]">
                <h4 className="text-base font-bold text-amber-700 flex items-center gap-2">
                  <Lightbulb className="size-5 text-red-700" /> Nội dung chính
                </h4>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(380px_220px_at_100%_0%,rgba(185,28,28,0.04),transparent_60%)]" />
                <ul className="text-stone-500 text-sm mt-3 leading-relaxed space-y-1">
                  <li>• Bối cảnh lịch sử-xã hội (Cách mạng CN, giai cấp công nhân)</li>
                  <li>• Ba nguồn gốc lý luận (Đức, Anh, Pháp)</li>
                  <li>• Giai đoạn Marx-Engels (1818-1895)</li>
                  <li>• Lenin phát triển triết học Mác (1870-1924)</li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-red-800/15 bg-[#FAF0DC]/60 backdrop-blur-sm p-6 shadow-sm hover:border-red-600/30 transition duration-300 lg:col-span-6 group hover:shadow-[0_0_20px_rgba(185,28,28,0.06)]">
                <h4 className="text-base font-bold text-amber-700 flex items-center gap-2">
                  <Scale className="size-5 text-red-700" /> Đặc trưng & Vai trò
                </h4>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(360px_200px_at_50%_100%,rgba(185,28,28,0.04),transparent_60%)]" />
                <p className="text-stone-500 text-sm mt-3 leading-relaxed">
                  Tính khoa học – cách mạng, chủ nghĩa duy vật biện chứng và lịch sử, vai trò là thế giới quan và phương pháp luận khoa học.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-emerald-800/20 bg-emerald-50/50 backdrop-blur-sm p-6 mt-4 shadow-sm">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(280px_140px_at_20%_0%,rgba(16,185,129,0.05),transparent_60%)]" />
              <p className="relative text-emerald-900 font-medium leading-relaxed text-sm">
                <span className="block text-xs uppercase tracking-wider text-emerald-700 font-extrabold mb-1">Kết luận</span>
                Triết học Mác-Lênin không chỉ là di sản học thuật mà là nền tảng tư tưởng, kim chỉ nam cho hành động của Đảng và nhân dân ta trong công cuộc xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa.
              </p>
            </div>
          </div>
        </div>

        {/* II. Learning Outcomes */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold uppercase tracking-wider text-red-600 border-l-2 border-red-600 pl-3 flex items-center gap-2">
            II. Chuẩn đầu ra (Learning Outcomes) — MLN111
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-6">
            {LOs.map((lo) => (
              <div key={lo.code} className="lg:col-span-2 h-full">
                <div className="relative h-full overflow-hidden rounded-xl border border-red-800/15 bg-[#FAF0DC]/60 backdrop-blur-sm p-5 shadow-sm hover:border-red-600/30 transition duration-300 flex flex-col justify-between group hover:shadow-[0_0_20px_rgba(185,28,28,0.06)]">
                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(260px_160px_at_15%_0%,rgba(185,28,28,0.02),transparent_60%),radial-gradient(260px_160px_at_85%_100%,rgba(185,28,28,0.02),transparent_60%)]" />
                  <div className="relative z-10 flex items-start gap-3">
                    <span className="shrink-0 px-2 py-0.5 rounded bg-red-600 text-white text-[10px] font-extrabold tracking-wider uppercase">
                      {lo.code}
                    </span>
                    <p className="text-stone-500 text-xs md:text-sm leading-relaxed">{lo.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* III. Báo cáo sử dụng AI */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold uppercase tracking-wider text-red-600 border-l-2 border-red-600 pl-3 flex items-center gap-2">
            III. Ứng dụng Trí tuệ nhân tạo (AI)
          </h3>

          <div className="space-y-8 pl-3 md:pl-5">
            {/* 1. Công cụ sử dụng */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-stone-700">1. Công cụ đã sử dụng</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
                <div className="flex flex-col items-center justify-center gap-4 py-8 px-6 bg-[#FAF0DC]/50 border border-red-800/10 hover:border-red-600/30 rounded-xl relative overflow-hidden transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <ChatGPTLogo className="size-8 text-stone-700" />
                    <span className="text-lg font-bold text-stone-800">ChatGPT</span>
                  </div>
                  <Pointer className="z-10">
                    <div className="flex items-center gap-2 bg-white px-3 py-1 border border-stone-300 text-[10px] text-stone-500 rounded-full select-none cursor-pointer">
                      <ChatGPT className="size-4 text-emerald-500 animate-spin" /> Tương tác trợ lý
                    </div>
                  </Pointer>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 py-8 px-6 bg-[#FAF0DC]/50 border border-red-800/10 hover:border-red-600/30 rounded-xl relative overflow-hidden transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <GeminiLogo className="size-8 text-stone-700" />
                    <span className="text-lg font-bold text-stone-800">Google Gemini</span>
                  </div>
                  <Pointer className="z-10">
                    <div className="flex items-center gap-2 bg-white px-3 py-1 border border-stone-300 text-[10px] text-stone-500 rounded-full select-none cursor-pointer">
                      <GeminiLetter className="h-4 w-12 animate-pulse" /> Trợ lý Google
                    </div>
                  </Pointer>
                </div>
              </div>
            </div>

            {/* 2. Cách sử dụng */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-stone-700">2. Phương thức ứng dụng</h4>
              <ul className="space-y-2 list-none text-stone-500 text-sm leading-relaxed max-w-4xl">
                <li className="flex items-start gap-2">
                  <span className="text-red-700 font-bold shrink-0 mt-0.5">•</span>
                  <span>Tổng hợp và lập dàn ý sơ bộ từ Giáo trình Triết học Mác-Lênin (Bộ GD&ĐT, NXB Chính trị quốc gia Sự thật, 2021).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-700 font-bold shrink-0 mt-0.5">•</span>
                  <span>Hệ thống hóa ngân hàng câu hỏi ôn tập về sự hình thành triết học Mác-Lênin, tinh lọc các nội dung cốt lõi.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-700 font-bold shrink-0 mt-0.5">•</span>
                  <span>Hỗ trợ thiết kế cấu trúc giao diện trang web triển lãm số và tối ưu hóa trải nghiệm người dùng.</span>
                </li>
              </ul>
            </div>

            {/* 3. Nhiệm vụ nhóm */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-stone-700">3. Nhiệm vụ kiểm chứng của thành viên</h4>
              <ul className="space-y-2 list-none text-stone-500 text-sm leading-relaxed max-w-4xl">
                <li className="flex items-start gap-2">
                  <span className="text-red-700 font-bold shrink-0 mt-0.5">•</span>
                  <span>Đối chiếu nghiêm ngặt mọi thông tin với Giáo trình MLN111 chính thức và các tác phẩm gốc của Marx, Engels, Lenin.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-700 font-bold shrink-0 mt-0.5">•</span>
                  <span>Tích hợp dẫn chứng lịch sử cụ thể về quá trình hình thành và phát triển triết học Mác-Lênin.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-700 font-bold shrink-0 mt-0.5">•</span>
                  <span>Biên tập, trau chuốt ngôn ngữ học thuật nhằm đáp ứng chuẩn mực nghiên cứu môn học MLN111.</span>
                </li>
              </ul>
            </div>

            {/* 4. Nguyên tắc đạo đức */}
            <div className="space-y-4 pt-2">
              <h4 className="text-base font-bold text-stone-700">4. Nguyên tắc ứng dụng AI có đạo đức</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {rules.map((rule, index) => (
                  <div key={index} className="relative overflow-hidden rounded-xl border border-red-800/15 bg-[#FAF0DC]/40 p-5 hover:border-red-600/30 transition duration-300 flex flex-col justify-between">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(220px_140px_at_15%_0%,rgba(251,191,36,0.03),transparent_60%),radial-gradient(220px_140px_at_85%_100%,rgba(251,146,60,0.03),transparent_60%)]" />
                    <div className="relative z-10 space-y-4">
                      <div className="text-xs font-extrabold text-red-600 flex items-center gap-2 uppercase tracking-wide">
                        <Scale className="size-4 shrink-0" /> {rule.title}
                      </div>
                      <p className="text-stone-500 text-xs md:text-sm leading-relaxed">{rule.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ShootingStars minDelay={2500} maxDelay={4500} />
      <StarsBackground twinkleProbability={0.6} />
    </div>
  );
}
