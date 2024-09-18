"use client";

import { GetShowMovies } from "./GetShowMovies";
import { Loader } from "./ui/Loader";
import { fetchSimilarMovies } from "../actions";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import useSWR from "swr";

export interface SimilarMoviesProps {
  title: string;
}
export const SimilarMovies: React.FC<SimilarMoviesProps> = ({ title }) => {
  const {
    data: similarMovies,
    error,
    isValidating,
    mutate,
  } = useSWR(
    title ? [`similarMovies`, title] : null,
    () => fetchSimilarMovies(title),
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
      {similarMovies && similarMovies.length &&
        <GetShowMovies title={"Similar movies"} movies={similarMovies} />
      }
    </>
  );
};
