import { generatorUrl } from "@/lib";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  res: NextResponse
) {
  if (req.method !== "GET") {
    return NextResponse.json({ error: "Method not allowed" }, {status: 405});
  }

  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const category = searchParams.get("category");


  if (!category || !page) {
    return NextResponse.json(
      { error: "Category and page are required" },
      { status: 400 }
    );
  }
  const token = process.env.BEARER_TOKEN_TMDB;
  
  const url = generatorUrl(category, parseInt(page, 10));
  
  try {
    const movies = await axios.get(url, { headers: {
        Authorization: `Bearer ${token}`,
    },
    })
    
    return NextResponse.json(movies.data.results, {status: 200});
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, {status: 500});
  }
}
// const urlSearchMovie = (movie: string) => {
//   return `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`;
// };