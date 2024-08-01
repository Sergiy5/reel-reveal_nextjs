import { getTrailer } from "@/app/services";
import { NextResponse } from "next/server";

export const POST = async (req: Request): Promise<NextResponse> => {
  try {
    const { movieId } = await req.json();
    const response = await getTrailer(movieId);

    if (!response) {
      return new NextResponse(JSON.stringify({ error: "Trailer not found" }), {
        status: 404,
      });
    }

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Error in POST /api/get-trailer_id:", error);
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
