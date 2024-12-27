import { updateMovieInDB } from "@/app/actions";
import { saveMovieToDB } from "@/app/actions/saveMovieToDB";
import { IMovieInDB } from "@/app/components/ui/MovieCard";

export const updateMoviesInDBAndMutate = (
  userId: string,
  updatedMovie: IMovieInDB,
  updatedMovies: IMovieInDB[],
  mutate: any
) => {
  mutate("/api/get-all-liked_movies", updateMovieInDB(userId, updatedMovie), {
    optimisticData: updatedMovies,
    rollbackOnError: true,
  });
};
