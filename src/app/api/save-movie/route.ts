import { NextResponse } from "next/server";
import User from "@/db/models/user";
import { connectDB } from "@/db/db";
import { IStoredMovie } from "@/typification";

export const POST = async (req: Request) => {
  const { movie, email } = await req.json();

  try {
    await connectDB();
    const user = await User.findOne({ email });
    // console.log("USER_INROUTE_>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>:", user);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    //   console.log("user.movies_IN_ROUTE>>>>>>>>>>>>>", user.movies);
      
    if (user.movies) {
      const filteredMovies = user.movies.filter(
        (m: IStoredMovie) => m.movieId !== movie.movieId
        );
        
      const movieArray = [...filteredMovies, movie];
      user.movies = [...filteredMovies, movie];

      await user.save();
      return NextResponse.json(user);
      }
      
    user.movies.push(movie);
    await user.save();

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
  }
};
