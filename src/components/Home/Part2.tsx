// Part2.tsx — Tiền đề lý luận: 3 nguồn gốc của triết học Mác-Lênin
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../aceternityui/draggable-card";
import ReactMarkdown from "react-markdown";
import { TypingAnimation } from "../magicui/Text Animations/TypingAnimation";
import ExhibitImage from "./ExhibitImage";
import HallLayout from "./HallLayout";
import RevealOnScroll from "./RevealOnScroll";

const cardStyle = "prose prose-stone max-w-xs p-4 text-stone-700 shadow-2xl select-none overflow-hidden gold-glow-panel bg-white/90 border border-red-800/15 rounded-2xl hover:shadow-[0_8px_30px_rgba(185,28,28,0.1)] hover:border-red-500/30 group";

const items = [
  {
    image: "/imgs/hegel-feuerbach.jpg",
    imageAlt: "Hegel và Feuerbach",
    placeholderLabel: "Chèn ảnh Hegel & Feuerbach",
    text: `
### Triết học cổ điển Đức
**Hegel (1770-1831)** và **Feuerbach (1804-1872)** là hai đại diện tiêu biểu nhất.

- **Hegel**: Phép biện chứng duy tâm — phát triển có quy luật, phủ định của phủ định
- **Feuerbach**: Chủ nghĩa duy vật — bác bỏ tôn giáo, đề cao con người

→ Marx kế thừa **phép biện chứng** của Hegel, cải tạo thành **duy vật biện chứng**.
    `,
    className: "absolute top-40 left-[55%] rotate-[6deg] " + cardStyle,
  },
  {
    image: "/imgs/halls/hall-2-1.jpg",
    imageAlt: "Kinh tế chính trị cổ điển",
    placeholderLabel: "Chèn ảnh Smith & Ricardo",
    text: `
### Kinh tế chính trị cổ điển Anh
**Adam Smith (1723-1790)** và **David Ricardo (1772-1823)** xây dựng lý luận kinh tế tư sản.

- Lý thuyết **giá trị-lao động**: Lao động là nguồn gốc của giá trị
- Phân tích mâu thuẫn giữa tư bản và lao động làm thuê

→ Marx phát triển thành **học thuyết giá trị thặng dư** — vũ khí lý luận của giai cấp công nhân.
`,
    className: "absolute top-10 left-[45%] rotate-[3deg] " + cardStyle,
  },
  {
    image: "/imgs/halls/hall-2-2.jpg",
    imageAlt: "CNXH không tưởng Pháp",
    placeholderLabel: "Chèn ảnh CNXH không tưởng Pháp",
    text: `
### Chủ nghĩa xã hội không tưởng Pháp
**Saint-Simon, Fourier, Owen** — mơ ước về xã hội tốt đẹp nhưng không thấy con đường thực hiện.

- Phê phán chế độ tư bản với tinh thần nhân đạo sâu sắc
- Đề xuất mô hình xã hội mới nhưng không dựa trên quy luật khách quan
- **Hạn chế**: Không thấy vai trò của giai cấp công nhân

→ Marx tiếp thu tư tưởng nhân đạo, bổ sung cơ sở **khoa học-cách mạng**.
    `,
    className: "absolute top-48 left-[18%] rotate-[-4deg] " + cardStyle,
  },
  {
    image: "/imgs/halls/hall-2-3.jpg",
    imageAlt: "Ba nguồn gốc lý luận",
    placeholderLabel: "Chèn ảnh ba nguồn gốc lý luận",
    text: `
## Ba Nguồn Gốc Lý Luận
Triết học Mác ra đời không phải từ hư không mà là sự **kế thừa có phê phán** và **phát triển sáng tạo** tinh hoa tư tưởng nhân loại:

1. **Triết học cổ điển Đức** → Phép biện chứng
2. **Kinh tế chính trị Anh** → Học thuyết giá trị lao động
3. **CNXH không tưởng Pháp** → Tư tưởng nhân đạo về xã hội mới
    `,
    className: "absolute top-12 left-[12%] rotate-[-3deg] " + cardStyle,
  },
];

const finalText = `
### Ý nghĩa
Marx và Engels không "phát minh" triết học từ đầu — mà đã **biến đổi cách mạng** di sản tư tưởng nhân loại, tạo ra một học thuyết **hoàn toàn mới về chất**:

- Kết hợp tính **khoa học** và tính **cách mạng**
- Đặt triết học phục vụ cho **giải phóng giai cấp vô sản**
`;

export default function Part2() {
  return (
    <HallLayout hallNumber={2}>
      <div className="w-full max-w-6xl mx-auto select-none">
        <RevealOnScroll>
          <h3 className="flex justify-center items-center relative uppercase text-red-700 font-heading text-4xl md:text-5xl mb-6 z-10 drop-shadow-[0_0_8px_rgba(185,28,28,0.2)]">
            <TypingAnimation
              startOnView={true}
              duration={50}
              className="text-red-700 font-heading text-3xl md:text-4xl text-center"
            >
              Ba nguồn gốc lý luận
            </TypingAnimation>
          </h3>

          <div className="relative text-xs text-stone-400 text-center mb-6">
            * Di chuột và kéo thả các tấm thẻ để khám phá các tiền đề lý luận
          </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={100}>
        <DraggableCardContainer className="relative flex min-h-[550px] w-full items-center justify-center overflow-visible">
          {/* Central Card */}
          <div className="bg-white/95 text-stone-700 border border-red-600/30 absolute prose prose-stone top-1/2 mx-auto max-w-sm -translate-y-1/2 text-start p-6 rounded-2xl shadow-[0_0_30px_rgba(185,28,28,0.15)] backdrop-blur-md z-0 pointer-events-none">
            <ReactMarkdown>{finalText}</ReactMarkdown>
          </div>

          {items.map((item, idx) => (
            <DraggableCardBody key={idx} className={item.className}>
              {"image" in item && item.image && (
                <ExhibitImage
                  src={item.image}
                  alt={item.imageAlt ?? ""}
                  placeholderLabel={item.placeholderLabel}
                  fit="contain"
                  aspectRatio="auto"
                  className="mb-3 [&_figure>div]:max-h-24 [&_figure>div]:min-h-[72px]"
                />
              )}
              <ReactMarkdown>{item.text}</ReactMarkdown>
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
        </RevealOnScroll>
      </div>
    </HallLayout>
  );
}
