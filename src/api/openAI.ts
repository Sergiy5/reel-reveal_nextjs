// import axios from "axios";
// import { NextApiRequest, NextApiResponse } from "next";

// export const openAI = async (
//   req: NextApiRequest,
//   res: NextApiResponse
// ) => {

//   if (req.method === "POST") {
//     const { prompt } = req.body;

//     if (!prompt) {
//       res.status(400).json({ error: "Prompt is required" });
//       return;
//     }
//     const openaiApiKey = process.env.OPENAI_API_KEY;

//      if (!openaiApiKey) {
//        res.status(500).json({ error: "OpenAI API key is not defined" });
//        return;
//      }

// const openaiInstance = axios.create({
//   baseURL: "https://api.openai.com/v1",
//   headers: {
//     Authorization: `Bearer ${openaiApiKey}`,
//     "Content-Type": "application/json",
//   },
// });
//     try {
//       const result = await openaiInstance.post("/chat/completions", {
//         messages: [{ role: "user", content: prompt }],
//         model: "gpt-3.5-turbo",
//       });

//       const response = result.data?.choices?.[0]?.message?.content
//       ?.trim()
//       .replace("\n", "");
      
//       if (response) {
//         res.status(200).json({
//           response,
//         });

//       } else {
//         res.status(500).json({ error: "No response from OpenAI" });
//       }
//     } catch (error: any) {
//       res.status(500).json({ error: error.message });
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }
