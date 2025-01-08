"use client";

import { GetShowMovies } from "./GetShowMovies";
import { Loader } from "./ui/Loader";
import useSWR from "swr";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import { fetchMovieDataFromAPI } from "../actions/fetchMovieDataFromAPI";
import { sessionUser } from "@/typification";
// import { ISessionUserSignal } from "@/context/UserContext";

export interface SimilarMoviesProps {
  title?: string;
  movieId: number;
  sessionUser: sessionUser;
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
