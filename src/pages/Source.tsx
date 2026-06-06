import { Link } from "react-router";
import { ShootingStars } from "../components/aceternityui/shooting-stars";
import { StarsBackground } from "../components/aceternityui/stars-background";
import { BookText, Brain, Film, Images, ExternalLink } from "lucide-react";

const imgSources = [
  {
    url: "https://www.marxists.org/archive/marx/works/1848/communist-manifesto/",
    title: "Marxists.org — Tuyên ngôn Đảng Cộng sản (1848) — Nguyên bản tiếng Anh"
  },
  {
    url: "https://vi.wikipedia.org/wiki/Karl_Marx",
    title: "Wikipedia — Tiểu sử Karl Marx (1818–1883)"
  },
  {
    url: "https://vi.wikipedia.org/wiki/Friedrich_Engels",
    title: "Wikipedia — Tiểu sử Friedrich Engels (1820–1895)"
  },
  {
    url: "https://vi.wikipedia.org/wiki/Vladimir_Lenin",
    title: "Wikipedia — Tiểu sử Vladimir Lenin (1870–1924)"
  },
  {
    url: "https://vi.wikipedia.org/wiki/Tri%E1%BA%BFt_h%E1%BB%8Dc_M%C3%A1c%E2%80%93L%C3%AA-nin",
    title: "Wikipedia — Tổng quan Triết học Mác-Lênin"
  },
  {
    url: "https://en.wikipedia.org/wiki/Industrial_Revolution",
    title: "Wikipedia — Cuộc Cách mạng Công nghiệp (nguồn ảnh minh họa)"
  },
];

const videoSources = [
  {
    url: "https://www.youtube.com/watch?v=fSQgCy_iIcc",
    title: "Tư liệu: Sự ra đời của triết học Mác và chủ nghĩa Mác-Lênin"
  },
  {
    url: "https://www.youtube.com/watch?v=B3u4EFTwprM",
    title: "Phim tư liệu: Cuộc đời và tư tưởng của Karl Marx"
  },
  {
    url: "https://www.youtube.com/watch?v=SrMOEKMKlLc",
    title: "Cách mạng Tháng Mười Nga 1917 — Lenin lãnh đạo"
  },
];

const aiUsages = [
  "Gemini (model: gemini-2.5-flash) phục vụ tích hợp Chatbot tư vấn học tập và giải đáp câu hỏi về triết học Mác-Lênin.",
  "ChatGPT (model: gpt-4o) hỗ trợ biên tập nội dung lịch sử triết học, tối ưu từ vựng học thuật và gợi ý phong cách thiết kế.",
  "Gemini (model: gemini-2.5-pro) hỗ trợ rà soát cấu trúc tư liệu, phân loại tài liệu tham khảo và kiểm tra tính chính xác của nội dung."
];

export default function Source() {
  return (
    <div className="relative w-full min-h-screen bg-[#FDF6E3] px-6 md:px-12 pt-28 pb-20 overflow-x-hidden z-0">
      {/* Background decoration */}
      <div className="fixed opacity-[0.04] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10 select-none text-[25vw] font-title text-red-700">
        M
      </div>

      <div className="max-w-6xl mx-auto z-10 relative space-y-12">
        {/* Title Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider uppercase">
            <span className="bg-gradient-to-b from-red-800 via-red-600 to-red-700 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(185,28,28,0.15)]">
              Tài Nguyên Lưu Trữ
            </span>
          </h2>
          <p className="text-stone-500 text-xs md:text-sm font-medium tracking-wide uppercase">
            Nguồn tư liệu, hình ảnh và hệ cơ sở tri thức ứng dụng trong dự án MLN111
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-red-600/40 to-transparent mx-auto mt-4" />
        </div>

        {/* Shelf Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Box 1: Giáo trình */}
          <div className="relative overflow-hidden rounded-xl border border-red-800/15 bg-[#FAF0DC]/60 backdrop-blur-sm p-6 hover:border-red-600/30 transition duration-300 group hover:shadow-[0_0_20px_rgba(185,28,28,0.04)] flex flex-col justify-between">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(280px_160px_at_10%_0%,rgba(185,28,28,0.02),transparent_60%)]" />
            <div>
              <h3 className="text-lg font-bold text-amber-700 flex items-center gap-2 mb-4 border-b border-stone-300 pb-2">
                <BookText className="size-5 text-red-700" /> Giáo trình & Lý luận
              </h3>
              <div className="space-y-3 text-stone-500 text-sm leading-relaxed">
                <div>
                  <p className="font-semibold text-stone-700">Giáo trình Triết học Mác-Lênin (2021)</p>
                  <p>Bộ Giáo dục và Đào tạo. NXB Chính trị quốc gia Sự thật. Chủ biên: GS.TS Phạm Văn Đức.</p>
                </div>
                <div>
                  <p className="font-semibold text-stone-700">Tuyển tập Marx-Engels, Lenin Toàn tập</p>
                  <p>NXB Chính trị quốc gia Sự thật. Các tác phẩm triết học tiêu biểu: Tuyên ngôn ĐCS (1848), Tư bản (1867), CNVL và CNKNPB (1908).</p>
                </div>
                <div>
                  <p className="font-semibold text-stone-700">Tài liệu tham khảo bổ sung</p>
                  <p>Lịch sử triết học Mác-Lênin — GS.TS Nguyễn Ngọc Long (chủ biên). Đề cương bài giảng MLN111 của FPT University.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Box 2: Video */}
          <div className="relative overflow-hidden rounded-xl border border-red-800/15 bg-[#FAF0DC]/60 backdrop-blur-sm p-6 hover:border-red-600/30 transition duration-300 group hover:shadow-[0_0_20px_rgba(185,28,28,0.04)]">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(280px_160px_at_10%_0%,rgba(185,28,28,0.02),transparent_60%)]" />
            <h3 className="text-lg font-bold text-amber-700 flex items-center gap-2 mb-4 border-b border-stone-300 pb-2">
              <Film className="size-5 text-red-700" /> Tư liệu nghe nhìn
            </h3>
            <div className="space-y-4">
              {videoSources.map((item, idx) => (
                <div key={idx} className="group/item flex items-start gap-2">
                  <span className="text-red-700 mt-1 font-bold shrink-0">•</span>
                  <Link
                    to={item.url}
                    target="_blank"
                    className="text-stone-500 group-hover/item:text-red-600 text-sm transition-colors leading-relaxed flex items-center gap-1.5 hover:underline"
                  >
                    <span>{item.title}</span>
                    <ExternalLink className="size-3.5 shrink-0 opacity-40 group-hover/item:opacity-100" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Box 3: Hình ảnh & Tư liệu */}
          <div className="relative overflow-hidden rounded-xl border border-red-800/15 bg-[#FAF0DC]/60 backdrop-blur-sm p-6 hover:border-red-600/30 transition duration-300 group hover:shadow-[0_0_20px_rgba(185,28,28,0.04)] md:col-span-2">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(280px_160px_at_10%_0%,rgba(185,28,28,0.02),transparent_60%)]" />
            <h3 className="text-lg font-bold text-amber-700 flex items-center gap-2 mb-4 border-b border-stone-300 pb-2">
              <Images className="size-5 text-red-700" /> Tư liệu hình ảnh & Lịch sử
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {imgSources.map((item, idx) => (
                <div key={idx} className="group/item flex items-start gap-2">
                  <span className="text-red-700 mt-1 font-bold shrink-0">•</span>
                  <Link
                    to={item.url}
                    target="_blank"
                    className="text-stone-500 group-hover/item:text-red-600 text-sm transition-colors leading-relaxed flex items-center gap-1.5 hover:underline"
                  >
                    <span>{item.title}</span>
                    <ExternalLink className="size-3.5 shrink-0 opacity-40 group-hover/item:opacity-100" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Box 4: AI */}
          <div className="relative overflow-hidden rounded-xl border border-red-800/15 bg-[#FAF0DC]/60 backdrop-blur-sm p-6 hover:border-red-600/30 transition duration-300 group hover:shadow-[0_0_20px_rgba(185,28,28,0.04)] md:col-span-2">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(280px_160px_at_10%_0%,rgba(185,28,28,0.02),transparent_60%)]" />
            <h3 className="text-lg font-bold text-amber-700 flex items-center gap-2 mb-4 border-b border-stone-300 pb-2">
              <Brain className="size-5 text-red-700" /> Trí tuệ nhân tạo & Đạo đức học thuật
            </h3>

            <div className="space-y-4 text-sm">
              <div className="bg-white/60 border border-stone-300/60 p-4 rounded-lg">
                <h4 className="text-stone-700 font-semibold mb-2">Nguyên tắc ứng dụng AI:</h4>
                <ul className="space-y-1.5 text-stone-500 leading-relaxed list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-red-700/60 font-bold shrink-0 mt-0.5">•</span>
                    <span>Chỉ khai thác AI làm công cụ trợ giúp xử lý dữ liệu, không thay thế tư duy phản biện của nhóm.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-700/60 font-bold shrink-0 mt-0.5">•</span>
                    <span>Tất cả dữ kiện lịch sử triết học đều được kiểm định bằng giáo trình MLN111 và tác phẩm gốc Marx-Engels-Lenin.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-stone-700 font-semibold">Nhật ký sử dụng AI:</h4>
                <div className="space-y-2 pl-3">
                  {aiUsages.map((text, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-stone-500 text-sm">
                      <span className="text-red-700 font-bold shrink-0 mt-1">•</span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
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
