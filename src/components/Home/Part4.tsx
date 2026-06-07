// Part4.tsx — Lenin phát triển triết học Mác (1870-1924)
import { useState } from "react";
import { TypingAnimation } from "../magicui/Text Animations/TypingAnimation";
import ExhibitImage from "./ExhibitImage";
import HallLayout from "./HallLayout";
import RevealOnScroll, { hallCardClass } from "./RevealOnScroll";

const contextItems = [
  {
    title: "Thời đại đế quốc",
    desc: "CNTB chuyển sang giai đoạn đế quốc — độc quyền, bành trướng thuộc địa, chiến tranh thế giới.",
  },
  {
    title: "Khủng hoảng triết học",
    desc: "Nhiều trào lưu tấn công chủ nghĩa duy vật: thực chứng luận, chủ nghĩa Kant mới, chủ nghĩa Mach...",
  },
  {
    title: "Phong trào CM phát triển",
    desc: "Giai cấp vô sản Nga trưởng thành, tình thế cách mạng chín muồi, đòi hỏi lý luận tiên tiến.",
  },
];

const contributions = [
  {
    title: "Bảo vệ chủ nghĩa duy vật biện chứng",
    content:
      "Đấu tranh chống chủ nghĩa duy tâm, thực chứng luận trong triết học. 'Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán' (1908) là vũ khí sắc bén.",
  },
  {
    title: "Phát triển phép biện chứng duy vật",
    content:
      "Qua 'Bút ký triết học' (1914–1916), Lenin nghiên cứu sâu phép biện chứng Hegel, phát triển lý luận về mâu thuẫn, phủ định biện chứng, nhảy vọt về chất.",
  },
  {
    title: "Lý luận về thời đại đế quốc",
    content:
      "Phát triển học thuyết Mác về CNTB thành lý luận đế quốc. Kết luận: CM XHCN có thể thắng ở một nước — mắt xích yếu nhất hệ thống đế quốc.",
  },
  {
    title: "Lý luận về nhà nước & cách mạng",
    content:
      "'Nhà nước và Cách mạng' (1917) phát triển học thuyết Mác về nhà nước, vai trò chuyên chính vô sản, giai đoạn quá độ lên CNCS.",
  },
];

const leninWorks = [
  { year: "1894", title: "Ai là những người bạn dân?", desc: "Phê phán phái dân túy, bảo vệ chủ nghĩa Mác trong điều kiện nước Nga." },
  { year: "1902", title: "Làm gì?", desc: "Lý luận về Đảng kiểu mới — đội tiền phong tổ chức, kỷ luật, lý luận." },
  { year: "1908", title: "CN duy vật và CN kinh nghiệm phê phán", desc: "Bảo vệ duy vật biện chứng trước chủ nghĩa duy tâm và thực chứng." },
  { year: "1914–16", title: "Bút ký triết học", desc: "Phát triển sâu phép biện chứng duy vật; nghiên cứu Lô-gíc học Hegel." },
  { year: "1916", title: "Chủ nghĩa đế quốc", desc: "Phân tích CNTB ở giai đoạn tột cùng và đang hấp hối." },
  { year: "1917", title: "Nhà nước và Cách mạng", desc: "Học thuyết nhà nước vô sản — nền tảng lý luận Cách mạng Tháng Mười." },
];

export default function Part4() {
  const [showWorks, setShowWorks] = useState(false);

  return (
    <HallLayout hallNumber={4} bgImage="/imgs/real/hall-4-1.jpg">
      <div className="max-w-5xl mx-auto space-y-10">
        <RevealOnScroll>
        <div className="text-center">
          <h3 className="uppercase text-red-700 font-heading text-3xl md:text-4xl drop-shadow-[0_0_8px_rgba(185,28,28,0.2)]">
            <TypingAnimation startOnView duration={50} className="text-red-700 font-heading text-3xl md:text-4xl">
              Lenin phát triển triết học Mác
            </TypingAnimation>
          </h3>
          <p className="mt-2 text-sm text-stone-500">Vladimir Ilyich Lenin (1870–1924)</p>
        </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={80}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <ExhibitImage
            src="/imgs/real/hall-4-1.jpg"
            alt="Lenin và triết học Mác"
            placeholderLabel="Chèn ảnh Lenin & triết học Mác"
            fit="contain"
            aspectRatio="wide"
          />
          <div className={`${hallCardClass} p-6 shadow-lg`}>
            <p className="text-stone-600 text-sm leading-relaxed">
              Trong bối cảnh CNTB chuyển sang <strong>giai đoạn đế quốc</strong>, Lenin không chỉ bảo vệ mà còn{" "}
              <strong>phát triển sáng tạo</strong> triết học Mác, đưa lý luận vào thực tiễn cách mạng Nga và thế giới.
            </p>
            <div className="mt-4 pt-4 border-t border-stone-100 grid grid-cols-2 gap-3 text-center">
              <div>
                <div className="text-2xl font-bold text-red-700 font-title">1870</div>
                <div className="text-[10px] text-stone-400 uppercase tracking-wider">Sinh</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-700 font-title">1924</div>
                <div className="text-[10px] text-stone-400 uppercase tracking-wider">Mất</div>
              </div>
            </div>
          </div>
        </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={100}>
        <section>
          <h2 className="text-lg font-bold text-stone-800 mb-4 font-heading flex items-center gap-2">
            <span className="w-7 h-7 bg-red-700 text-white rounded-lg flex items-center justify-center text-xs font-bold">1</span>
            Bối cảnh lịch sử
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contextItems.map((item, i) => (
              <RevealOnScroll key={i} delayMs={i * 60} className={`${hallCardClass} p-4 shadow-sm`}>
                <h3 className="font-bold text-red-700 text-sm mb-2 font-heading group-hover:text-red-600 transition-colors">{item.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
              </RevealOnScroll>
            ))}
          </div>
        </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
        <section>
          <h2 className="text-lg font-bold text-stone-800 mb-4 font-heading flex items-center gap-2">
            <span className="w-7 h-7 bg-red-700 text-white rounded-lg flex items-center justify-center text-xs font-bold">2</span>
            Những đóng góp chính
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contributions.map((item, i) => (
              <RevealOnScroll key={i} delayMs={i * 70} className={`${hallCardClass} p-5 shadow-sm`}>
                <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-red-600/10 blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="font-bold text-stone-800 text-sm mb-2 font-heading group-hover:text-red-600 transition-colors">{item.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{item.content}</p>
              </RevealOnScroll>
            ))}
          </div>
        </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={140}>
        <section>
          <button
            type="button"
            onClick={() => setShowWorks((v) => !v)}
            className="w-full flex items-center justify-between px-5 py-3 rounded-xl bg-red-700 text-white font-semibold text-sm hover:bg-red-600 transition-colors shadow-md"
          >
            <span>📚 Các tác phẩm triết học tiêu biểu</span>
            <span className="text-white/70">{showWorks ? "▲" : "▼"}</span>
          </button>

          {showWorks && (
            <div className="mt-4 space-y-3 pl-2">
              {leninWorks.map((work, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-14 shrink-0 text-center">
                    <span className="inline-block bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-lg">
                      {work.year}
                    </span>
                  </div>
                  <div className="flex-1 bg-white/90 border border-stone-200 rounded-xl p-3 shadow-sm">
                    <h4 className="font-bold text-stone-800 text-sm font-heading">{work.title}</h4>
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed">{work.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={160}>
        <section className="rounded-2xl border border-red-800/20 bg-gradient-to-br from-red-800 to-red-950 p-6 md:p-8 text-center shadow-xl hover:shadow-[0_12px_40px_rgba(185,28,28,0.25)] transition-shadow duration-300">
          <h2 className="text-xl font-bold text-white mb-3 font-heading">
            Cách mạng Tháng Mười Nga (1917)
          </h2>
          <p className="text-white/85 text-sm leading-relaxed max-w-2xl mx-auto">
            Dưới sự lãnh đạo Lenin, giai cấp công nhân và nông dân Nga lật đổ chế độ Nga hoàng,
            thành lập Nhà nước Xô viết đầu tiên (7/11/1917) —{" "}
            <strong>minh chứng vĩ đại</strong> cho sức sống triết học Mác-Lênin trong thực tiễn.
          </p>
        </section>
        </RevealOnScroll>
      </div>
    </HallLayout>
  );
}
