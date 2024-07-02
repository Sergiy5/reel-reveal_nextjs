import { quizMovies } from "../../controllers/quizMovies";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  res: NextResponse
) => {
const { searchParams } = new URL(req.url);
const arrMovies = searchParams.get("strings");
    console.log('++++++++++++++ first +++++++++++', arrMovies)

    const stringifyMovies = JSON.stringify(arrMovies);
    
  if (req.method === "GET") {
      
      if (!arrMovies) {
        return NextResponse.json({ error: "Movie titles are required" });
      }

    try {
        const movies = await quizMovies(stringifyMovies);

     console.log('SERVER RESPONSE', movies)
      return NextResponse.json(movies);
    } catch (error: any) {
      console.error("Error fetching quiz movies:", error.message);
      return NextResponse.json({ error: "Failed to fetch quiz movies" });
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" });
  }
}
