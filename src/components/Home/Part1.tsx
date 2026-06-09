// Part1.tsx — Bối cảnh lịch sử-xã hội hình thành triết học Mác-Lênin
import React, { useRef, useState } from "react";
import { motion, useAnimation } from "motion/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Hand } from "lucide-react";
import { TypingAnimation } from "../magicui/Text Animations/TypingAnimation";
import { Lens } from "../aceternityui/lens";
import { ImageIcon } from "lucide-react";
import HallLayout from "./HallLayout";
import RevealOnScroll from "./RevealOnScroll";

const cardImages = [
  { src: "/imgs/industrial-revolution.jpg", alt: "Cách mạng Công nghiệp", placeholder: "Chèn ảnh Cách mạng Công nghiệp" },
  { src: "/imgs/real/hall-1-1.jpg", alt: "Phong trào công nhân", placeholder: "Chèn ảnh phong trào công nhân" },
  { src: "/imgs/halls/hall-1-3.jpg", alt: "Tiền đề khoa học", placeholder: "Chèn ảnh tiền đề khoa học tự nhiên" },
];

const captions = [
  "Cách mạng Công nghiệp — Nền tảng kinh tế-xã hội",
  "Phong trào công nhân đầu thế kỷ XIX",
  "Tiền đề khoa học tự nhiên — Darwin, Mayer, Schleiden",
];

const texts = [
  `
# Bối Cảnh Lịch Sử-Xã Hội (Giữa thế kỷ XIX)

## 1. Cuộc Cách mạng Công nghiệp
Vào giữa thế kỷ XIX, cuộc **Cách mạng Công nghiệp** bùng nổ ở Tây Âu đã làm biến đổi toàn diện cơ cấu kinh tế-xã hội:

- Máy móc thay thế lao động thủ công → **Lực lượng sản xuất phát triển vượt bậc**
- Giai cấp **tư sản** và **vô sản** hình thành rõ nét
- Mâu thuẫn giữa tư bản và lao động trở thành mâu thuẫn **trung tâm của thời đại**

## 2. Sự Xuất Hiện Giai Cấp Công Nhân
Giai cấp công nhân ra đời như một lực lượng xã hội mới:

> "Không có giai cấp vô sản thì không có triết học, không có triết học thì không có giai cấp vô sản trở thành đội quân cách mạng."
> *(Karl Marx)*
`,

  `
## 3. Phong Trào Công Nhân Đầu Thế Kỷ XIX

Công nhân đứng lên đấu tranh chống áp bức, hình thành nền tảng xã hội cho triết học Mác:

- **1838–1850**: Phong trào Hiến chương ở **Anh** — phong trào công nhân đầu tiên mang tính toàn quốc
- **1831–1834**: Cuộc khởi nghĩa thợ dệt **Lyon (Pháp)** — biểu hiện rõ mâu thuẫn giai cấp
- **1844**: Khởi nghĩa thợ dệt **Silesia (Đức)** — tác động trực tiếp đến Marx

Những phong trào này **thất bại** vì thiếu lý luận khoa học dẫn đường.

> Thực tiễn đặt ra yêu cầu cấp bách: Giai cấp vô sản cần **một học thuyết cách mạng khoa học**.
`,

  `
## 4. Tiền Đề Khoa Học Tự Nhiên

Ba phát minh lớn của thế kỷ XIX đặt nền tảng cho thế giới quan duy vật:

| Phát minh | Tác giả | Ý nghĩa triết học |
|-----------|---------|------------------|
| **Định luật bảo toàn năng lượng** | Mayer, Joule, Helmholtz (1840s) | Vật chất không thể tự sinh ra, tiêu diệt |
| **Thuyết tiến hóa** | Charles Darwin (1859) | Giới hữu cơ phát triển theo quy luật tự nhiên |
| **Thuyết tế bào** | Schleiden & Schwann (1838-1839) | Thống nhất vật chất của sinh vật |

→ Ba phát minh này **đánh đổ** quan điểm siêu hình, mở đường cho **chủ nghĩa duy vật biện chứng**.
`,
];

function HeroImage({
  src,
  alt,
  placeholder,
  caption,
  hovering,
  setHovering,
}: {
  src: string;
  alt: string;
  placeholder?: string;
  caption?: string;
  hovering: boolean;
  setHovering: (v: boolean) => void;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <>
        <div className="aspect-[16/9] w-full rounded-xl border-2 border-dashed border-red-300/50 bg-gradient-to-br from-[#FDF6E3] to-red-50 flex flex-col items-center justify-center gap-2 p-4">
          <ImageIcon className="w-10 h-10 text-red-400/60" />
          <span className="text-xs text-stone-400 text-center">{placeholder ?? alt}</span>
        </div>
        {caption && (
          <p className="text-center mt-2 text-xs text-stone-400 italic">{caption}</p>
        )}
      </>
    );
  }

  return (
    <>
      <Lens hovering={hovering} setHovering={setHovering} zoomFactor={1.15} lensSize={140}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="rounded-xl w-full max-h-64 object-contain bg-stone-100/90 cursor-none shadow-md"
          onError={() => setFailed(true)}
        />
      </Lens>
      {caption && (
        <p className="text-center mt-2 text-xs text-stone-400 italic">{caption}</p>
      )}
    </>
  );
}

export default function Part1() {
  const [hovering, setHovering] = useState(false);

  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const startXRef = useRef<number | null>(null);
  const isPointerDownRef = useRef(false);
  const hasThrownRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const inactivityTimerRef = useRef<number | null>(null);
  const lastRenderedXRef = useRef<number>(0);
  const [showHint, setShowHint] = useState(true);
  const rafIdRef = useRef<number | null>(null);
  const pendingTransformRef = useRef<{
    x: number;
    y: number;
    rotate: number;
  } | null>(null);

  const throwThreshold = 110;

  async function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    startXRef.current = e.clientX;
    isPointerDownRef.current = true;
    hasThrownRef.current = false;
    setIsDragging(true);
    setShowHint(false);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch { /* noop */ }
    await controls.set({ x: 0, opacity: 1, scale: 1, zIndex: 50 });
  }

  async function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!isPointerDownRef.current || hasThrownRef.current || startXRef.current == null)
      return;
    const distance = Math.abs(e.clientX - startXRef.current);
    const effective = distance < 2 ? 0 : distance;
    const leftX = -effective;
    const rotate = -Math.min(18, distance * 0.08);
    const yLift = -Math.min(40, distance * 0.12);

    if (Math.abs(leftX - lastRenderedXRef.current) > 0.5) {
      pendingTransformRef.current = { x: leftX, y: yLift, rotate };
      if (rafIdRef.current == null) {
        rafIdRef.current = window.requestAnimationFrame(() => {
          const p = pendingTransformRef.current;
          if (p) {
            controls.set({ x: p.x, y: p.y, rotate: p.rotate });
            lastRenderedXRef.current = p.x;
          }
          rafIdRef.current = null;
        });
      }
    }

    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
      inactivityTimerRef.current = null;
    }
    inactivityTimerRef.current = window.setTimeout(async () => {
      if (isPointerDownRef.current && !hasThrownRef.current) {
        await controls.start({
          x: 0, y: 0, rotate: 0, opacity: 1,
          transition: { type: "spring", stiffness: 300, damping: 26 },
        });
        isPointerDownRef.current = false;
        setIsDragging(false);
      }
    }, 180);

    if (distance > throwThreshold) {
      hasThrownRef.current = true;
      setIsDragging(false);
      if (inactivityTimerRef.current) { clearTimeout(inactivityTimerRef.current); inactivityTimerRef.current = null; }
      if (rafIdRef.current) { cancelAnimationFrame(rafIdRef.current); rafIdRef.current = null; }
      pendingTransformRef.current = null;
      controls.stop();
      await controls.start({
        x: -900, y: yLift - 40, rotate: -25, opacity: 0,
        transition: { duration: 0.35, ease: "easeIn" },
      });
      isPointerDownRef.current = false;
      startXRef.current = null;
      try { e.currentTarget.releasePointerCapture(e.pointerId); } catch { /* noop */ }

      setIndex((s) => (s + 1) % texts.length);
      await controls.set({ x: 0, y: 0, rotate: 0, opacity: 0, scale: 1 });
      await controls.start({
        opacity: 1,
        transition: { type: "spring", stiffness: 260, damping: 22 },
      });
    }
  }

  async function handlePointerUp(e?: React.PointerEvent<HTMLDivElement>) {
    if (!hasThrownRef.current) {
      if (inactivityTimerRef.current) { clearTimeout(inactivityTimerRef.current); inactivityTimerRef.current = null; }
      if (rafIdRef.current) { cancelAnimationFrame(rafIdRef.current); rafIdRef.current = null; }
      pendingTransformRef.current = null;
      controls.stop();
      await controls.start({
        x: 0, y: 0, rotate: 0, opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 26 },
      });
    }
    isPointerDownRef.current = false;
    startXRef.current = null;
    setIsDragging(false);
    if (e) {
      try { e.currentTarget.releasePointerCapture(e.pointerId); } catch { /* noop */ }
    }
  }

  async function handlePointerCancel(e: React.PointerEvent<HTMLDivElement>) {
    await handlePointerUp(e);
  }

  async function handlePointerLeave(e: React.PointerEvent<HTMLDivElement>) {
    if (isPointerDownRef.current) {
      await handlePointerUp(e);
    }
  }

  return (
    <HallLayout hallNumber={1} bgImage="/imgs/real/hall-1-1.jpg">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* Left Column: Title & Swipable Cards */}
        <RevealOnScroll className="lg:col-span-7 flex flex-col items-center lg:items-start">
          <h3 className="uppercase text-red-700 font-heading text-4xl md:text-5xl mb-10 text-center lg:text-left drop-shadow-[0_0_8px_rgba(185,28,28,0.2)]">
            <TypingAnimation
              startOnView={true}
              duration={50}
              className="text-red-700 font-heading text-3xl md:text-4xl"
            >
              Bối cảnh lịch sử-xã hội
            </TypingAnimation>
          </h3>

          <div className="relative" style={{ touchAction: "none" }}>
            {/* BACK LAYERS */}
            <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-2xl border border-red-800/10 bg-white/40 backdrop-blur-sm -z-10 shadow-lg" />
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl border border-red-800/15 bg-white/60 backdrop-blur-sm -z-10 shadow-md" />

            {/* Swipe hint */}
            {showHint && !isDragging && (
              <div className="absolute -right-16 top-1/2 -translate-y-1/2 z-40 pointer-events-none select-none animate-swipeLeftHint">
                <Hand className="text-red-700 size-12 drop-shadow-[0_0_6px_rgba(185,28,28,0.3)]" />
              </div>
            )}

            {/* Interactive Card */}
            <motion.div
              className="relative rounded-2xl border border-red-600/30 font-heading text-stone-700 select-none z-30 shadow-2xl p-8"
              animate={controls}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerCancel}
              onPointerLeave={handlePointerLeave}
              whileTap={{ scale: 0.995 }}
              whileHover={{ scale: 1.005 }}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(12px)",
                width: "550px",
                maxWidth: "100%",
                cursor: isDragging ? "grabbing" : "grab",
                opacity: 1,
                scale: 1,
                willChange: "transform",
                transform: "translateZ(0)",
              }}
            >
              <div className="absolute top-3 right-4 text-xs font-bold text-red-700/50">
                {index + 1} / {texts.length} • Trượt để xem tiếp
              </div>

              <div className="relative h-96 overflow-y-auto pr-2 dark-scrollbar prose prose-stone max-w-none text-stone-600">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{texts[index]}</ReactMarkdown>
              </div>
            </motion.div>
          </div>
        </RevealOnScroll>

        {/* Right Column: Historical Image with Lens Zoom */}
        <RevealOnScroll delayMs={150} className="lg:col-span-5 flex flex-col gap-4 justify-center items-center mt-8 lg:mt-0">
          <div className="relative rounded-2xl border border-red-800/15 p-3 bg-white/80 shadow-2xl w-full max-w-md">
            <HeroImage
              src={cardImages[index]?.src ?? cardImages[0].src}
              alt={cardImages[index]?.alt ?? "Minh họa bối cảnh lịch sử"}
              placeholder={cardImages[index]?.placeholder}
              caption={captions[index]}
              hovering={hovering}
              setHovering={setHovering}
            />
          </div>

          {/* Slide indicators */}
          <div className="flex items-center gap-2">
            {texts.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 bg-red-600"
                    : "w-2 bg-red-300/50 hover:bg-red-400/70"
                }`}
                aria-label={`Xem phần ${i + 1}`}
              />
            ))}
          </div>
        </RevealOnScroll>

      </div>
    </HallLayout>
  );
}
