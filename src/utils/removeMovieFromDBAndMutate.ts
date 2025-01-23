import { KeyedMutator, mutate } from "swr";
import { removeMovieFromDB } from "@/app/actions/removeMovieFromDB";
import { IMovieInDB } from "@/app/components/movieCard/MovieCard";

export const removeMovieFromDBAndMutate = (
  userId: string,
  movieId: number,
  mutate: any
) => {
  mutate("/api/get-all-liked_movies", removeMovieFromDB(userId, movieId), {
    optimisticData: (movies: IMovieInDB[]) =>
      movies.filter((m: IMovieInDB) => m.movieId !== movieId),
    rollbackOnError: true,
  });
};
