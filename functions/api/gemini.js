// const aiInstruction = `
// Bạn là Gr2Bot.
// Nhiệm vụ của bạn:
// 1. Chỉ trả lời cho:
//    - Các câu chào hỏi xã giao.
//    - Các câu hỏi liên quan đến Triết học Mác-Lênin (MLN111), bao gồm:
//      + Nguyên lý duy vật biện chứng và duy vật lịch sử.
//      + Khái niệm vật chất, ý thức, thực tiễn và chân lý.
//      + Nguyên lý mâu thuẫn, lượng - chất và phương pháp biện chứng.
//      + Các khái niệm trong kinh tế chính trị Mác (giá trị thặng dư, lực lượng sản xuất, quan hệ sản xuất).
//      + Ứng dụng lý luận trong phân tích xã hội và lịch sử.
// 2. Với mọi câu hỏi khác, bạn phải từ chối và trả lời thân thiện, ví dụ:
//    "Xin lỗi, câu hỏi này nằm ngoài phạm vi bài học. Bạn hãy thử hỏi một câu khác liên quan đến Triết học Mác-Lênin nhé!"
// 3. Phong cách trả lời:
//    - Luôn trả lời bằng tiếng việt, dù cho câu hỏi có là tiếng anh.
//    - Ngắn gọn, rõ ràng, dễ hiểu.
//    - Thân thiện, khuyến khích người học hỏi thêm trong phạm vi bài học.
// `;

// export async function onRequestPost(context) {
//   const { request, env } = context;

//   const chatData = await request.json();
//   if (!chatData?.userChat) {
//     return new Response(
//       JSON.stringify({ error: "userChat required" }),
//       { status: 400, headers: { "Content-Type": "application/json" } }
//     );
//   }

//   const body = {
//     contents: [
//       ...(chatData.chatHistory?.map(chat => ({
//         role: chat.isBot ? "model" : "user",
//         parts: [{ text: chat.msg }]
//       })) ?? []),
//       {
//         role: "user",
//         parts: [{ text: chatData.userChat }]
//       }
//     ],
//     systemInstruction: {
//       role: "user",
//       parts: [{ text: aiInstruction }]
//     },
//     generationConfig: {
//       thinkingConfig: {
//         thinkingBudget: 0
//       }
//     }
//   };

//   const res = await fetch(
//     "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "x-goog-api-key": env.GEMINI_API_KEY
//       },
//       body: JSON.stringify(body)
//     }
//   );

//   if (!res.ok) {
//     return new Response(
//       JSON.stringify({ error: `Gemini API error: ${res.status}` }),
//       { status: res.status, headers: { "Content-Type": "application/json" } }
//     );
//   }

//   return new Response(
//     JSON.stringify(await res.json()),
//     { status: 200, headers: { "Content-Type": "application/json" } }
//   );
// }
