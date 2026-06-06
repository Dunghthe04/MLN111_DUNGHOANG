// Part3.tsx — Giai đoạn Marx-Engels (1818-1895): Quá trình hình thành triết học Mác
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TypingAnimation } from "../magicui/Text Animations/TypingAnimation";
import { ChevronLeft, ChevronRight, BookOpen, Lightbulb, Users, Globe } from "lucide-react";
import HallGallery from "./HallGallery";

const galleryItems = [
  { src: "/imgs/real/hall-3-1.jpg", alt: "Hall 3", caption: "Giai đoạn Marx & Engels" },
  { src: "/imgs/marx-portrai.jpg", alt: "Karl Marx", caption: "Karl Marx (1818–1883)" },
  { src: "/imgs/engels-portrait.webp", alt: "Friedrich Engels", caption: "Friedrich Engels (1820–1895)" },
  { src: "/imgs/communist-manifesto.jpg", alt: "Tuyên ngôn", caption: "Tuyên ngôn Đảng Cộng sản (1848)" },
  { src: "/imgs/halls/hall-3-1.svg", alt: "Minh họa 1", caption: "Hành trình hình thành tư tưởng" },
  { src: "/imgs/halls/hall-3-2.svg", alt: "Minh họa 2", caption: "Bản thảo Kinh tế-Triết học 1844" },
  { src: "/imgs/halls/hall-3-3.svg", alt: "Minh họa 3", caption: "Tư bản — kiệt tác kinh tế-triết học" },
];

const timeline = [
  {
    year: "1818",
    image: "/imgs/marx-portrai.jpg",
    imageAlt: "Karl Marx tuổi trẻ",
    period: "Sinh ra & Tuổi thơ",
    icon: <Users className="w-5 h-5" />,
    color: "bg-amber-600",
    title: "Karl Marx chào đời",
    content: "Karl Marx sinh ngày 5/5/1818 tại Trier, Đức. Cha là luật sư, gia đình có học thức. Từ nhỏ Marx đã bộc lộ tư chất thông minh, yêu thích triết học và lịch sử.",
    detail: "Lớn lên trong bầu không khí ảnh hưởng của triết học Khai sáng, Marx được tiếp xúc với các tư tưởng nhân đạo và duy lý từ rất sớm.",
  },
  {
    year: "1841",
    image: "/imgs/halls/hall-3-1.svg",
    imageAlt: "Luận án tiến sĩ",
    period: "Thời kỳ hình thành tư tưởng",
    icon: <BookOpen className="w-5 h-5" />,
    color: "bg-red-600",
    title: "Luận án tiến sĩ về Democritus & Epicurus",
    content: "Marx bảo vệ luận án tiến sĩ tại Đại học Jena về 'Sự khác biệt giữa triết học tự nhiên của Democritus và Epicurus'. Đây là bước đầu tiên hướng đến chủ nghĩa duy vật.",
    detail: "Qua nghiên cứu hai nhà triết học cổ đại Hy Lạp, Marx bắt đầu phê phán chủ nghĩa duy tâm và tìm kiếm cơ sở vật chất cho thế giới quan.",
  },
  {
    year: "1844",
    image: "/imgs/engels-portrait.webp",
    imageAlt: "Marx gặp Engels",
    period: "Bước ngoặt tư tưởng",
    icon: <Lightbulb className="w-5 h-5" />,
    color: "bg-red-700",
    title: "Bản thảo Kinh tế-Triết học 1844",
    content: "Marx viết 'Bản thảo Kinh tế-Triết học' (mãi đến 1932 mới được xuất bản). Đây là nơi ông phác thảo lần đầu học thuyết về sự tha hóa lao động và con người toàn diện.",
    detail: "Friedrich Engels gặp Marx ở Paris năm 1844 — bắt đầu tình bạn và hợp tác lý luận kéo dài suốt đời. Engels cung cấp tư liệu thực tiễn từ nước Anh công nghiệp.",
  },
  {
    year: "1845",
    period: "Cơ sở của chủ nghĩa duy vật lịch sử",
    icon: <BookOpen className="w-5 h-5" />,
    color: "bg-stone-700",
    title: "Luận cương về Feuerbach",
    content: "Marx viết '11 Luận cương về Feuerbach' — trong đó câu nổi tiếng: 'Các nhà triết học chỉ giải thích thế giới theo cách khác nhau; vấn đề là phải cải tạo nó.'",
    detail: "Cùng với Engels, Marx viết 'Hệ tư tưởng Đức' (1845-1846) — lần đầu tiên trình bày có hệ thống quan niệm duy vật về lịch sử (chủ nghĩa duy vật lịch sử).",
  },
  {
    year: "1848",
    image: "/imgs/communist-manifesto.jpg",
    imageAlt: "Tuyên ngôn Đảng Cộng sản",
    period: "Tuyên ngôn lịch sử",
    icon: <Globe className="w-5 h-5" />,
    color: "bg-red-800",
    title: "Tuyên ngôn Đảng Cộng sản",
    content: "Marx và Engels công bố 'Tuyên ngôn của Đảng Cộng sản' — văn kiện cương lĩnh đầu tiên của phong trào cộng sản. Mở đầu bằng câu: 'Một bóng ma đang ám ảnh châu Âu — bóng ma chủ nghĩa cộng sản.'",
    detail: "Tuyên ngôn lần đầu kết hợp một cách khoa học giữa chủ nghĩa duy vật lịch sử, học thuyết đấu tranh giai cấp và lý luận về sứ mệnh lịch sử của giai cấp công nhân.",
  },
  {
    year: "1867",
    image: "/imgs/halls/hall-3-3.svg",
    imageAlt: "Tư bản",
    period: "Đỉnh cao tư tưởng",
    icon: <BookOpen className="w-5 h-5" />,
    color: "bg-amber-700",
    title: "Tư bản (Das Kapital) — Tập 1",
    content: "Marx xuất bản Tập 1 bộ 'Tư bản' — kiệt tác kinh tế-triết học vĩ đại nhất của ông. Phân tích bản chất bóc lột của chủ nghĩa tư bản qua học thuyết giá trị thặng dư.",
    detail: "Engels hoàn thiện Tập 2 (1885) và Tập 3 (1894) sau khi Marx mất. Bộ 'Tư bản' được coi là 'Kinh Thánh' của giai cấp vô sản thế giới.",
  },
  {
    year: "1883",
    period: "Di sản bất hủ",
    icon: <Users className="w-5 h-5" />,
    color: "bg-stone-600",
    title: "Marx qua đời — Engels tiếp tục",
    content: "Karl Marx qua đời ngày 14/3/1883 tại London. Engels đọc điếu văn: 'Marx là nhà tư tưởng vĩ đại nhất trong những nhà tư tưởng hiện đại.' Engels tiếp tục phổ biến và bảo vệ chủ nghĩa Mác cho đến khi ông mất năm 1895.",
    detail: "Di sản của Marx và Engels bao gồm hơn 50 tập tác phẩm, đặt nền móng cho phong trào cộng sản quốc tế và ảnh hưởng sâu sắc đến lịch sử thế kỷ XX.",
  },
];

export default function Part3() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handlePrev = () => {
    if (activeIdx > 0) {
      setDirection("left");
      setActiveIdx((i) => i - 1);
    }
  };

  const handleNext = () => {
    if (activeIdx < timeline.length - 1) {
      setDirection("right");
      setActiveIdx((i) => i + 1);
    }
  };

  const item = timeline[activeIdx];

  return (
    <div className="w-full min-h-[90vh] bg-gradient-to-b from-[#FDF6E3] to-white p-6 md:p-12 flex flex-col items-center justify-start relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(185,28,28,0.05),transparent_60%)] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto z-10">
        <h3 className="uppercase text-red-700 font-heading text-3xl md:text-5xl mb-2 text-center drop-shadow-[0_0_8px_rgba(185,28,28,0.2)]">
          <TypingAnimation startOnView={true} duration={50} className="text-red-700 font-heading text-3xl md:text-4xl text-center">
            Giai đoạn Marx & Engels
          </TypingAnimation>
        </h3>
        <p className="text-center text-stone-400 text-sm mb-10 tracking-wide">1818 – 1895 · Nhấn mũi tên để xem từng mốc lịch sử</p>

        {/* Timeline dots */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {timeline.map((t, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > activeIdx ? "right" : "left"); setActiveIdx(i); }}
              className={`flex flex-col items-center gap-1 group cursor-pointer`}
            >
              <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${i === activeIdx ? "bg-red-600 border-red-600 scale-150" : "bg-white border-red-300 hover:border-red-500"}`} />
              <span className={`text-[10px] font-bold transition-colors ${i === activeIdx ? "text-red-600" : "text-stone-400 group-hover:text-stone-600"}`}>
                {t.year}
              </span>
            </button>
          ))}
        </div>

        {/* Main Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, x: direction === "right" ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === "right" ? -60 : 60 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Year badge + detail */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className={`${item.color} text-white rounded-2xl p-6 flex flex-col gap-2 shadow-xl`}>
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-sm font-semibold uppercase tracking-wider opacity-80">{item.period}</span>
                </div>
                <div className="text-5xl font-bold font-title">{item.year}</div>
                <div className="text-white/90 font-semibold text-lg leading-snug">{item.title}</div>
              </div>

              <div className="bg-white/80 border border-red-800/15 rounded-2xl p-5 text-sm text-stone-600 leading-relaxed shadow-md">
                <div className="text-xs font-bold text-red-700 uppercase tracking-wider mb-2">📝 Chi tiết thêm</div>
                {item.detail}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-8 gold-glow-panel rounded-2xl p-8 flex flex-col justify-between shadow-xl">
              <div>
                <div className="text-xs font-bold text-red-700/60 uppercase tracking-widest mb-3">Mốc lịch sử</div>
                {"image" in item && item.image && (
                  <div className="mb-6 rounded-xl overflow-hidden border border-red-800/15 shadow-md">
                    <img
                      src={item.image}
                      alt={item.imageAlt ?? item.title}
                      className="w-full h-48 md:h-56 object-cover"
                    />
                  </div>
                )}
                <h4 className="text-2xl md:text-3xl font-bold text-stone-800 mb-6 leading-snug">{item.title}</h4>
                <p className="text-stone-600 text-base leading-relaxed">{item.content}</p>
              </div>

              {/* Progress */}
              <div className="mt-8">
                <div className="flex justify-between text-xs text-stone-400 mb-2">
                  <span>Mốc {activeIdx + 1} / {timeline.length}</span>
                  <span>{Math.round(((activeIdx + 1) / timeline.length) * 100)}% hành trình</span>
                </div>
                <div className="w-full bg-red-100 rounded-full h-1.5">
                  <div
                    className="bg-gradient-to-r from-red-500 to-amber-500 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${((activeIdx + 1) / timeline.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10">
          <HallGallery items={galleryItems} title="Triển lãm Hall 3" />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handlePrev}
            disabled={activeIdx === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold border border-red-800/20 text-red-700 bg-red-600/5 hover:bg-red-600/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> Mốc trước
          </button>

          <div className="text-sm text-stone-400 font-medium">
            {activeIdx + 1} / {timeline.length}
          </div>

          <button
            onClick={handleNext}
            disabled={activeIdx === timeline.length - 1}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-500 hover:to-red-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-[0_0_15px_rgba(185,28,28,0.2)]"
          >
            Mốc tiếp <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
