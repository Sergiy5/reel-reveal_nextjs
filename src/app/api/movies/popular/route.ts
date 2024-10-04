import { getPopularMovies, getTrailer } from "@/app/services";
import { NextResponse } from "next/server";

export const POST = async (req: Request): Promise<NextResponse> => {

  try {
    const { page } = await req.json();
    const response = await getPopularMovies(page);

    if (!response) {
      
      return new NextResponse(JSON.stringify({ error: "Popular movies not found" }), {
        status: 404,
      });
    }

    return NextResponse.json( response );
  } catch (error) {
      
    return new NextResponse(
      JSON.stringify({
        error: (error as Error).message || "Failed to fetch movies",
      }),
      {
        status: 500,
      }
    );
  }
};
