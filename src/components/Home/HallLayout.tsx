import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Particles } from "../magicui/Special Effect/particles";

interface HallLayoutProps {
  children: ReactNode;
  hallNumber?: number;
  bgImage?: string;
}

/** Nền particles + gradient chung cho các sảnh triển lãm (giống trang Member) */
export default function HallLayout({
  children,
  hallNumber,
  bgImage,
}: HallLayoutProps) {
  return (
    <div className="relative w-full min-h-[85vh] bg-gradient-to-b from-[#FDF6E3] to-white overflow-hidden">
      {bgImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
            style={{ backgroundImage: `url("${bgImage}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-[#FDF6E3]/80 to-white/90 pointer-events-none" />
        </>
      )}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,28,28,0.07),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(217,119,6,0.05),transparent_55%)] pointer-events-none" />

      <Particles
        className="absolute inset-0 z-[1]"
        quantity={45}
        staticity={30}
        ease={70}
        color="#b91c1c"
        size={1.2}
        vx={0.06}
        vy={0.06}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative z-10 p-6 md:p-12"
      >
        {hallNumber != null && (
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 bg-red-600/5 border border-red-600/25 text-red-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
              Sảnh {hallNumber}
            </span>
          </div>
        )}
        {children}
      </motion.div>
    </div>
  );
}
