import { OpenAI } from "openai";


export const POST = async (
  req: Request,
) => {
  
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    if (req.method === "POST") {
      
        const { prompt } = await req.json();
        
      
    if (!prompt) {
     return Response.json({ error: "Prompt is required" });
      
    }

    try {
      const result = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
      });
        
        // console.log('RESULT OPENAI', result)
        
      const message = result?.choices?.[0]?.message?.content
        ?.trim()
        .replace("\n", "");

      if (message) {
        return Response.json({ response: message });
      } else {
       return Response.json({ error: "No response from OpenAI" });
      }
    } catch (error: any) {
    return  Response.json({ error: error.message });
    }
  } else {
   return Response.json({ error: "Method not allowed" });
  }
}
