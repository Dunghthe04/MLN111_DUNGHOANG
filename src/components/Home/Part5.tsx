// Part5.tsx — Đặc trưng và Vai trò của Triết học Mác-Lênin
import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { TypingAnimation } from "../magicui/Text Animations/TypingAnimation";
import { motion } from "motion/react";
import HallGallery from "./HallGallery";

const galleryItems = [
  { src: "/imgs/real/hall-5-1.jpg", alt: "Hall 5", caption: "Đặc trưng & vai trò TH Mác-Lênin" },
  { src: "/imgs/triethoc-1.svg", alt: "Tính khoa học", caption: "Thế giới quan duy vật biện chứng" },
  { src: "/imgs/triethoc-2.svg", alt: "Tính cách mạng", caption: "Cải tạo thế giới, không chỉ giải thích" },
  { src: "/imgs/triethoc-3.svg", alt: "Tính sáng tạo", caption: "Phát triển theo thực tiễn lịch sử" },
  { src: "/imgs/triethoc-4.svg", alt: "Tính đảng", caption: "Đứng về phía giai cấp vô sản" },
  { src: "/imgs/halls/hall-5-1.svg", alt: "Minh họa 1", caption: "Hai bộ phận cấu thành" },
  { src: "/imgs/halls/hall-5-2.svg", alt: "Minh họa 2", caption: "Vai trò kim chỉ nam" },
  { src: "/imgs/halls/hall-5-3.svg", alt: "Minh họa 3", caption: "Di sản tư tưởng vĩ đại" },
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
              setTimeout(() => setVisible(true), delayMs);
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

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}

const features = [
  {
    icon: "⚗️",
    image: "/imgs/triethoc-1.svg",
    title: "Tính khoa học",
    color: "from-blue-50 to-blue-100",
    borderColor: "border-blue-300/60",
    textColor: "text-blue-700",
    points: [
      "Phản ánh đúng đắn hiện thực khách quan",
      "Có cơ sở lý luận và thực tiễn vững chắc",
      "Được kiểm nghiệm qua lịch sử",
      "Mở ra phương pháp nhận thức khoa học",
    ],
  },
  {
    icon: "⚡",
    image: "/imgs/triethoc-2.svg",
    title: "Tính cách mạng",
    color: "from-red-50 to-red-100",
    borderColor: "border-red-300/60",
    textColor: "text-red-700",
    points: [
      "Không chỉ giải thích mà cải tạo thế giới",
      "Vũ khí lý luận của giai cấp vô sản",
      "Chỉ đường cho sự nghiệp giải phóng",
      "Phê phán toàn bộ chế độ tư bản",
    ],
  },
  {
    icon: "🌱",
    image: "/imgs/triethoc-3.svg",
    title: "Tính sáng tạo & mở",
    color: "from-emerald-50 to-emerald-100",
    borderColor: "border-emerald-300/60",
    textColor: "text-emerald-700",
    points: [
      "Không giáo điều, không cứng nhắc",
      "Phát triển theo thực tiễn lịch sử",
      "Tích hợp tri thức nhân loại",
      "Đặt ra vấn đề mới cho từng thời đại",
    ],
  },
  {
    icon: "🤝",
    image: "/imgs/triethoc-4.svg",
    title: "Tính đảng (Tính giai cấp)",
    color: "from-amber-50 to-amber-100",
    borderColor: "border-amber-300/60",
    textColor: "text-amber-700",
    points: [
      "Đứng về phía giai cấp vô sản và nhân dân lao động",
      "Phục vụ lợi ích của đa số",
      "Chống lại mọi hình thức áp bức, bóc lột",
      "Nhất quán về lập trường giai cấp",
    ],
  },
];

const roles = [
  {
    number: "01",
    title: "Thế giới quan duy vật biện chứng",
    desc: "Trang bị cho con người cái nhìn khoa học về thế giới: vật chất quyết định ý thức, thế giới luôn vận động và phát triển theo quy luật khách quan.",
    icon: "🌍",
    color: "bg-blue-600",
  },
  {
    number: "02",
    title: "Phương pháp luận khoa học & cách mạng",
    desc: "Phép biện chứng duy vật là phương pháp nhận thức và cải tạo thế giới — xem xét sự vật trong mối liên hệ, vận động và mâu thuẫn nội tại.",
    icon: "🔬",
    color: "bg-red-600",
  },
  {
    number: "03",
    title: "Nền tảng lý luận cho CNXH khoa học",
    desc: "Đặt nền móng lý luận cho sự nghiệp giải phóng giai cấp vô sản, xây dựng CNXH và mục tiêu cuối cùng là CNCS.",
    icon: "🏗️",
    color: "bg-amber-600",
  },
  {
    number: "04",
    title: "Kim chỉ nam cho phong trào CM thế giới",
    desc: "Là vũ khí tư tưởng của các Đảng Cộng sản và phong trào cách mạng trên toàn thế giới trong thế kỷ XX.",
    icon: "🧭",
    color: "bg-emerald-600",
  },
];

export default function Part5() {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[#FDF6E3] to-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(185,28,28,0.05),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <Reveal className="text-center mb-12">
          <h1 className="flex justify-center items-center relative uppercase text-red-700 font-heading text-3xl md:text-4xl mb-4 min-h-[100px] z-10 drop-shadow-[0_0_8px_rgba(185,28,28,0.2)]">
            <TypingAnimation startOnView={true} duration={50} className="text-red-700 font-heading text-2xl md:text-3xl">
              Đặc trưng & Vai trò của Triết học Mác-Lênin
            </TypingAnimation>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto mb-4" />
          <p className="text-stone-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Triết học Mác-Lênin là hệ thống triết học duy nhất kết hợp tính <strong>khoa học</strong> với tính <strong>cách mạng</strong>, phục vụ cho sự nghiệp giải phóng con người.
          </p>
        </Reveal>

        <div className="max-w-6xl mx-auto space-y-16">
          <Reveal className="mb-4">
            <div className="rounded-2xl overflow-hidden border border-red-800/15 shadow-2xl max-w-3xl mx-auto">
              <img
                src="/imgs/real/hall-5-1.jpg"
                alt="Triết học Mác-Lênin"
                className="w-full h-56 md:h-72 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/imgs/triethoc-1.svg";
                }}
              />
            </div>
          </Reveal>

          {/* I. Đặc trưng */}
          <div>
            <Reveal>
              <h2 className="text-2xl font-bold text-stone-800 mb-8 font-heading flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-xl flex items-center justify-center text-base font-bold shadow-md">I</span>
                Những đặc trưng cơ bản
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <Reveal key={i} delayMs={i * 100}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`bg-gradient-to-br ${f.color} border-2 ${f.borderColor} rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300`}
                  >
                    {"image" in f && f.image && (
                      <img
                        src={f.image}
                        alt={f.title}
                        className="w-full h-28 object-cover border-b border-white/50"
                      />
                    )}
                    <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{f.icon}</span>
                      <h3 className={`text-xl font-bold font-heading ${f.textColor}`}>{f.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {f.points.map((p, j) => (
                        <li key={j} className="flex items-start gap-2 text-stone-700 text-sm">
                          <span className={`${f.textColor} font-bold mt-0.5 shrink-0`}>▸</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <HallGallery items={galleryItems} title="Triển lãm Hall 5" />
          </Reveal>

          {/* II. Hai bộ phận cấu thành */}
          <div>
            <Reveal>
              <h2 className="text-2xl font-bold text-stone-800 mb-8 font-heading flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-xl flex items-center justify-center text-base font-bold shadow-md">II</span>
                Hai bộ phận cấu thành
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Reveal>
                <div className="gold-glow-panel rounded-2xl p-6 border border-red-800/15 bg-white/80 shadow-xl h-full">
                  <div className="text-4xl mb-3">🌐</div>
                  <h3 className="text-xl font-bold text-red-700 mb-3 font-heading">Chủ nghĩa Duy vật Biện chứng</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    <strong>Thế giới quan:</strong> Vật chất là cái có trước, ý thức là cái có sau. Thế giới vật chất tồn tại khách quan, không phụ thuộc vào ý thức con người.
                  </p>
                  <div className="bg-red-50 rounded-xl p-3 text-xs text-stone-600 border border-red-200/60">
                    <strong className="text-red-700">Nguyên lý cơ bản:</strong> Ba quy luật của phép biện chứng: Thống nhất và đấu tranh của các mặt đối lập · Lượng đổi chất đổi · Phủ định của phủ định
                  </div>
                </div>
              </Reveal>
              <Reveal delayMs={100}>
                <div className="gold-glow-panel rounded-2xl p-6 border border-red-800/15 bg-white/80 shadow-xl h-full">
                  <div className="text-4xl mb-3">📜</div>
                  <h3 className="text-xl font-bold text-red-700 mb-3 font-heading">Chủ nghĩa Duy vật Lịch sử</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    <strong>Phương pháp luận:</strong> Lịch sử xã hội loài người phát triển theo quy luật khách quan, do mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất quyết định.
                  </p>
                  <div className="bg-amber-50 rounded-xl p-3 text-xs text-stone-600 border border-amber-200/60">
                    <strong className="text-amber-700">Học thuyết:</strong> Hình thái kinh tế-xã hội · Đấu tranh giai cấp · Nhà nước · Ý thức xã hội · Sứ mệnh lịch sử của giai cấp vô sản
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* III. Vai trò */}
          <div>
            <Reveal>
              <h2 className="text-2xl font-bold text-stone-800 mb-8 font-heading flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-xl flex items-center justify-center text-base font-bold shadow-md">III</span>
                Vai trò của Triết học Mác-Lênin
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {roles.map((role, i) => (
                <Reveal key={i} delayMs={i * 80}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="gold-glow-panel rounded-2xl p-5 border border-red-800/15 bg-white/80 shadow-md flex gap-4"
                  >
                    <div className={`${role.color} text-white rounded-xl w-12 h-12 flex items-center justify-center font-bold text-sm shrink-0 shadow-md`}>
                      {role.number}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl">{role.icon}</span>
                        <h3 className="font-bold text-stone-800 font-heading text-sm md:text-base">{role.title}</h3>
                      </div>
                      <p className="text-sm text-stone-600 leading-relaxed">{role.desc}</p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Conclusion */}
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-red-800/20 bg-gradient-to-br from-red-700 to-red-900 p-8 md:p-10 shadow-2xl text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">Kết luận</h3>
                <p className="text-white/90 max-w-3xl mx-auto text-base leading-relaxed">
                  Triết học Mác-Lênin là <strong>đỉnh cao của tư duy triết học nhân loại</strong> trong thế kỷ XIX – XX.
                  Đây không chỉ là hệ thống lý luận mà là <strong>vũ khí thực tiễn</strong> cho cuộc đấu tranh giải phóng giai cấp và giải phóng con người.
                  Đối với Việt Nam, triết học Mác-Lênin là nền tảng tư tưởng, kim chỉ nam cho hành động của Đảng và nhân dân ta trong sự nghiệp xây dựng và bảo vệ Tổ quốc.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
