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
      model: "gpt-5-nano",
      temperature: 1,
    });
    
    const message = result?.choices?.[0]?.message?.content
    ?.trim()
    .replace("\n", "");
    
    // console.log("RESPONSE=====>>>>>>>>>>>>>>>", result);
    if (message) {

      return NextResponse.json({ response: message });
    } else {

     throw new Error("Error fetching data from OpenAI... Try again.");
    }
  } catch (error: any) {
    if (error?.code === "insufficient_quota") {
      console.error("OpenAI quota exceeded. Check billing or usage limits.");
    }
// console.log("ERROR_<>>>>>>>>>>>>>>>>>>>>", error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

POST.displayName = "OpenAI Chat API POST Handler";