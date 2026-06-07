// Part5.tsx — Đặc trưng và Vai trò của Triết học Mác-Lênin
import { TypingAnimation } from "../magicui/Text Animations/TypingAnimation";
import ExhibitImage from "./ExhibitImage";
import HallLayout from "./HallLayout";
import RevealOnScroll, { hallCardClass } from "./RevealOnScroll";

const features = [
  {
    num: "01",
    title: "Tính khoa học",
    points: [
      "Phản ánh đúng đắn hiện thực khách quan",
      "Có cơ sở lý luận và thực tiễn vững chắc",
      "Được kiểm nghiệm qua lịch sử",
    ],
  },
  {
    num: "02",
    title: "Tính cách mạng",
    points: [
      "Không chỉ giải thích mà cải tạo thế giới",
      "Vũ khí lý luận của giai cấp vô sản",
      "Chỉ đường cho sự nghiệp giải phóng",
    ],
  },
  {
    num: "03",
    title: "Tính sáng tạo & mở",
    points: [
      "Không giáo điều, phát triển theo thực tiễn",
      "Tích hợp tri thức nhân loại",
      "Đặt ra vấn đề mới cho từng thời đại",
    ],
  },
  {
    num: "04",
    title: "Tính đảng (Tính giai cấp)",
    points: [
      "Đứng về phía giai cấp vô sản và nhân dân",
      "Phục vụ lợi ích của đa số",
      "Chống lại mọi hình thức áp bức, bóc lột",
    ],
  },
];

const components = [
  {
    title: "Chủ nghĩa Duy vật Biện chứng",
    subtitle: "Thế giới quan",
    desc: "Vật chất là cái có trước, ý thức là cái có sau. Thế giới vật chất tồn tại khách quan, luôn vận động theo quy luật.",
    highlight: "Ba quy luật: Thống nhất & đấu tranh · Lượng đổi chất đổi · Phủ định của phủ định",
  },
  {
    title: "Chủ nghĩa Duy vật Lịch sử",
    subtitle: "Phương pháp luận",
    desc: "Lịch sử xã hội phát triển theo quy luật khách quan, do mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất quyết định.",
    highlight: "Hình thái KTXH · Đấu tranh giai cấp · Nhà nước · Sứ mệnh giai cấp vô sản",
  },
];

const roles = [
  { title: "Thế giới quan duy vật biện chứng", desc: "Trang bị cái nhìn khoa học: vật chất quyết định ý thức, thế giới vận động theo quy luật khách quan." },
  { title: "Phương pháp luận khoa học & cách mạng", desc: "Phép biện chứng duy vật — xem xét sự vật trong mối liên hệ, vận động và mâu thuẫn nội tại." },
  { title: "Nền tảng lý luận cho CNXH khoa học", desc: "Đặt nền móng cho giải phóng giai cấp vô sản, xây dựng CNXH và tiến tới CNCS." },
  { title: "Kim chỉ nam cho phong trào CM thế giới", desc: "Vũ khí tư tưởng của các Đảng Cộng sản và phong trào cách mạng thế kỷ XX." },
];

export default function Part5() {
  return (
    <HallLayout hallNumber={5} bgImage="/imgs/real/hall-5-1.jpg">
      <div className="max-w-5xl mx-auto space-y-10">
        <RevealOnScroll>
        <div className="text-center">
          <h3 className="uppercase text-red-700 font-heading text-3xl md:text-4xl drop-shadow-[0_0_8px_rgba(185,28,28,0.2)]">
            <TypingAnimation startOnView duration={50} className="text-red-700 font-heading text-3xl md:text-4xl">
              Đặc trưng & Vai trò TH Mác-Lênin
            </TypingAnimation>
          </h3>
          <p className="mt-2 text-sm text-stone-500 max-w-xl mx-auto leading-relaxed">
            Hệ thống triết học kết hợp tính <strong>khoa học</strong> với tính <strong>cách mạng</strong>,
            phục vụ giải phóng con người.
          </p>
        </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={80}>
        <div className="max-w-2xl mx-auto">
          <ExhibitImage
            src="/imgs/real/hall-5-1.jpg"
            alt="Triết học Mác-Lênin"
            placeholderLabel="Chèn ảnh minh họa Hall 5"
            caption="Triết học Mác-Lênin — Di sản tư tưởng vĩ đại"
            fit="contain"
            aspectRatio="auto"
            className="[&_figure>div]:w-full [&_figure>div]:min-h-[280px] [&_figure>div]:max-h-[400px]"
          />
        </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={100}>
        <section>
          <SectionHeading num="I" title="Những đặc trưng cơ bản" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <RevealOnScroll key={f.num} delayMs={i * 70} className={`${hallCardClass} p-5 shadow-sm`}>
                <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-red-600/10 blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-red-700 text-white rounded-lg flex items-center justify-center text-xs font-bold shadow-[0_0_10px_rgba(185,28,28,0.2)]">
                    {f.num}
                  </span>
                  <h3 className="font-bold text-stone-800 font-heading group-hover:text-red-600 transition-colors">{f.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {f.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-stone-600">
                      <span className="text-red-500 mt-0.5 shrink-0">▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            ))}
          </div>
        </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
        <section>
          <SectionHeading num="II" title="Hai bộ phận cấu thành" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {components.map((c, i) => (
              <RevealOnScroll key={i} delayMs={i * 80} className={`${hallCardClass} p-5 shadow-sm`}>
                <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">
                  {c.subtitle}
                </span>
                <h3 className="font-bold text-stone-800 font-heading mt-1 mb-2">{c.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-3">{c.desc}</p>
                <div className="bg-red-50 border border-red-100 rounded-lg p-3 text-[11px] text-stone-600 leading-relaxed">
                  {c.highlight}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={140}>
        <section>
          <SectionHeading num="III" title="Vai trò của Triết học Mác-Lênin" />
          <div className="space-y-3">
            {roles.map((role, i) => (
              <RevealOnScroll key={i} delayMs={i * 60} className={`${hallCardClass} flex gap-4 items-start p-4 shadow-sm`}>
                <span className="w-8 h-8 bg-red-100 text-red-700 rounded-lg flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-stone-800 text-sm font-heading group-hover:text-red-600 transition-colors">{role.title}</h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">{role.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={160}>
        <section className="rounded-2xl border border-red-800/20 bg-gradient-to-br from-red-800 to-red-950 p-6 md:p-8 text-center shadow-xl hover:shadow-[0_12px_40px_rgba(185,28,28,0.25)] transition-shadow duration-300">
          <h3 className="text-xl font-bold text-white mb-3 font-heading">Kết luận</h3>
          <p className="text-white/85 text-sm leading-relaxed max-w-2xl mx-auto">
            Triết học Mác-Lênin là <strong>đỉnh cao tư duy triết học</strong> thế kỷ XIX–XX —
            không chỉ lý luận mà là <strong>vũ khí thực tiễn</strong> giải phóng giai cấp và con người.
            Đối với Việt Nam, đây là nền tảng tư tưởng, kim chỉ nam cho Đảng và nhân dân ta.
          </p>
        </section>
        </RevealOnScroll>
      </div>
    </HallLayout>
  );
}

function SectionHeading({ num, title }: { num: string; title: string }) {
  return (
    <h2 className="text-lg font-bold text-stone-800 mb-4 font-heading flex items-center gap-2">
      <span className="w-8 h-8 bg-red-700 text-white rounded-lg flex items-center justify-center text-xs font-bold">
        {num}
      </span>
      {title}
    </h2>
  );
}
