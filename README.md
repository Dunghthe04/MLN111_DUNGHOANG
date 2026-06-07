# 📚 Triết học Mác-Lênin – Tài liệu ôn tập MLN111

> *"Nền tảng lý luận – Phương pháp luận – Ứng dụng tri thức"*

Sản phẩm chuyển đổi số cho môn **MLN111 – Triết học Mác-Lênin**, trình bày các nguyên lý cơ bản và ứng dụng dưới dạng web tương tác hiện đại.

## ✨ Tính năng

- 🏠 **Trang chủ** – Giới thiệu tổng quan về nội dung môn học
- 📖 **Nội dung chương** – 5 phần chính: Duy vật biện chứng, Duy vật lịch sử, Giá trị thặng dư, Đấu tranh giai cấp, Chủ nghĩa xã hội
- 🔍 **Tổng quan kiến thức** – Hệ thống hóa toàn bộ nội dung
- 🃏 **Flashcard** – Ôn tập bằng thẻ ghi nhớ tương tác
- ❓ **Quiz** – Kiểm tra kiến thức trắc nghiệm
- 💬 **Hỏi & Đáp** – Giải đáp thắc mắc
- 🤖 **AI Chat** – Chatbot hỗ trợ ôn tập tích hợp Gemini AI
- 📑 **Tài liệu tham khảo** – Nguồn tư liệu và tài liệu gốc
- 👥 **Thành viên** – Thông tin nhóm thực hiện

## 🛠️ Công nghệ sử dụng

| Công nghệ | Mục đích |
|---|---|
| [React 19](https://react.dev/) | UI Framework |
| [Vite 7](https://vite.dev/) | Build tool |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [TailwindCSS 4](https://tailwindcss.com/) | Styling |
| [React Router 7](https://reactrouter.com/) | Routing |
| [Zustand](https://zustand.docs.pmnd.rs/) | State management |
| [Motion](https://motion.dev/) | Animations |
| [Radix UI](https://www.radix-ui.com/) | Accessible components |
| [Google Gemini AI](https://ai.google.dev/) | AI Chatbot |
| [Firebase](https://firebase.google.com/) | Backend services |
| [Lucide React](https://lucide.dev/) | Icons |

## 🚀 Cài đặt & Chạy

### Yêu cầu

- [Node.js](https://nodejs.org/) >= 20
- npm hoặc pnpm

### Cài đặt

```bash
# Clone repo
git clone https://github.com/Dunghthe04/MLN111_DUNGHOANG.git
cd MLN111_DUNGHOANG

# Cài đặt dependencies
npm install
```

### Cấu hình biến môi trường

Tạo file `.env` ở thư mục gốc:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### Chạy development server

```bash
npm run dev
```

Truy cập [http://localhost:5173](http://localhost:5173) để xem.

### Build production

```bash
npm run build
```

Output sẽ nằm trong thư mục `dist/`.

## 📁 Cấu trúc dự án

```
MLN111_DUNGHOANG/
├── public/              # Static assets (images, icons)
├── src/
│   ├── assets/          # Asset imports
│   ├── components/      # Reusable UI components
│   │   ├── Home/        # Components trang chủ
│   │   ├── Part3/       # Components nội dung chương
│   │   ├── QnA/         # Components hỏi đáp
│   │   ├── Quiz/        # Components trắc nghiệm
│   │   ├── FloatAIChat  # Chatbot AI floating
│   │   ├── NavBar       # Thanh điều hướng
│   │   └── ...
│   ├── data/            # Dữ liệu JSON (nội dung bài học)
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Các trang chính
│   ├── services/        # API services
│   ├── stores/          # Zustand stores
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Root component & routing
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── functions/           # Serverless functions (Netlify)
├── netlify.toml         # Cấu hình deploy Netlify
├── vercel.json          # Cấu hình deploy Vercel
├── vite.config.ts       # Cấu hình Vite
└── package.json
```

## 🌐 Deploy

Dự án hỗ trợ deploy lên **Netlify** hoặc **Vercel**:

### Netlify
- Config đã có sẵn trong `netlify.toml`
- Thêm biến môi trường `VITE_GEMINI_API_KEY` trong Netlify Dashboard

### Vercel
- Config đã có sẵn trong `vercel.json`
- Thêm biến môi trường `VITE_GEMINI_API_KEY` trong Vercel Dashboard

## 👥 Thành viên nhóm

Dự án được thực hiện bởi sinh viên môn MLN111.

## 📄 Giấy phép

Dự án được phân phối dưới giấy phép được mô tả trong file [LICENSE](./LICENSE).
