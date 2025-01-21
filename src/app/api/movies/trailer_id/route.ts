import { getTrailer } from "@/app/services";
import { NextResponse } from "next/server";

export const GET = async (req: Request): Promise<NextResponse> => {
  const { searchParams } = new URL(req.url);
  const movieId = searchParams.get("movieId");
  const KEY = process.env.TMDB_API_KEY;
  console.log("trailerId_>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", movieId);
  try {
    // const { movieId } = await req.json();
    
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${KEY}`
    );

    if (!response) {
      return new NextResponse(JSON.stringify({ error: "Trailer not found" }), {
        status: 404,
      });
    }

    const data = await response.json();

    return NextResponse.json(data, { status: 200 });

  } catch (error) {

    console.error("Error in POST /api/get-trailer_id:", error);
  return NextResponse.json(
    { error: "Internal server error", details: error},
    { status: 500 }
  );
  }
};
