import React, { useState, useCallback, useEffect, type ReactNode } from "react";
import { cn } from "../../utils/cn";

// Types and Interfaces
export interface FlashCardData {
  id: number;
  question: string | ReactNode;
  answer: string | ReactNode;
  category?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface FlashCardProps {
  /** Card data containing question and answer */
  card: FlashCardData;
  /** Custom className for styling */
  className?: string;
  /** Card dimensions */
  width?: string | number;
  height?: string | number;
  /** Flip direction */
  flipDirection?: 'horizontal' | 'vertical';
  /** Disable flip on click */
  disableFlip?: boolean;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Callback when card is flipped */
  onFlip?: (isFlipped: boolean) => void;
  /** Auto flip back after duration (ms) */
  autoFlipBack?: number;
  /** Show card number */
  showCardNumber?: boolean;
  /** Color theme */
  theme?: 'amber' | 'blue' | 'green' | 'purple' | 'red';
}

export interface FlashCardDeckProps {
  /** Array of flashcard data */
  cards: FlashCardData[];
  /** Custom className */
  className?: string;
  /** Show progress */
  showProgress?: boolean;
  /** Auto advance to next card */
  autoAdvance?: boolean;
  /** Auto advance duration (ms) */
  autoAdvanceDuration?: number;
  /** Callback when deck completes */
  onComplete?: () => void;
  /** Callback when card changes */
  onCardChange?: (cardIndex: number, card: FlashCardData) => void;
}

// Theme configurations
const themes = {
  amber: {
    front: 'from-amber-50 to-amber-100 border-amber-300',
    back: 'from-green-50 to-green-100 border-green-300',
    frontAccent: 'bg-amber-500 text-amber-600',
    backAccent: 'bg-green-500 text-green-600'
  },
  blue: {
    front: 'from-blue-50 to-blue-100 border-blue-300',
    back: 'from-indigo-50 to-indigo-100 border-indigo-300',
    frontAccent: 'bg-blue-500 text-blue-600',
    backAccent: 'bg-indigo-500 text-indigo-600'
  },
  green: {
    front: 'from-green-50 to-green-100 border-green-300',
    back: 'from-emerald-50 to-emerald-100 border-emerald-300',
    frontAccent: 'bg-green-500 text-green-600',
    backAccent: 'bg-emerald-500 text-emerald-600'
  },
  purple: {
    front: 'from-purple-50 to-purple-100 border-purple-300',
    back: 'from-violet-50 to-violet-100 border-violet-300',
    frontAccent: 'bg-purple-500 text-purple-600',
    backAccent: 'bg-violet-500 text-violet-600'
  },
  red: {
    front: 'from-red-50 to-red-100 border-red-300',
    back: 'from-rose-50 to-rose-100 border-rose-300',
    frontAccent: 'bg-red-500 text-red-600',
    backAccent: 'bg-rose-500 text-rose-600'
  }
};

// Single FlashCard Component
export function FlashCard({
  card,
  className,
  width = "100%",
  height = "16rem",
  flipDirection = 'horizontal',
  disableFlip = false,
  style,
  onFlip,
  autoFlipBack,
  showCardNumber = true,
  theme = 'amber'
}: FlashCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const themeConfig = themes[theme];

  const handleFlip = useCallback(() => {
    if (disableFlip) return;
    
    const newFlippedState = !isFlipped;
    setIsFlipped(newFlippedState);
    onFlip?.(newFlippedState);
  }, [isFlipped, disableFlip, onFlip]);

  // Auto flip back functionality
  useEffect(() => {
    if (isFlipped && autoFlipBack) {
      const timer = setTimeout(() => {
        setIsFlipped(false);
        onFlip?.(false);
      }, autoFlipBack);
      return () => clearTimeout(timer);
    }
  }, [isFlipped, autoFlipBack, onFlip]);

  // Keyboard accessibility
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleFlip();
    }
  }, [handleFlip]);

  const flipClass = flipDirection === 'horizontal' ? 'rotate-y-180' : 'rotate-x-180';
  const backfaceClass = flipDirection === 'horizontal' ? 'rotate-y-180' : 'rotate-x-180';

  return (
    <div 
      className={cn("perspective-1000", className)}
      style={{ width, height, ...style }}
    >
      <div
        className={cn(
          "relative w-full h-full cursor-pointer transition-transform duration-700 transform-style-preserve-3d",
          !disableFlip && "hover:scale-105",
          isFlipped ? flipClass : ""
        )}
        onClick={handleFlip}
        onKeyDown={handleKeyDown}
        tabIndex={disableFlip ? -1 : 0}
        role="button"
        aria-label={`Flashcard ${card.id}: ${isFlipped ? 'showing answer' : 'showing question'}`}
        aria-pressed={isFlipped}
      >
        {/* Front Side - Question */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className={cn(
            "h-full bg-gradient-to-br border-2 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300",
            themeConfig.front
          )}>
            <div className="flex flex-col h-full">
              {showCardNumber && (
                <div className="flex items-center justify-between mb-4">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium text-white",
                    themeConfig.frontAccent.split(' ')[0]
                  )}>
                    {card.category ? `${card.category} ` : ''}#{card.id}
                  </span>
                  <span className={cn(
                    "text-sm font-medium",
                    themeConfig.frontAccent.split(' ')[1]
                  )}>
                    Câu hỏi
                  </span>
                </div>
              )}
              
              <div className="flex-1 flex items-center justify-center p-2">
                <div className="text-gray-800 text-base sm:text-lg font-medium text-center leading-relaxed">
                  {card.question}
                </div>
              </div>
              
              {!disableFlip && (
                <div className={cn(
                  "text-center text-sm mt-4",
                  themeConfig.frontAccent.split(' ')[1]
                )}>
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    Nhấn để xem đáp án
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Back Side - Answer */}
        <div className={cn("absolute inset-0 w-full h-full backface-hidden", backfaceClass)}>
          <div className={cn(
            "h-full bg-gradient-to-br border-2 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300",
            themeConfig.back
          )}>
            <div className="flex flex-col h-full">
              {showCardNumber && (
                <div className="flex items-center justify-between mb-4">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium text-white",
                    themeConfig.backAccent.split(' ')[0]
                  )}>
                    {card.category ? `${card.category} ` : ''}#{card.id}
                  </span>
                  <span className={cn(
                    "text-sm font-medium",
                    themeConfig.backAccent.split(' ')[1]
                  )}>
                    Đáp án
                  </span>
                </div>
              )}
              
              <div className="flex-1 flex items-center justify-center p-2">
                <div className="text-gray-800 text-lg sm:text-xl font-semibold text-center leading-relaxed">
                  {card.answer}
                </div>
              </div>
              
              {!disableFlip && (
                <div className={cn(
                  "text-center text-sm mt-4",
                  themeConfig.backAccent.split(' ')[1]
                )}>
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Nhấn để xem lại câu hỏi
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// FlashCard Deck Component with Navigation
export function FlashCardDeck({
  cards,
  className,
  showProgress = true,
  autoAdvance = false,
  autoAdvanceDuration = 5000,
  onComplete,
  onCardChange
}: FlashCardDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setFlippedCards] = useState<Set<number>>(new Set());
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());

  const currentCard = cards[currentIndex];
  const progress = ((currentIndex + 1) / cards.length) * 100;
  const studiedProgress = (studiedCards.size / cards.length) * 100;

  // Auto advance functionality
  useEffect(() => {
    if (autoAdvance && currentIndex < cards.length - 1) {
      const timer = setTimeout(() => {
        goToNext();
      }, autoAdvanceDuration);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, autoAdvance, autoAdvanceDuration]);

  // Call onComplete when finished
  useEffect(() => {
    if (currentIndex >= cards.length - 1 && studiedCards.size === cards.length) {
      onComplete?.();
    }
  }, [currentIndex, studiedCards.size, cards.length, onComplete]);

  // Call onCardChange when card changes
  useEffect(() => {
    if (currentCard) {
      onCardChange?.(currentIndex, currentCard);
    }
  }, [currentIndex, currentCard, onCardChange]);

  const goToNext = useCallback(() => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, cards.length]);

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  const goToCard = useCallback((index: number) => {
    if (index >= 0 && index < cards.length) {
      setCurrentIndex(index);
    }
  }, [cards.length]);

  const handleCardFlip = useCallback((isFlipped: boolean) => {
    if (isFlipped) {
      setFlippedCards(prev => new Set(prev).add(currentIndex));
      setStudiedCards(prev => new Set(prev).add(currentIndex));
    }
  }, [currentIndex]);

  const markAsStudied = useCallback(() => {
    setStudiedCards(prev => new Set(prev).add(currentIndex));
  }, [currentIndex]);

  const resetProgress = useCallback(() => {
    setFlippedCards(new Set());
    setStudiedCards(new Set());
    setCurrentIndex(0);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        goToNext();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        goToPrevious();
        break;
      case 'Home':
        event.preventDefault();
        goToCard(0);
        break;
      case 'End':
        event.preventDefault();
        goToCard(cards.length - 1);
        break;
    }
  }, [goToNext, goToPrevious, goToCard, cards.length]);

  console.log('FlashCardDeck rendered with cards:', cards.length);
  console.log('Current card:', currentCard);

  if (!cards || cards.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Không có thẻ nào để hiển thị</p>
        <p className="text-gray-400 text-sm mt-2">Debug: cards = {JSON.stringify(cards)}</p>
      </div>
    );
  }

  if (!currentCard) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Không có thẻ hiện tại để hiển thị</p>
        <p className="text-gray-400 text-sm mt-2">Debug: currentIndex = {currentIndex}, cards.length = {cards.length}</p>
      </div>
    );
  }

  return (
    <div 
      className={cn("max-w-2xl mx-auto", className)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="application"
      aria-label="Flashcard deck"
    >
      {/* Progress Section */}
      {showProgress && (
        <div className="mb-6 space-y-4">
          <div className="flex items-center justify-between text-sm text-gray-300">
            <span>Tiến độ: {currentIndex + 1} / {cards.length}</span>
            <span>Đã học: {studiedCards.size} / {cards.length}</span>
          </div>
          
          <div className="space-y-2">
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`Tiến độ: ${Math.round(progress)}%`}
              />
            </div>
            
            <div className="w-full bg-gray-700 rounded-full h-1">
              <div 
                className="bg-gradient-to-r from-green-400 to-green-500 h-1 rounded-full transition-all duration-300"
                style={{ width: `${studiedProgress}%` }}
                role="progressbar"
                aria-valuenow={studiedProgress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`Đã học: ${Math.round(studiedProgress)}%`}
              />
            </div>
          </div>
        </div>
      )}

      {/* Main FlashCard */}
      <div className="mb-6">
        <FlashCard
          card={currentCard}
          onFlip={handleCardFlip}
          theme={studiedCards.has(currentIndex) ? 'green' : 'amber'}
          className="mx-auto"
          height="20rem"
        />
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200",
            currentIndex === 0
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg"
          )}
          aria-label="Thẻ trước"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Trước
        </button>

        <div className="flex items-center gap-2">
          {/* Quick Actions */}
          <button
            onClick={markAsStudied}
            className={cn(
              "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              studiedCards.has(currentIndex)
                ? "bg-green-500 text-white"
                : "bg-gray-600 text-gray-300 hover:bg-gray-500"
            )}
            aria-label={studiedCards.has(currentIndex) ? "Đã đánh dấu là đã học" : "Đánh dấu là đã học"}
          >
            {studiedCards.has(currentIndex) ? "✓ Đã học" : "Đánh dấu"}
          </button>

          <button
            onClick={resetProgress}
            className="px-3 py-2 bg-gray-600 text-gray-300 hover:bg-gray-500 rounded-lg text-sm font-medium transition-all duration-200"
            aria-label="Đặt lại tiến độ"
          >
            Reset
          </button>
        </div>

        <button
          onClick={goToNext}
          disabled={currentIndex === cards.length - 1}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200",
            currentIndex === cards.length - 1
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg"
          )}
          aria-label="Thẻ sau"
        >
          Sau
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Card Index Indicators */}
      <div className="flex flex-wrap justify-center gap-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToCard(index)}
            className={cn(
              "w-8 h-8 rounded-full text-sm font-medium transition-all duration-200",
              index === currentIndex
                ? "bg-amber-500 text-white shadow-lg scale-110"
                : studiedCards.has(index)
                ? "bg-green-500 text-white"
                : "bg-gray-600 text-gray-300 hover:bg-gray-500"
            )}
            aria-label={`Đi đến thẻ ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Completion Message */}
      {studiedCards.size === cards.length && (
        <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-center">
          <div className="text-green-400 font-semibold mb-2">🎉 Chúc mừng!</div>
          <div className="text-gray-300">Bạn đã hoàn thành tất cả {cards.length} thẻ học!</div>
        </div>
      )}

      {/* Keyboard Shortcuts Help */}
      <div className="mt-4 text-xs text-gray-500 text-center">
        <p>Phím tắt: ← → (điều hướng), Space/Enter (lật thẻ), Home/End (đầu/cuối)</p>
      </div>
    </div>
  );
}

// Flash Card Data — MLN111: Sự hình thành Triết học Mác-Lênin
export const flashCardData: FlashCardData[] = [
  {
    id: 1,
    question: "Triết học Mác-Lênin ra đời vào khoảng thời gian nào?",
    answer: "Giữa thế kỷ XIX (những năm 1840), được Lenin phát triển đầu thế kỷ XX"
  },
  {
    id: 2,
    question: "Ba nguồn gốc lý luận trực tiếp của triết học Mác là gì?",
    answer: "Triết học cổ điển Đức, Kinh tế chính trị cổ điển Anh, Chủ nghĩa xã hội không tưởng Pháp"
  },
  {
    id: 3,
    question: "Marx kế thừa yếu tố nào từ triết học Hegel?",
    answer: "Phép biện chứng (tư tưởng về sự vận động, phát triển và mâu thuẫn)"
  },
  {
    id: 4,
    question: "Marx kế thừa yếu tố nào từ triết học Feuerbach?",
    answer: "Chủ nghĩa duy vật (thừa nhận thế giới vật chất tồn tại khách quan)"
  },
  {
    id: 5,
    question: "Hạn chế lớn nhất của chủ nghĩa xã hội không tưởng (Saint-Simon, Fourier, Owen) là gì?",
    answer: "Không thấy được vai trò và sứ mệnh lịch sử của giai cấp công nhân, không chỉ ra con đường hiện thực để xây dựng xã hội mới"
  },
  {
    id: 6,
    question: "Ba phát minh khoa học tự nhiên lớn thế kỷ XIX tạo tiền đề cho triết học Mác là gì?",
    answer: "Định luật bảo toàn và chuyển hóa năng lượng, Thuyết tiến hóa của Darwin, Thuyết tế bào"
  },
  {
    id: 7,
    question: "Sự kiện kinh tế-xã hội nào tạo tiền đề trực tiếp cho sự ra đời của triết học Mác?",
    answer: "Cuộc Cách mạng Công nghiệp ở Tây Âu, sự hình thành giai cấp vô sản và mâu thuẫn gay gắt giữa tư sản – vô sản"
  },
  {
    id: 8,
    question: "Ba phong trào công nhân tiêu biểu đầu thế kỷ XIX là gì?",
    answer: "Phong trào Hiến chương (Anh 1838-1850), khởi nghĩa thợ dệt Lyon (Pháp 1831-1834), khởi nghĩa thợ dệt Silesia (Đức 1844)"
  },
  {
    id: 9,
    question: "Karl Marx sinh năm nào, ở đâu?",
    answer: "Ngày 5/5/1818 tại Trier, Đức"
  },
  {
    id: 10,
    question: "Luận án tiến sĩ của Marx (1841) nghiên cứu về đề tài gì?",
    answer: "Sự khác biệt giữa triết học tự nhiên của Democritus và Epicurus"
  },
  {
    id: 11,
    question: "Tác phẩm nào của Marx lần đầu phác thảo học thuyết về sự tha hóa lao động?",
    answer: "Bản thảo Kinh tế-Triết học 1844"
  },
  {
    id: 12,
    question: "Câu nổi tiếng nhất trong '11 Luận cương về Feuerbach' (1845) của Marx là gì?",
    answer: "'Các nhà triết học chỉ giải thích thế giới bằng những cách khác nhau; vấn đề là phải cải tạo nó.'"
  },
  {
    id: 13,
    question: "Tác phẩm nào lần đầu trình bày có hệ thống quan niệm duy vật về lịch sử?",
    answer: "Hệ tư tưởng Đức (1845-1846), do Marx và Engels viết chung"
  },
  {
    id: 14,
    question: "Tuyên ngôn của Đảng Cộng sản được công bố năm nào? Do ai viết?",
    answer: "Năm 1848, do Karl Marx và Friedrich Engels viết"
  },
  {
    id: 15,
    question: "Câu mở đầu nổi tiếng của Tuyên ngôn Đảng Cộng sản là gì?",
    answer: "'Một bóng ma đang ám ảnh châu Âu — bóng ma chủ nghĩa cộng sản.'"
  },
  {
    id: 16,
    question: "Bộ 'Tư bản' (Das Kapital) Tập 1 của Marx xuất bản năm nào?",
    answer: "Năm 1867"
  },
  {
    id: 17,
    question: "Học thuyết kinh tế trung tâm trong bộ 'Tư bản' của Marx là gì?",
    answer: "Học thuyết giá trị thặng dư — phân tích bản chất bóc lột của chủ nghĩa tư bản"
  },
  {
    id: 18,
    question: "Friedrich Engels có vai trò gì sau khi Marx qua đời (1883)?",
    answer: "Hoàn thiện Tập 2 (1885) và Tập 3 (1894) bộ Tư bản, tiếp tục bảo vệ và phổ biến chủ nghĩa Mác"
  },
  {
    id: 19,
    question: "Lenin bảo vệ chủ nghĩa duy vật biện chứng qua tác phẩm nào?",
    answer: "'Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán' (1908)"
  },
  {
    id: 20,
    question: "Tác phẩm nào của Lenin phát triển sâu sắc phép biện chứng duy vật?",
    answer: "'Bút ký triết học' (1914-1916)"
  },
  {
    id: 21,
    question: "Lenin phân tích bản chất của chủ nghĩa đế quốc trong tác phẩm nào?",
    answer: "'Chủ nghĩa đế quốc, giai đoạn tột cùng của chủ nghĩa tư bản' (1916)"
  },
  {
    id: 22,
    question: "Tác phẩm nào của Lenin phát triển học thuyết Mác về nhà nước vô sản?",
    answer: "'Nhà nước và Cách mạng' (1917)"
  },
  {
    id: 23,
    question: "Cách mạng Tháng Mười Nga diễn ra vào ngày nào?",
    answer: "Ngày 7/11/1917 (theo lịch cũ là 25/10/1917)"
  },
  {
    id: 24,
    question: "Ý nghĩa triết học của Cách mạng Tháng Mười Nga là gì?",
    answer: "Minh chứng vĩ đại nhất cho sức sống thực tiễn của triết học Mác-Lênin — không chỉ giải thích mà còn cải tạo thế giới"
  },
  {
    id: 25,
    question: "Hai bộ phận cấu thành của triết học Mác-Lênin là gì?",
    answer: "Chủ nghĩa duy vật biện chứng (thế giới quan) và Chủ nghĩa duy vật lịch sử (phương pháp luận)"
  },
  {
    id: 26,
    question: "Ba quy luật cơ bản của phép biện chứng duy vật là gì?",
    answer: "Thống nhất và đấu tranh của các mặt đối lập; Lượng đổi chất đổi; Phủ định của phủ định"
  },
  {
    id: 27,
    question: "Đặc trưng nổi bật nhất của triết học Mác-Lênin so với các hệ thống triết học trước đó là gì?",
    answer: "Thống nhất giữa tính khoa học và tính cách mạng — không chỉ giải thích mà còn cải tạo thế giới"
  },
  {
    id: 28,
    question: "Vai trò của triết học Mác-Lênin đối với Việt Nam là gì?",
    answer: "Là nền tảng tư tưởng, kim chỉ nam cho hành động của Đảng và nhân dân trong sự nghiệp xây dựng và bảo vệ Tổ quốc"
  },
  {
    id: 29,
    question: "Chủ nghĩa duy vật lịch sử giải thích động lực phát triển xã hội là gì?",
    answer: "Mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất; đấu tranh giai cấp là động lực trực tiếp trong xã hội có giai cấp"
  },
  {
    id: 30,
    question: "Tại sao triết học Mác-Lênin được coi là 'vũ khí lý luận' của giai cấp vô sản?",
    answer: "Vì nó trang bị thế giới quan khoa học, phương pháp luận đúng đắn, chỉ ra quy luật vận động của xã hội và con đường giải phóng giai cấp vô sản"
  }
];
