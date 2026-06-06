import { useState } from "react";
import { Link } from "react-router";
import { Particles } from "../magicui/Special Effect/particles";

// Custom CSS for animations
const customStyles = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes pulse-gentle {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
  
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out;
  }
  
  .animate-pulse-gentle {
    animation: pulse-gentle 2s ease-in-out infinite;
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple 0.6s linear;
    pointer-events: none;
  }
`;

interface QuizChapter {
  id: string;
  title: string;
  description: string;
  parts: number;
  color: string;
  icon: string;
  thumbnail: string;
}

const quizChapters: QuizChapter[] = [
  {
    id: "duy-vat-bien-chung",
    title: "Duy vật biện chứng",
    description:
      "Kiểm tra kiến thức về phương pháp luận triết học Mác-Lênin và sự vận động của xã hội.",
    parts: 15,
    color: "from-orange-500 to-red-600",
    icon: "🤝",
    thumbnail: "/imgs/triethoc-1.svg",
  },
  {
    id: "duy-vat-lich-su",
    title: "Duy vật lịch sử",
    description:
      "Tìm hiểu về mâu thuẫn giai cấp, quan hệ sản xuất và quy luật lịch sử trong Mác-Lênin.",
    parts: 15,
    color: "from-blue-500 to-indigo-600",
    icon: "🏛️",
    thumbnail: "/imgs/halls/hall-2-1.svg",
  },
  {
    id: "tu-tuong-mac-lenin",
    title: "Tư tưởng Mác-Lênin",
    description:
      "Ôn tập 15 câu hỏi trắc nghiệm có minh họa về chủ nghĩa xã hội, giá trị thặng dư và triết học Mác-Lênin.",
    parts: 15,
    color: "from-green-500 to-emerald-600",
    icon: "📚",
    thumbnail: "/imgs/marx-portrai.jpg",
  },
];

export default function QuizSelection() {
  const [selectedChapter, setSelectedChapter] = useState<string>("");
  const bgImages = [
    "/imgs/real/quiz-bg-1.jpg",
    "/imgs/real/quiz-bg-2.jpg",
    "/imgs/real/quiz-bg-3.jpg",
    "/imgs/real/quiz-bg-4.jpg",
  ];
  const bg = bgImages[Math.floor(Math.random() * bgImages.length)];

  return (
    <>
      {/* Inject custom animations */}
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      
      <div
        className="min-h-screen relative p-6 pt-16 bg-gradient-to-b from-[#FDF6E3] to-white"
      >
      {/* Background Image overlay with low opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url("${bg}")`,
        }}
      />
      {/* Background overlay */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-white/90 via-transparent to-white/95 pointer-events-none"
      />

      {/* Particles Background Effect */}
      <Particles
        className="absolute inset-0 z-[11]"
        quantity={60}
        staticity={30}
        ease={70}
        color="#b91c1c"
        size={1.2}
        vx={0.1}
        vy={0.1}
      />

      <div className="max-w-5xl mx-auto relative z-20">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-red-600/5 border border-red-600/30 text-red-600 px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
            Đấu trường Tri thức Triết học
          </div>

          <h1
            className="text-4xl md:text-5xl font-title tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-amber-700 to-red-600 mb-2 drop-shadow-[0_0_8px_rgba(185,28,28,0.2)]"
          >
            TRIẾT HỌC MÁC-LÊNIN
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 font-heading mb-4">
            Khảo Thí Kiến Thức Tương Tác
          </h2>

          <p className="text-base text-stone-500 mb-6 max-w-2xl mx-auto leading-relaxed">
            Chọn sảnh khảo thí để bắt đầu rèn luyện và kiểm tra kiến thức về triết học Mác-Lênin.
          </p>

          {/* Progress Dots */}
          <div className="flex items-center justify-center gap-2 opacity-50">
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
            <div className="w-6 h-px bg-red-800"></div>
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
            <div className="w-6 h-px bg-red-800"></div>
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
          </div>
        </div>

        {/* Quiz Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quizChapters.map((chapter) => (
            <div
              key={chapter.id}
              className={`group relative gold-glow-panel bg-white/85 border border-red-800/15 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer flex flex-col ${
                selectedChapter === chapter.id ? "border-red-600 ring-1 ring-red-600/50" : ""
              }`}
              onClick={() => setSelectedChapter(chapter.id)}
            >
              <div className="relative mb-4 rounded-xl overflow-hidden border border-red-800/10 h-32">
                <img
                  src={chapter.thumbnail}
                  alt={chapter.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 text-2xl drop-shadow-md">{chapter.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-stone-800 mb-2 leading-snug group-hover:text-red-600 transition-colors font-heading">
                {chapter.title}
              </h3>

              {/* Description */}
              <p className="text-stone-500 text-xs leading-relaxed flex-1">
                {chapter.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-4">
                <Link
                  to={`/quiz?chapter=${chapter.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs rounded-lg hover:from-red-500 hover:to-red-600 transition-all duration-200"
                >
                  Bắt đầu
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>

                <span className="text-stone-400 text-xs font-semibold">
                  {chapter.parts} câu
                </span>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>


      </div>
    </div>
    </>
  );
}
