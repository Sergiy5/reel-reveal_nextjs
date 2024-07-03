import { quizMovies } from "@/app/actions/quizMovies";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest
) => {
const { searchParams } = new URL(req.url);
const arrMovies = searchParams.get("strings");

    const stringifyMovies = JSON.stringify(arrMovies);
    
  if (req.method === "GET") {
      
      if (!arrMovies) {
        return NextResponse.json({ error: "Movie titles are required" });
      }

    try {
        const movies = await quizMovies(stringifyMovies);

        return NextResponse.json(movies);
        
    } catch (error: any) {
      console.error("Error fetching quiz movies:", error.message);
      return NextResponse.json(
        { error: "Failed to fetch quiz movies" },
        { status: 500 }
      );
    }
  } 
}
