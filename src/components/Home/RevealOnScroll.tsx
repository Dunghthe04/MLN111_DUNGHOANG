import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delayMs?: number;
  once?: boolean;
}

/** Fade-in + trượt lên khi scroll vào viewport */
export default function RevealOnScroll({
  children,
  className = "",
  as: Tag = "div",
  delayMs = 0,
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delayMs > 0) {
            setTimeout(() => setVisible(true), delayMs);
          } else {
            setVisible(true);
          }
          if (once) io.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delayMs, once]);

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}

/** Class hover dùng chung cho thẻ sảnh — giống member cards */
export const hallCardClass =
  "gold-glow-panel bg-white/90 border border-red-800/15 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(185,28,28,0.1)] hover:border-red-500/30 group relative overflow-hidden";
