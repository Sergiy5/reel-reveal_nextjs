import { NextResponse } from "next/server";
import { options } from "../options";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const title = searchParams.get("title");
  // console.log("TITLE_>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", title);

  try {
    if (title === null) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${title}&language=en-US&page=${page}`,
      options
    );

    if (!response) {
      return new NextResponse(JSON.stringify({ error: "Movie not found" }), {
        status: 404,
      });
    }
    const data = await response.json();

    // Cache search results for 5 minutes
    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch movies" });
  }
};
