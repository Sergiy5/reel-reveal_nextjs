'use server'

import { OpenAI } from "openai";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const { prompt } = await req.json();

  if (!prompt) {
    return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
  }

  try {
    const result = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
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
