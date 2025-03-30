"use client";

import { GetShowMovies } from "@/app/components/getShowMovies/GetShowMovies";
import { Loader } from "../ui/Loader";
import useSWR from "swr";
import { ButtonOrLink } from "@/app/components/ui/ButtonOrLink";
import { fetchMovieDataFromAPI } from "@/app/actions/fetchMovieDataFromAPI";
import { ISessionUser } from "@/typification";

export interface SimilarMoviesProps {
  title?: string;
  movieId: number;
  sessionUser: ISessionUser;
}
export const SimilarMovies: React.FC<SimilarMoviesProps> = ({
  title,
  movieId,
  sessionUser,
}) => {
  const {
    data: similarMovies,
    error,
    isValidating,
    mutate,
  } = useSWR(
    movieId ? "/api/movies/similar" : null,
    () => fetchMovieDataFromAPI("/api/movies/similar", { movieId }),
    {
      revalidateOnFocus: false,
    }
  );

  if (isValidating) return <Loader />;

  if (error) {
    return (
      <ButtonOrLink onClick={() => mutate()} className="">
        Reload Similar Movies
      </ButtonOrLink>
    );
  }

  return (
    <>
      {similarMovies && similarMovies.length > 0 ? (
        <GetShowMovies
          title={"Similar movies"}
          movies={similarMovies}
          sessionUser={sessionUser}
        />
      ) : (
        <></>
      )}
    </>
  );
};
