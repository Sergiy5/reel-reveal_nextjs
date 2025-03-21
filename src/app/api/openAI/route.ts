'use server'

import { OpenAI } from "openai";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const { prompt } = await req.json();
// console.log("=========>>>>>>>>>>>>>>>>>>",prompt)
  if (!prompt) {

    return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
  }

  try {
    const result = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
      temperature: 0.8,
    });
    
    const message = result?.choices?.[0]?.message?.content
    ?.trim()
    .replace("\n", "");
    
    if (message) {

      return NextResponse.json({ response: message });
    } else {

      return NextResponse.json(
        { error: "No response from OpenAI" },
        { status: 500 }
      );
    }
  } catch (error: any) {

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

POST.displayName = "OpenAI Chat API POST Handler";