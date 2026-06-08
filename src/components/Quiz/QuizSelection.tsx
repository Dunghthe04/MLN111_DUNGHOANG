import { Link } from "react-router";
import { Particles } from "../magicui/Special Effect/particles";
import ExhibitImage from "../Home/ExhibitImage";

interface QuizChapter {
  id: string;
  title: string;
  description: string;
  parts: number;
  icon: string;
  thumbnail: string;
  thumbnailAlt: string;
  placeholderLabel: string;
}

const quizChapters: QuizChapter[] = [
  {
    id: "duy-vat-bien-chung",
    title: "Duy vật biện chứng",
    description:
      "Kiểm tra kiến thức về phương pháp luận triết học Mác-Lênin và sự vận động của xã hội.",
    parts: 15,
    icon: "⚖️",
    thumbnail: "/imgs/triethoc-1.jpg",
    thumbnailAlt: "Duy vật biện chứng",
    placeholderLabel: "Chèn ảnh minh họa DVB",
  },
  {
    id: "duy-vat-lich-su",
    title: "Duy vật lịch sử",
    description:
      "Tìm hiểu về mâu thuẫn giai cấp, quan hệ sản xuất và quy luật lịch sử trong Mác-Lênin.",
    parts: 15,
    icon: "🏛️",
    thumbnail: "/imgs/real/hall-2-1.jpg",
    thumbnailAlt: "Duy vật lịch sử",
    placeholderLabel: "Chèn ảnh minh họa DVL",
  },
  {
    id: "tu-tuong-mac-lenin",
    title: "Tư tưởng Mác-Lênin",
    description:
      "Ôn tập 15 câu hỏi trắc nghiệm có minh họa về chủ nghĩa xã hội, giá trị thặng dư và triết học Mác-Lênin.",
    parts: 15,
    icon: "📚",
    thumbnail: "/imgs/marx-portrait.jpg",
    thumbnailAlt: "Tư tưởng Mác-Lênin",
    placeholderLabel: "Chèn ảnh chân dung Marx",
  },
];

export default function QuizSelection() {
  const bgImages = [
    "/imgs/real/quiz-bg-1.jpg",
    "/imgs/real/quiz-bg-2.jpg",
    "/imgs/real/quiz-bg-3.jpg",
    "/imgs/real/quiz-bg-4.jpg",
  ];
  const bg = bgImages[Math.floor(Math.random() * bgImages.length)];

  return (
    <div className="min-h-screen relative p-6 pt-16 bg-gradient-to-b from-[#FDF6E3] to-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(253,246,227,0.5), rgba(255,255,255,0.8)), url("${bg}")`,
        }}
      />

      <Particles
        className="absolute inset-0 z-[11]"
        quantity={40}
        staticity={30}
        ease={70}
        color="#b91c1c"
        size={1.2}
        vx={0.1}
        vy={0.1}
      />

      <div className="max-w-5xl mx-auto relative z-20">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-red-600/5 border border-red-600/30 text-red-600 px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
            Đấu trường Tri thức Triết học
          </div>

          <h1 className="text-4xl md:text-5xl font-title tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-amber-700 to-red-600 mb-2">
            TRIẾT HỌC MÁC-LÊNIN
          </h1>

          <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-heading mb-3">
            Khảo Thí Kiến Thức Tương Tác
          </h2>

          <p className="text-sm text-stone-500 max-w-xl mx-auto leading-relaxed">
            Chọn sảnh khảo thí để bắt đầu rèn luyện và kiểm tra kiến thức về triết học Mác-Lênin.
          </p>
        </div>

        {/* Quiz Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quizChapters.map((chapter) => (
            <div
              key={chapter.id}
              className="group gold-glow-panel bg-white/90 border border-red-800/15 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-36 overflow-hidden">
                <ExhibitImage
                  src={chapter.thumbnail}
                  alt={chapter.thumbnailAlt}
                  placeholderLabel={chapter.placeholderLabel}
                  fit="contain"
                  aspectRatio="wide"
                  className="h-full [&_figure]:h-full [&_figure>div]:rounded-none [&_figure>div]:border-0 [&_figure>div]:h-full"
                />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center text-lg">
                  {chapter.icon}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-stone-800 mb-2 font-heading group-hover:text-red-700 transition-colors">
                  {chapter.title}
                </h3>

                <p className="text-stone-500 text-xs leading-relaxed flex-1 mb-4">
                  {chapter.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                  <Link
                    to={`/quiz?chapter=${chapter.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-700 text-white font-bold text-xs rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Bắt đầu
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-stone-400 text-xs font-medium">
                    {chapter.parts} câu
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
