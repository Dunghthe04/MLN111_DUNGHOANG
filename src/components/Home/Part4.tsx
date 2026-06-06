// Part4.tsx — Lenin phát triển triết học Mác (1870-1924)
import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { TypingAnimation } from "../magicui/Text Animations/TypingAnimation";
import HallGallery from "./HallGallery";

const galleryItems = [
  { src: "/imgs/real/hall-4-1.jpg", alt: "Hall 4", caption: "Lenin phát triển triết học Mác" },
  { src: "/imgs/lenin-portrait.jpg", alt: "Lenin", caption: "V.I. Lenin (1870–1924)" },
  { src: "/imgs/halls/hall-4-1.svg", alt: "Minh họa 1", caption: "Bảo vệ chủ nghĩa duy vật biện chứng" },
  { src: "/imgs/halls/hall-4-2.svg", alt: "Minh họa 2", caption: "Bút ký triết học về phép biện chứng" },
  { src: "/imgs/halls/hall-4-3.svg", alt: "Minh họa 3", caption: "Cách mạng Tháng Mười 1917" },
];

function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delayMs = 0,
  once = true,
  offset = 0.15,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delayMs?: number;
  once?: boolean;
  offset?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delayMs > 0) {
              const id = setTimeout(() => setVisible(true), delayMs);
              if (!once) return () => clearTimeout(id);
            } else {
              setVisible(true);
            }
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: offset }
    );

    io.observe(element);
    return () => io.disconnect();
  }, [delayMs, offset, once]);

  const base = "opacity-0 translate-y-6";
  const active = "opacity-100 translate-y-0";

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? active : base
      } ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}

const leninWorks = [
  {
    year: "1894",
    title: "Ai là những người bạn dân?",
    desc: "Phê phán phái dân túy, bảo vệ và phát triển chủ nghĩa Mác trong điều kiện nước Nga.",
    color: "border-red-500/40",
    badge: "bg-red-600",
  },
  {
    year: "1902",
    title: "Làm gì?",
    desc: "Lý luận về Đảng kiểu mới của giai cấp vô sản — đội tiền phong tổ chức, kỷ luật, lý luận.",
    color: "border-amber-500/40",
    badge: "bg-amber-600",
  },
  {
    year: "1908",
    title: "Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán",
    desc: "Bảo vệ chủ nghĩa duy vật biện chứng trước sự tấn công của chủ nghĩa duy tâm và thực chứng.",
    color: "border-red-600/40",
    badge: "bg-red-700",
  },
  {
    year: "1914-1916",
    title: "Bút ký triết học (Về phép biện chứng)",
    desc: "Phát triển sâu sắc phép biện chứng duy vật; câu nổi tiếng: 'Không thể hoàn toàn hiểu được Tư bản... nếu không nghiên cứu toàn bộ Lô-gíc học của Hegel'.",
    color: "border-stone-500/40",
    badge: "bg-stone-600",
  },
  {
    year: "1916",
    title: "Chủ nghĩa đế quốc, giai đoạn tột cùng của CNTB",
    desc: "Phân tích bản chất của chủ nghĩa đế quốc — 'giai đoạn tột cùng và đang hấp hối' của chủ nghĩa tư bản.",
    color: "border-amber-700/40",
    badge: "bg-amber-700",
  },
  {
    year: "1917",
    title: "Nhà nước và Cách mạng",
    desc: "Học thuyết về nhà nước vô sản và sự tiêu vong của nhà nước trong CNCS. Nền tảng lý luận cho Cách mạng Tháng Mười.",
    color: "border-red-700/40",
    badge: "bg-red-800",
  },
];

export default function Part4() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[#FDF6E3] to-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-8 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: 'url("/imgs/lenin-portrait.jpg")' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80 pointer-events-none" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <Reveal className="text-center mb-10">
          <h1 className="flex justify-center items-center relative uppercase text-red-700 font-heading text-3xl md:text-4xl mb-4 min-h-[100px] z-10 drop-shadow-[0_0_8px_rgba(185,28,28,0.2)]">
            <TypingAnimation startOnView={true} duration={50} className="text-red-700 font-heading text-2xl md:text-3xl">
              Lenin phát triển triết học Mác
            </TypingAnimation>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto mb-6 scale-in" />
          <div className="mt-2 inline-block px-6 py-2.5 bg-red-600/5 backdrop-blur-lg rounded-2xl border border-red-600/30 shadow-2xl">
            <p className="text-lg text-red-600 font-medium font-heading">
              Vladimir Ilyich Lenin (1870–1924)
            </p>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="rounded-2xl overflow-hidden border border-red-800/15 shadow-2xl">
                <img
                  src="/imgs/real/hall-4-1.jpg"
                  alt="Lenin và triết học Mác"
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/imgs/lenin-portrait.jpg";
                  }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-red-800/15 shadow-xl">
                <img
                  src="/imgs/lenin-portrait.jpg"
                  alt="Chân dung Lenin"
                  className="w-full h-64 object-cover object-top"
                />
              </div>
            </div>
          </Reveal>

          {/* Context section */}
          <Reveal className="gold-glow-panel rounded-2xl p-6 mb-8 border border-red-800/15 bg-white/80 shadow-2xl backdrop-blur-md">
            <h2 className="text-xl font-bold text-red-700 mb-4 font-heading flex items-center gap-2">
              <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              Bối cảnh Lenin phát triển triết học Mác
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-stone-600">
              <div className="bg-red-50 border border-red-200/60 rounded-xl p-4">
                <div className="font-bold text-red-700 mb-2">🏭 Thời đại đế quốc</div>
                <p>CNTB chuyển sang giai đoạn đế quốc chủ nghĩa — độc quyền, bành trướng thuộc địa, chiến tranh thế giới.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-4">
                <div className="font-bold text-amber-700 mb-2">⚡ Khủng hoảng trong triết học</div>
                <p>Nhiều trào lưu triết học tấn công chủ nghĩa duy vật: thực chứng luận, chủ nghĩa Kant mới, chủ nghĩa Mach...</p>
              </div>
              <div className="bg-stone-50 border border-stone-200/60 rounded-xl p-4">
                <div className="font-bold text-stone-700 mb-2">🔥 Phong trào CM phát triển</div>
                <p>Giai cấp vô sản Nga trưởng thành, tình thế cách mạng chín muồi, đòi hỏi lý luận cách mạng tiên tiến.</p>
              </div>
            </div>
          </Reveal>

          {/* Đóng góp chính */}
          <Reveal className="mb-8">
            <h2 className="text-xl font-bold text-stone-800 mb-6 font-heading flex items-center gap-2">
              <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              Những đóng góp chính của Lenin
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  icon: "🛡️",
                  title: "Bảo vệ chủ nghĩa duy vật biện chứng",
                  content: "Đấu tranh kiên quyết chống lại mọi biểu hiện của chủ nghĩa duy tâm, thực chứng luận, chủ nghĩa duy tâm phê phán trong triết học. Tác phẩm 'Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán' (1908) là vũ khí sắc bén.",
                },
                {
                  icon: "📖",
                  title: "Phát triển phép biện chứng duy vật",
                  content: "Qua 'Bút ký triết học' (1914-1916), Lenin nghiên cứu sâu phép biện chứng của Hegel, phát triển lý luận về mâu thuẫn, phủ định biện chứng, nhảy vọt về chất.",
                },
                {
                  icon: "🌍",
                  title: "Lý luận về thời đại đế quốc",
                  content: "Phát triển học thuyết Mác về CNTB thành lý luận về chủ nghĩa đế quốc. Rút ra kết luận: Cách mạng XHCN có thể thắng lợi ở một nước (nước mắt xích yếu nhất trong hệ thống đế quốc).",
                },
                {
                  icon: "🏛️",
                  title: "Lý luận về nhà nước & cách mạng",
                  content: "'Nhà nước và Cách mạng' (1917) phát triển học thuyết Mác về nhà nước, vai trò của chuyên chính vô sản, giai đoạn quá độ lên CNCS.",
                },
              ].map((item, i) => (
                <Reveal key={i} delayMs={i * 80} className="gold-glow-panel rounded-2xl p-5 border border-red-800/15 bg-white/80 shadow-md">
                  <div className="flex gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-stone-800 mb-2 font-heading">{item.title}</h3>
                      <p className="text-sm text-stone-600 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* Toggle works */}
          <div className="text-center mb-8">
            <button
              onClick={() => setShowDetails((v) => !v)}
              className="inline-block px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              {showDetails ? "Thu gọn tác phẩm" : "📚 Xem các tác phẩm chính của Lenin"}
            </button>
          </div>

          {/* Lenin works timeline */}
          {showDetails && (
            <Reveal className="gold-glow-panel rounded-2xl p-6 md:p-8 border border-red-800/15 bg-white/85 shadow-2xl backdrop-blur-md mb-8">
              <h3 className="text-xl font-bold text-red-700 mb-8 text-center font-heading">
                Các tác phẩm triết học tiêu biểu của Lenin
              </h3>

              <div className="relative">
                <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 to-red-500 rounded-full opacity-35" />
                <div className="space-y-6">
                  {leninWorks.map((work, index) => (
                    <Reveal key={index} className="relative flex items-start" delayMs={index * 60}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 text-white text-xs font-bold shadow-lg ${work.badge} shrink-0`}>
                        {work.year.slice(0, 4)}
                      </div>
                      <div className={`ml-4 md:ml-6 bg-white/80 backdrop-blur-sm rounded-xl p-4 flex-1 border ${work.color} hover:border-red-600/30 transition-all duration-300`}>
                        <h4 className="text-base font-bold text-stone-800 font-heading mb-1">{work.title} <span className="text-xs font-normal text-stone-400">({work.year})</span></h4>
                        <p className="text-sm text-stone-500 leading-relaxed">{work.desc}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          <Reveal className="mb-8">
            <HallGallery items={galleryItems} title="Triển lãm Hall 4" />
          </Reveal>

          {/* Cách mạng Tháng Mười */}
          {showDetails && (
            <Reveal className="crimson-glow-panel rounded-2xl p-8 md:p-10 border border-red-900/30 bg-white/85 shadow-2xl backdrop-blur-md">
              <div className="text-center">
                <div className="text-4xl mb-4">🔴</div>
                <h2 className="text-2xl font-bold text-stone-800 mb-4 font-heading">
                  Cách mạng Tháng Mười Nga (1917)
                </h2>
                <div className="max-w-3xl mx-auto space-y-4 text-base text-stone-600 leading-relaxed">
                  <p>
                    Dưới sự lãnh đạo của Lenin, giai cấp công nhân và nông dân Nga lật đổ chế độ Nga hoàng và chính phủ tư sản, thành lập Nhà nước Xô viết đầu tiên trên thế giới (7/11/1917).
                  </p>
                  <p>
                    Cách mạng Tháng Mười là <strong>minh chứng vĩ đại nhất</strong> cho sức sống của triết học Mác-Lênin trong thực tiễn. Nó xác nhận rằng triết học Mác-Lênin không chỉ là lý luận giải thích thế giới mà là <strong>vũ khí cải tạo thế giới</strong>.
                  </p>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .scale-in { animation: scaleIn 0.8s ease-out forwards; transform-origin: left center; }
      `}</style>
    </div>
  );
}
