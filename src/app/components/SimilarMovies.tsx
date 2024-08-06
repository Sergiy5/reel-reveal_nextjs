"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Movie } from "@/typification";
import { firstElementsFromArray } from "@/lib";
import { GetShowMovies } from "./GetShowMovies";
import { fetchMovies } from "../actions/fetchMovies";
import { Loader } from "./ui/Loader";
import { fetchSimilarMovieFromOpenAI } from "../actions";

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
        /**
         * Fetch data from OpenAI API
         */
        const similarTitles = await fetchSimilarMovieFromOpenAI(title);

        if (!similarTitles) throw new Error();
        /**
         * Fetch data from TMDB API
         */
        const response = await fetchMovies(similarTitles);

        if (!response || response.length === 0) {
          throw new Error("Error fetching movies");
        }

        const result = firstElementsFromArray(response);

        if (result) setSimilarMovies(result);
      } catch (error) {
        toast.error(`Somthing went wrong... Try again`);
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
        <button
          onClick={() => setReloadKey((key) => key + 1)}
          className={`link-btn w-[285px]`}
        >
          Reload
        </button>
      )}
    </>
  );
};