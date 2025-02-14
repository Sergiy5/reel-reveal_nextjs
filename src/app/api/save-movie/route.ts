import { NextResponse } from "next/server";
import User from "@/db/models/user";
import { connectDB } from "@/db/db";
import { IStoredMovie } from "@/typification";

export const POST = async (req: Request) => {
  const { movie, userId } = await req.json();

  try {
    await connectDB();
    const user = await User.findById(userId);
    // console.log("user_>>>>>>>>>>>>>", user);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    if (user.movies.length > 0) {
      const indexMovie = user.movies?.findIndex(
        (m: IStoredMovie) => m.movieId === movie.movieId
      );

      if (indexMovie === -1) {
        user.movies.push(movie);

        await user.save();

        return NextResponse.json(user.movies);
      } else {
        user.movies[indexMovie] = movie;

        await user.save();
        return NextResponse.json(user.movies);
      }
    } else {
      user.movies.push(movie);

      await user.save();

      return NextResponse.json(user.movies);
    }

  } catch (error) {
    console.log(error);
  }
};
