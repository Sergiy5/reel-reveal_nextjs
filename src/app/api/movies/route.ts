"use server"
// export const dynamic = "force-dynamic";

import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
 
  const { searchParams } = new URL(request.url);
  const movie = searchParams.get("query");

  const TOKEN = process.env.BEARER_TOKEN_TMDB;

  try {
    const results = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&language=en-US`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    ).then((res) => res.json());

    // console.log("?????????????results++++++", results);

    return NextResponse.json(results);
  } catch (error) {
    console.log("EEEEEEERRRRROOOOORRRRR", error);
  }
}
