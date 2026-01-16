import { NextResponse } from "next/server";
import { options } from "../options";

export const GET = async (req: Request) => {
  const {searchParams} = new URL(req.url)
    const movieId = searchParams.get("movieId");
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
            options
        )

        const data = await response.json();

        // Cache similar movies for 6 hours
        return NextResponse.json(data.results, {
          status: 200,
          headers: {
            "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=43200",
          },
        });


    } catch (error) {
        console.error(error)
       return new NextResponse(
         JSON.stringify({
           error: (error as Error).message || "Failed to fetch similar movies",
         }),
         {
           status: 500,
         }
       );
    }

}