import { NextResponse } from "next/server";
import { fetchMovies } from "@/app/actions/fetchMovies";

export async function GET(req: Request) {
  if (req.method !== "GET") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");

  try {
    const upcomingMovies = await fetchMovies("upcoming", page as string);
    
    return NextResponse.json(upcomingMovies);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Failed to fetch top upcoming movies",
      },
      { status: 500 }
    );
  }
}
