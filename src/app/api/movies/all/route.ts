import { NextRequest, NextResponse } from "next/server";
import { options } from "../options";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page") || "1";
  const filter = searchParams.get("filter") || "";

  let filters;
 try {
   filters =
     filter && filter !== "undefined"
       ? JSON.parse(decodeURIComponent(filter))
       : { genresId: [], years: [], rating: [] };
 } catch (error) {
   // Handle cases where JSON parsing fails
   filters = { genresId: [], years: [], rating: [] };
 }

  const { genresId, years, rating } = filters;

  const MAIN_URL: string = `https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&page=${page}`;
  
  const URL_WITH_SEARCH = new URL(MAIN_URL);

  years.length > 0
  ? URL_WITH_SEARCH.searchParams.append(
    "primary_release_year",
    encodeURIComponent(years.join(","))
  )
  : "";
  rating.length > 0
  ? URL_WITH_SEARCH.searchParams.append(
    "vote_average.gte",
    encodeURIComponent(rating.join(","))
  )
  : "";
  genresId.length > 0
  ? URL_WITH_SEARCH.searchParams.append(
    "with_genres",
    encodeURIComponent(genresId.join(","))
  )
  : "";
  
  try {
    
    const response = await fetch(URL_WITH_SEARCH, options);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch movies from TMDB. Status: ${response.status}`
      );
    }

    const data = await response.json();

    // console.log("RESPONSE_>>>>>>>>>>>>>>>>>>>>>>>>>_",data)
    
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) { 
    console.error("Error fetching movies:", error?.message);

    return NextResponse.json(
      { error: "Internal server error", details: error?.message },
      { status: 500 }
    );
  }
};
