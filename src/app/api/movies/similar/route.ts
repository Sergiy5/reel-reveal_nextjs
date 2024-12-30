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
        
        // if (!response.ok) {
        //     throw new Error("Failed to fetch similar movies from TMDB");
        // }
        const data = await response.json();
        // console.log(
        //   "===================================================================",
        //   data
        // );
        // console.log(data)

        return NextResponse.json(data.results, { status: 200 }); 


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


