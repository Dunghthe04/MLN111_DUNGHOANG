import { useState } from "react";
import Part1 from "../components/Home/Part1";
import Part2 from "../components/Home/Part2";
import Part3 from "../components/Home/Part3";
import Part4 from "../components/Home/Part4";
import Part5 from "../components/Home/Part5";
import { Sparkles, ArrowRight, ArrowLeft, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Home() {
  const [activeHall, setActiveHall] = useState<number | null>(null);

  const halls = [
    {
      id: 1,
      title: "Sảnh 1: Bối Cảnh Lịch Sử",
      desc: "Cuộc Cách mạng công nghiệp, sự xuất hiện của giai cấp công nhân và những mâu thuẫn xã hội sâu sắc tạo nên tiền đề ra đời triết học Mác.",
      color: "from-red-800/20 to-amber-100",
      accent: "rgba(185,28,28,0.28)",
      component: <Part1 />,
    },
    {
      id: 2,
      title: "Sảnh 2: Tiền Đề Lý Luận",
      desc: "Ba nguồn gốc lý luận: Triết học cổ điển Đức (Hegel, Feuerbach), Kinh tế chính trị Anh (Smith, Ricardo), Chủ nghĩa xã hội không tưởng Pháp.",
      color: "from-red-950/40 to-amber-900/20",
      accent: "rgba(185,28,28,0.28)",
      component: <Part2 />,
    },
    {
      id: 3,
      title: "Sảnh 3: Marx & Engels (1818–1895)",
      desc: "Hành trình tư tưởng từ luận án tiến sĩ đến Tuyên ngôn Đảng Cộng sản — giai đoạn hình thành những nguyên lý cốt lõi của triết học Mác.",
      color: "from-red-950/40 to-amber-900/20",
      accent: "rgba(185,28,28,0.28)",
      component: <Part3 />,
    },
    {
      id: 4,
      title: "Sảnh 4: Lenin Phát Triển (1870–1924)",
      desc: "Lenin bảo vệ và phát triển triết học Mác trong thời đại đế quốc chủ nghĩa, dẫn đến thắng lợi của Cách mạng Tháng Mười Nga 1917.",
      color: "from-red-950/40 to-amber-900/20",
      accent: "rgba(185,28,28,0.28)",
      component: <Part4 />,
    },
    {
      id: 5,
      title: "Sảnh 5: Đặc Trưng & Vai Trò",
      desc: "Tính khoa học – cách mạng, chủ nghĩa duy vật biện chứng và lịch sử — nền tảng thế giới quan và phương pháp luận của thời đại.",
      color: "from-red-950/40 to-amber-900/20",
      accent: "rgba(185,28,28,0.28)",
      component: <Part5 />,
    },
  ];

  const handleNextHall = () => {
    if (activeHall !== null && activeHall < halls.length) {
      setActiveHall(activeHall + 1);
    }
  };

  const handlePrevHall = () => {
    if (activeHall !== null && activeHall > 1) {
      setActiveHall(activeHall - 1);
    }
  };

  return (
    <div className="relative min-h-screen text-stone-800 overflow-hidden bg-[#FDF6E3]">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,28,28,0.06),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(185,28,28,0.06),transparent_60%)] pointer-events-none" />

      {/* Hero Section */}
      <AnimatePresence mode="wait">
        {activeHall === null ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-6xl mx-auto px-6 py-20 lg:py-28 flex flex-col items-center text-center relative z-10"
          >
            {/* Rotating Gear / Philosophy Icon */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 select-none flex items-center justify-center">
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(185,28,28,0.1)_0%,transparent_70%)] blur-xl" />

              {/* Spinning SVG - gear/atomic symbol representing philosophy */}
              <svg
                className="w-full h-full text-red-700/20 hover:text-red-700/35 transition-colors duration-500 animate-spin-slow"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              >
                {/* Outer decorative rings */}
                <circle cx="50" cy="50" r="48" strokeDasharray="3,3" />
                <circle cx="50" cy="50" r="44" />
                <circle cx="50" cy="50" r="38" strokeDasharray="1,2" />
                <circle cx="50" cy="50" r="32" />
                <circle cx="50" cy="50" r="26" strokeDasharray="6,4" />

                {/* Star of philosophy */}
                <circle cx="50" cy="50" r="10" />
                {Array.from({ length: 18 }).map((_, i) => {
                  const angle = (i * 20 * Math.PI) / 180;
                  const x1 = 50 + 5 * Math.cos(angle);
                  const y1 = 50 + 5 * Math.sin(angle);
                  const x2 = 50 + 20 * Math.cos(angle);
                  const y2 = 50 + 20 * Math.sin(angle);
                  return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="0.8" />;
                })}
              </svg>

              <div className="absolute text-red-700 font-bold text-base pointer-events-none drop-shadow-[0_0_6px_rgba(185,28,28,0.3)] leading-tight text-center">
                <div className="text-xs font-heading tracking-widest">TRIẾT HỌC</div>
                <div className="text-lg">MÁC-LÊNIN</div>
              </div>
            </div>

            {/* Glowing Main Title */}
            <h1 className="text-4xl md:text-6xl font-title tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-amber-600 to-red-700 drop-shadow-[0_0_8px_rgba(185,28,28,0.2)] select-none">
              TRIỂN LÃM SỐ TRIẾT HỌC
            </h1>
            <p className="mt-4 text-xl font-heading text-stone-500 max-w-2xl leading-relaxed">
              Khám phá hành trình hình thành{" "}
              <span className="text-red-700 font-semibold">Triết học Mác-Lênin</span>{" "}
              — từ bối cảnh lịch sử đến những nguyên lý bất hủ định hình thế giới hiện đại.
            </p>
            <p className="mt-2 text-sm font-heading text-stone-400 tracking-wide uppercase">
              MLN111 · Chương 1 · Nhóm 2
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setActiveHall(1)}
                className="px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-500 hover:to-red-600 transition-all shadow-[0_0_20px_rgba(185,28,28,0.2)] hover:scale-105 duration-300 flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-5 h-5" /> Bước vào triển lãm
              </button>
              <a
                href="/quiz"
                className="px-8 py-3.5 rounded-xl font-semibold border border-red-800/20 bg-red-600/5 text-red-600 hover:bg-red-600/10 hover:border-red-600/50 transition-all hover:scale-105 duration-300 flex items-center gap-2"
              >
                <Award className="w-5 h-5" /> Khảo thí kiến thức
              </a>
            </div>

            {/* Exhibition halls layout */}
            <div className="mt-24 w-full text-left">
              <h2 className="text-2xl font-bold font-heading border-b border-red-800/15 pb-3 mb-10 flex items-center gap-2 text-red-700">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(185,28,28,0.5)]" /> Sảnh trưng bày chính
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {halls.map((hall) => (
                  <motion.div
                    whileHover={{ y: -5 }}
                    key={hall.id}
                    onClick={() => setActiveHall(hall.id)}
                    className="gold-glow-panel cursor-pointer rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden border border-red-800/15 bg-white/60"
                  >
                    {/* Glowing corner */}
                    <div
                      className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"
                      style={{ backgroundColor: hall.accent }}
                    />

                    <div>
                      <span className="text-xs font-bold text-red-700 tracking-widest uppercase">HALL {hall.id}</span>
                      <h3 className="text-xl font-bold mt-2 mb-3 text-stone-800 group-hover:text-red-600 transition-colors">
                        {hall.title.replace(`Sảnh ${hall.id}: `, "")}
                      </h3>
                      <p className="text-sm text-stone-500 leading-relaxed line-clamp-3">
                        {hall.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-red-800/5 flex justify-between items-center text-sm font-semibold text-red-700">
                      <span>Khám phá sảnh</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          /* Active Hall Exhibition Space */
          <motion.div
            key="exhibition-booth"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="w-full relative z-10"
          >
            {/* Top Control Bar */}
            <div className="bg-[#F5E6C8]/80 backdrop-blur-md border-b border-red-800/10 py-4 px-6 fixed top-0 left-0 right-0 z-50 flex justify-between items-center">
              <button
                onClick={() => setActiveHall(null)}
                className="px-4 py-2 text-sm font-semibold rounded-lg border border-red-800/20 text-red-700 bg-red-600/5 hover:bg-red-600/10 hover:border-red-600/50 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Về Triển Lãm
              </button>

              <span className="text-sm font-bold text-red-700 font-heading">
                {halls[activeHall - 1].title.toUpperCase()}
              </span>

              <div className="flex gap-2">
                <button
                  disabled={activeHall === 1}
                  onClick={handlePrevHall}
                  className="p-2 rounded-lg border border-red-800/15 text-stone-600 hover:text-red-600 hover:border-red-600/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  disabled={activeHall === halls.length}
                  onClick={handleNextHall}
                  className="p-2 rounded-lg border border-amber-900/30 text-neutral-300 hover:text-amber-500 hover:border-amber-500/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Inner Content Component Container */}
            <div className="pt-20 min-h-screen flex flex-col">
              {halls[activeHall - 1].component}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
