import { fetchMovies } from "../../controllers/fetchMovies";
import { NextRequest, NextResponse } from "next/server";

export async function GET (
  req: NextRequest,
) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
    if (req.method === "GET") {

      try {
        const topRatedMovies = await fetchMovies('top_rated',
          page as string
          );
          return NextResponse.json(topRatedMovies);
    
      } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to fetch top rated movies" });
      }
    } else {
    return NextResponse.json({ message: "Something went wron ..." });
    }
}

