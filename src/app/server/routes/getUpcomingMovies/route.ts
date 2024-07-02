import { fetchMovies } from "../../controllers/fetchMovies";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {

  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");

  if (req.method === "GET") {
    try {
      const upcomingMovies = await fetchMovies("upcoming", page as string);

      return NextResponse.json(upcomingMovies);
    } catch (error) {
      console.error(error);

      return NextResponse.json({ error: "Failed to fetch top upcoming movies" });
    }
  } else {
    return NextResponse.json({ message: "Something went wron ..." });
  }
};
