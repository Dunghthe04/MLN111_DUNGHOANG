import { GoogleGenAI, type GenerateContentResponse } from "@google/genai";
import { useMutation } from "@tanstack/react-query";
// import ky from "ky";
import type { ChatMessage } from "../components/FloatAIChat";

interface chatData {
  userChat: string;
  chatHistory: ChatMessage[]
  setChatHistory: React.Dispatch<React.SetStateAction<ChatMessage[]>>
}

const aiInstruction = `
Bạn là MLN111Bot.
Nhiệm vụ của bạn:
1. Chỉ trả lời cho:
   - Các câu chào hỏi xã giao.
   - Các câu hỏi liên quan đến "Triết học Mác-Lênin và lý thuyết giá trị thặng dư", bao gồm:
     + Duy vật biện chứng và duy vật lịch sử.
     + Quan hệ giai cấp, đấu tranh giai cấp và cách mạng.
     + Giá trị thặng dư, bóc lột và nền kinh tế tư bản.
     + Con đường xây dựng chủ nghĩa xã hội và mô hình xã hội chủ nghĩa.
     + Ứng dụng tư tưởng Mác-Lênin trong phân tích xã hội, chính trị và kinh tế.
     + Ý nghĩa lịch sử và hiện đại của học thuyết Mác-Lênin.
     + ...có thể mở rộng nhiều nữa, miễn là trong phạm vi "Mác-Lênin"...
2. Với mọi câu hỏi khác, bạn phải từ chối và trả lời thân thiện, ví dụ:
   "Xin lỗi, câu hỏi này nằm ngoài phạm vi bài học. Bạn hãy thử hỏi một câu khác liên quan đến chủ đề Mác-Lênin nhé!"
3. Phong cách trả lời:
   - Luôn trả lời bằng tiếng việt, dù cho câu hỏi có là tiếng anh.
   - Ngắn gọn, rõ ràng, dễ hiểu.
   - Thân thiện, khuyến khích người học hỏi thêm trong phạm vi bài học.
   - Có thể trích dẫn các lập luận của Mác hoặc Lênin nếu phù hợp.
`;

const googleGemini = new GoogleGenAI({apiKey: import.meta.env.VITE_GEMINI_API_KEY});

export function useAiChatMutation() {
  return useMutation<GenerateContentResponse, Error, chatData>({
    mutationFn: async (chatData) => {
      if (!chatData.userChat) throw new Error("Không chat với tôi thì gửi làm gì? >:(");

      chatData.setChatHistory(prev => [...prev,
      { isBot: false, msg: chatData.userChat, sentAt: new Date() }
      ])

      // nếu wifi mạnh hơn thì nên dùng cloudfare function như này
      // return await ky.post("/api/gemini", {
      //   json: chatData
      // }).json<GenerateContentResponse>()

      const chatModel = googleGemini.chats.create({
        model: "gemini-2.5-flash",
        history: chatData.chatHistory?.map(chat => ({
          role: chat.isBot ? "model" : "user",
          parts: [{ text: chat.msg }]
        })),
        config: {
          thinkingConfig: {
            thinkingBudget: 0
          },
          systemInstruction: aiInstruction
        }
      })

      return await chatModel.sendMessage({ message: chatData.userChat })
    },
    onSuccess: (data, chatData) => {
      chatData.setChatHistory(prev => [...prev, {
        isBot: true,
        // msg: data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "Lỗi không xác định",
        msg: data.text ?? "Lỗi không xác định",
        sentAt: new Date()
      }])
    },
    onError: (error, chatData) => {
      console.log("Error:" + error.message)
      chatData.setChatHistory(prev => [...prev, {
        isBot: true,
        msg: "Lỗi mạng!",
        sentAt: new Date()
      }])
    }
  })
}