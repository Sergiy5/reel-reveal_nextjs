import { fetchMovies } from "@/app/actions/fetchMovies";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {

  if (req.method !== "GET") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
  };

  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");

  try {
    const topRatedMovies = await fetchMovies("top_rated", page as string);

    return NextResponse.json(topRatedMovies);
    
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch top rated movies" },
      { status: 500 }
    );
  }
};
