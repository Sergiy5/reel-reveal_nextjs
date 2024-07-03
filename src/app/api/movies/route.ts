import { getMovies } from "../../actions/getMovies";
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

  try {
    const movies = await getMovies(
      category as string,
      parseInt(page as string, 10)
    );
   
    return NextResponse.json(movies.data.results, {status: 200});
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, {status: 500});
  }
}
// const urlSearchMovie = (movie: string) => {
//   return `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`;
// };