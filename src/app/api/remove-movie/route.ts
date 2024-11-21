import { connectDB } from "@/db/db";
import User from "@/db/models/user";
import { IStoredMovie } from "@/typification";
import { NextResponse, type NextRequest } from "next/server";

export async function DELETE(req: NextRequest) {
  const { userId, movieId } = await req.json();

  try {
    await connectDB();
    const user = await User.findById(userId);
    const filteredMovies = user.movies.filter(
      (movie: IStoredMovie) => movie.movieId !== movieId
    );

    user.movies = filteredMovies;

    const response = await user.save();

    return NextResponse.json(response, { status: 200 });
  } catch (error) {}
}
