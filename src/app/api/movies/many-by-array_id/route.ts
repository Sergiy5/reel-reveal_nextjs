import { getManyMoviesByIds } from "@/app/services";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();

  try {
    const movies = await getManyMoviesByIds(body);

    if (!movies) {
      return new NextResponse(JSON.stringify({ error: "Movies not found" }), {
        status: 404,
      });
    }

    return NextResponse.json({ movies });
  } catch (error) {
    NextResponse.json({ error: "Failed to fetch movies" });
  }
};
