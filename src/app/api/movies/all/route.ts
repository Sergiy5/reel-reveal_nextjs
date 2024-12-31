import { NextRequest, NextResponse } from "next/server";
import { options } from "../options";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  // console.log("PAGE_>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", page);

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?language=en-US&page=${page}&sort_by=popularity.desc`,
      options
    );
    if (!response.ok) {
      throw new Error("Failed to fetch list movies by genre from TMDB");
    }
    const data = await response.json();
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", data);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error in many by genre:", error);
    throw error; // re-throw the error to be caught in the route handler
  }
};