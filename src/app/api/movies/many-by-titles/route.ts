import { getManyMoviesByTitle } from "@/app/services/getManyMoviesByTitle";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  
const titles =  await req.json();

  try {
    const movies = await getManyMoviesByTitle(titles);
    if (!movies) {
      return new NextResponse(JSON.stringify({ error: "Movies not found" }), {
        status: 404,
      });
    }
    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    console.log("ERROR", error);
     return new NextResponse(
       JSON.stringify({ error: "Internal server error" }),
       { status: 500 }
     );
  }
};
