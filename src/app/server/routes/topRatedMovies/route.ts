import { fetchMovies } from "../../controllers/fetchMovies";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {

  if (req.method !== "GET") NextResponse.json({ error: "Method not allowed" });

  const params = req.nextUrl.searchParams;
  const page = params.get("page");

  try {
    const topRatedMovies = await fetchMovies("top_rated", page as string);

    return NextResponse.json(topRatedMovies);
    
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "Failed to fetch top rated movies" });
  }
};
