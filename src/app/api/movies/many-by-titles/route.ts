import { getManyMoviesByTitle } from "@/app/services/getManyMoviesByTitle";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const titles = searchParams.get("titles") || "";

  const titlesArray = titles.split(",").map((title) => title.trim());

  try {
    const movies = await getManyMoviesByTitle(titlesArray);

    if (!movies) {
      return new NextResponse(JSON.stringify({ error: "Movies not found" }), {
        status: 404,
      });
    }
    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    console.log("ERROR", error);
     return new NextResponse(
       JSON.stringify({ error: "Internal server error" }),
       { status: 500 }
     );
  }
};
