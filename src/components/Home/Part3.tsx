// Part3.tsx — Giai đoạn Marx-Engels (1818-1895)
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TypingAnimation } from "../magicui/Text Animations/TypingAnimation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ExhibitImage from "./ExhibitImage";
import HallLayout from "./HallLayout";
import RevealOnScroll from "./RevealOnScroll";

const timeline = [
  {
    year: "1818",
    image: "/imgs/marx-portrait.jpg",
    imageAlt: "Karl Marx tuổi trẻ",
    placeholderLabel: "Chèn ảnh Karl Marx",
    period: "Sinh ra & Tuổi thơ",
    title: "Karl Marx chào đời",
    content:
      "Karl Marx sinh ngày 5/5/1818 tại Trier, Đức. Cha là luật sư, gia đình có học thức. Từ nhỏ Marx đã bộc lộ tư chất thông minh, yêu thích triết học và lịch sử.",
    detail:
      "Lớn lên trong bầu không khí ảnh hưởng của triết học Khai sáng, Marx được tiếp xúc với các tư tưởng nhân đạo và duy lý từ rất sớm.",
  },
  {
    year: "1841",
    image: "/imgs/real/hall-3-1.jpg",
    imageAlt: "Luận án tiến sĩ",
    placeholderLabel: "Chèn ảnh luận án tiến sĩ",
    period: "Hình thành tư tưởng",
    title: "Luận án tiến sĩ về Democritus & Epicurus",
    content:
      "Marx bảo vệ luận án tiến sĩ tại Đại học Jena về sự khác biệt giữa triết học tự nhiên của Democritus và Epicurus — bước đầu hướng đến chủ nghĩa duy vật.",
    detail:
      "Qua nghiên cứu hai nhà triết học cổ đại Hy Lạp, Marx bắt đầu phê phán chủ nghĩa duy tâm và tìm kiếm cơ sở vật chất cho thế giới quan.",
  },
  {
    year: "1844",
    image: "/imgs/engels-portrait.jpg",
    imageAlt: "Marx gặp Engels",
    placeholderLabel: "Chèn ảnh Friedrich Engels",
    period: "Bước ngoặt tư tưởng",
    title: "Bản thảo Kinh tế-Triết học 1844",
    content:
      "Marx phác thảo lần đầu học thuyết về sự tha hóa lao động. Engels gặp Marx ở Paris — bắt đầu tình bạn và hợp tác lý luận suốt đời.",
    detail:
      "Engels cung cấp tư liệu thực tiễn từ nước Anh công nghiệp, bổ sung cho lý luận triết học của Marx.",
  },
  {
    year: "1845",
    image: "/imgs/halls/hall-3-2.jpg",
    imageAlt: "Luận cương về Feuerbach",
    placeholderLabel: "Chèn ảnh Luận cương Feuerbach",
    period: "Duy vật lịch sử",
    title: "Luận cương về Feuerbach",
    content:
      "Marx viết 11 Luận cương về Feuerbach — câu nổi tiếng: 'Các nhà triết học chỉ giải thích thế giới theo cách khác nhau; vấn đề là phải cải tạo nó.'",
    detail:
      "Cùng Engels, Marx viết 'Hệ tư tưởng Đức' (1845–1846) — lần đầu trình bày có hệ thống chủ nghĩa duy vật lịch sử.",
  },
  {
    year: "1848",
    image: "/imgs/communist-manifesto.jpg",
    imageAlt: "Tuyên ngôn Đảng Cộng sản",
    placeholderLabel: "Chèn ảnh Tuyên ngôn Cộng sản",
    period: "Tuyên ngôn lịch sử",
    title: "Tuyên ngôn Đảng Cộng sản",
    content:
      "Marx và Engels công bố Tuyên ngôn — văn kiện cương lĩnh đầu tiên của phong trào cộng sản. Mở đầu: 'Một bóng ma đang ám ảnh châu Âu — bóng ma chủ nghĩa cộng sản.'",
    detail:
      "Tuyên ngôn kết hợp khoa học giữa duy vật lịch sử, đấu tranh giai cấp và sứ mệnh lịch sử của giai cấp công nhân.",
  },
  {
    year: "1867",
    image: "/imgs/halls/hall-3-3.jpg",
    imageAlt: "Tư bản",
    placeholderLabel: "Chèn ảnh bìa Tư bản",
    period: "Đỉnh cao tư tưởng",
    title: "Tư bản (Das Kapital) — Tập 1",
    content:
      "Marx xuất bản Tập 1 'Tư bản' — kiệt tác kinh tế-triết học, phân tích bản chất bóc lột CNTB qua học thuyết giá trị thặng dư.",
    detail:
      "Engels hoàn thiện Tập 2 (1885) và Tập 3 (1894) sau khi Marx mất.",
  },
  {
    year: "1883",
    image: "/imgs/real/hall-3-1.jpg",
    imageAlt: "Di sản Marx-Engels",
    placeholderLabel: "Chèn ảnh di sản Marx-Engels",
    period: "Di sản bất hủ",
    title: "Marx qua đời — Engels tiếp tục",
    content:
      "Marx qua đời 14/3/1883 tại London. Engels tiếp tục phổ biến và bảo vệ chủ nghĩa Mác cho đến khi mất năm 1895.",
    detail:
      "Di sản hơn 50 tập tác phẩm, đặt nền móng cho phong trào cộng sản quốc tế và ảnh hưởng sâu sắc thế kỷ XX.",
  },
];

export default function Part3() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goTo = (i: number) => {
    setDirection(i > activeIdx ? "right" : "left");
    setActiveIdx(i);
  };

  const handlePrev = () => activeIdx > 0 && goTo(activeIdx - 1);
  const handleNext = () => activeIdx < timeline.length - 1 && goTo(activeIdx + 1);

  const item = timeline[activeIdx];
  const progress = ((activeIdx + 1) / timeline.length) * 100;

  return (
    <HallLayout hallNumber={3} bgImage="/imgs/real/hall-3-1.jpg">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
        <div className="text-center mb-8">
          <h3 className="uppercase text-red-700 font-heading text-3xl md:text-4xl drop-shadow-[0_0_8px_rgba(185,28,28,0.2)]">
            <TypingAnimation startOnView duration={50} className="text-red-700 font-heading text-3xl md:text-4xl">
              Giai đoạn Marx & Engels
            </TypingAnimation>
          </h3>
          <p className="mt-2 text-sm text-stone-400">1818 – 1895 · Hành trình hình thành triết học Mác</p>
        </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={80}>
        {/* Timeline bar */}
        <div className="relative mb-8 px-2">
          <div className="absolute top-3 left-4 right-4 h-0.5 bg-red-200 rounded-full" />
          <div
            className="absolute top-3 left-4 h-0.5 bg-red-600 rounded-full transition-all duration-500"
            style={{ width: `calc(${(activeIdx / (timeline.length - 1)) * 100}% - 2rem)` }}
          />
          <div className="relative flex justify-between">
            {timeline.map((t, i) => (
              <button
                key={t.year}
                type="button"
                onClick={() => goTo(i)}
                className="flex flex-col items-center gap-1.5 group"
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    i === activeIdx
                      ? "bg-red-600 border-red-600 scale-110 shadow-md shadow-red-200"
                      : i < activeIdx
                        ? "bg-red-100 border-red-400"
                        : "bg-white border-red-200 group-hover:border-red-400"
                  }`}
                >
                  {i < activeIdx && <span className="text-[8px] text-red-600 font-bold">✓</span>}
                </div>
                <span
                  className={`text-[10px] font-bold transition-colors hidden sm:block ${
                    i === activeIdx ? "text-red-600" : "text-stone-400 group-hover:text-stone-600"
                  }`}
                >
                  {t.year}
                </span>
              </button>
            ))}
          </div>
        </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
        {/* Main card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="gold-glow-panel bg-white/90 border border-red-800/15 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {/* Image */}
              <div className="md:col-span-2 bg-stone-50 p-4 md:p-5 flex flex-col">
                <ExhibitImage
                  src={item.image ?? "/imgs/real/hall-3-1.jpg"}
                  alt={item.imageAlt ?? item.title}
                  placeholderLabel={item.placeholderLabel}
                  fit="contain"
                  aspectRatio="square"
                />
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-3xl font-bold font-title text-red-700">{item.year}</span>
                  <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-stone-800 mb-4 font-heading leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-4">
                    {item.content}
                  </p>
                  <div className="bg-red-50/80 border border-red-100 rounded-xl p-4 text-sm text-stone-600 leading-relaxed">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                      Chi tiết thêm
                    </span>
                    {item.detail}
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-6 pt-4 border-t border-stone-100">
                  <div className="flex justify-between text-xs text-stone-400 mb-1.5">
                    <span>Mốc {activeIdx + 1} / {timeline.length}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-red-100 rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-red-500 to-amber-500 h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        </RevealOnScroll>

        {/* Navigation */}
        <RevealOnScroll delayMs={160}>
        <div className="flex justify-between items-center mt-6">
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeIdx === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border border-red-200 text-red-700 hover:bg-red-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-4 h-4" /> Trước
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={activeIdx === timeline.length - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-red-700 text-white hover:bg-red-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-md"
          >
            Tiếp <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        </RevealOnScroll>
      </div>
    </HallLayout>
  );
}
