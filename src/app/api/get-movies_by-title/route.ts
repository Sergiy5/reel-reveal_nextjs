import { getMovieByTitle } from "@/app/services";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { title, page } = await req.json();

  try {
    const response = await getMovieByTitle(title, page);
    if (!response) {
      return new NextResponse(JSON.stringify({ error: "Movie not found" }), {
        status: 404,
      });
    }

    return NextResponse.json({ response }, {status: 200});
  } catch (error) {
    NextResponse.json({ error: "Failed to fetch movies" });
  }
};
