"use client";

import { GetShowMovies } from "./GetShowMovies";
import { Loader } from "./ui/Loader";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import useSWR from "swr";
import { ISessionUserSignal } from "@/context/UserContext";
import { fetchMovieDataFromAPI } from "../actions/fetchMovieDataFromAPI";

export interface SimilarMoviesProps {
  title?: string;
  movieId: number;
  sessionUser: ISessionUserSignal;
}
export const SimilarMovies: React.FC<SimilarMoviesProps> = ({
  title,
  sessionUser,
  movieId,
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
      {similarMovies && similarMovies.length && (
        <GetShowMovies
          title={"Similar movies"}
          movies={similarMovies}
          sessionUser={sessionUser}
        />
      )}
    </>
  );
};
