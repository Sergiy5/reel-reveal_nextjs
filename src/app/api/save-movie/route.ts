import { NextResponse } from "next/server";
import User from "@/db/models/user";
import { connectDB } from "@/db/db";
import { IStoredMovie } from "@/typification";

export const POST = async (req: Request) => {
  const { movie, userId } = await req.json();

  try {
    await connectDB();
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (user.movies) {

      const filteredMovies = user.movies.filter(
        (m: IStoredMovie) => m.movieId !== movie.movieId
      );

      user.movies = [movie, ...filteredMovies];

      await user.save();
      return NextResponse.json(user.movies);
    }

    user.movies.push(movie);
    await user.save();

    return NextResponse.json(user.movies);
  } catch (error) {
    console.log(error);
  }
};