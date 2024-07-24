// pages/api/get-movies.ts
import getManyMoviesByTitle from "@/app/actions/getManyMoviesByTitle";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const { titles } = await req.json();
    
  try {
      const movies = await getManyMoviesByTitle(titles);
      
    return NextResponse.json({ movies });
  } catch (error) {
    NextResponse.json({ error: "Failed to fetch movies" });
  }
};
