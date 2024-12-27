import { saveMovieToDB } from "@/app/actions/saveMovieToDB";
import { IMovieInDB } from "@/app/components/ui/MovieCard";

export const addMovieToDBAndMutate = async (
  userId: string,
  newMovie: IMovieInDB,
  mutate: any
) => {
  mutate("/api/get-all-liked_movies", saveMovieToDB(userId, newMovie), {
    optimisticData: (movies: IMovieInDB[]) =>
      movies ? [newMovie, ...movies] : [newMovie],
    rollbackOnError: true,
  });
};
