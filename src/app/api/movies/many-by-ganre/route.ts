import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const { ganre, page } = await req.json();
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
//api.themoviedb.org/3/genre/movie/list?api_key=[MY_KEY]&language=en-US
try {
  const response = await fetch(
    `https://api.themoviedb.org/3/${ganre}/movie/list?api_key=${API_KEY}&language=en-US&page=${page ?? 1}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch list movies by genre from TMDB");
    }
    const data = await response.json();
    return new NextResponse(data, { status: 200 });
} catch (error) {
  console.error("Error in getTrailer:", error);
  throw error; // re-throw the error to be caught in the route handler
}
};