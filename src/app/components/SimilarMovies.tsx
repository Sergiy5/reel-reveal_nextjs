"use client";

import { useEffect, useState } from "react";
import { Movie } from "@/typification";
import { firstElementsFromArray } from "@/utils";
import { GetShowMovies } from "./GetShowMovies";
import { fetchMoviesByTitle } from "../actions/fetchMoviesByTitle";
import { Loader } from "./ui/Loader";
import { fetchSimilarMovieFromOpenAI } from "../actions";
import { ButtonOrLink } from "./ui/ButtonOrLink";

export interface SimilarMoviesProps {
  title: string;
}
export const SimilarMovies: React.FC<SimilarMoviesProps> = ({ title }) => {
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const fetchSimilarFilms = async () => {
      setIsLoading(true);

      try {
        // Fetch data from OpenAI API =================================
        const similarTitles = await fetchSimilarMovieFromOpenAI(title);

        if (!similarTitles) throw new Error();

        // Fetch data from TMDB API ===================================
        const response = await fetchMoviesByTitle(similarTitles);

        if (!response || response.length === 0) {
          throw new Error("Error fetching movies");
        }

        const result = firstElementsFromArray(response);

        if (result) setSimilarMovies(result);
      } catch (error) {
        console.log(`Error on similar movies, ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSimilarFilms();
  }, [title, reloadKey]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : similarMovies.length ? (
        <GetShowMovies title={"Similar movies"} movies={similarMovies} />
      ) : (
        <ButtonOrLink
          onClick={() => setReloadKey((key) => key + 1)}
          className={``}
        >
          Reload Similar Movies
        </ButtonOrLink>
      )}
    </>
  );
};
