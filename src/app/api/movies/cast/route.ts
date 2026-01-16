import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const movieId = searchParams.get("movieId");
  // console.log("movieId_>>>>>>>>>>>>>>>>>>", movieId);
  
  const API_KEY = process.env.TMDB_API_KEY;
  try {
     const response = await fetch(
       `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
     );

    if (!response) {
      return new NextResponse(JSON.stringify({ error: "Cast not found" }), {
        status: 404,
      });
    }
    const data = await response.json();

    // Cache cast info for 24 hours (rarely changes)
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=172800",
      },
    });
  } catch (error) {
    console.log(error);
     return NextResponse.json(
       { error: "Internal server error" },
       { status: 500 }
     );
  }
};
