import { getMovieCast} from "@/app/services";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { movieId } = await req.json();

  try {
    const response = await getMovieCast(movieId);

    if (!response) {
      return new NextResponse(JSON.stringify({ error: "Cast not found" }), {
        status: 404,
      });
    }

    return NextResponse.json({ response });
  } catch (error) {
    NextResponse.json({ error: "Failed to fetch cast" });
  }
};
