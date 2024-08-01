"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Movie } from "@/typification";
import { firstElementsFromArray } from "@/lib";
import { GetShowMovies } from "./GetShowMovies";
import { fetchMovies } from "../actions/fetchMovies";
import { Loader } from "./ui/Loader";
import { fetchSimilarMovieFromOpenAI } from "../actions";

interface SimilarMoviesProps {
  title: string;
}
export const SimilarMovies: React.FC<SimilarMoviesProps> = ({ title }) => {
  const [similarTitles, setSimilarTitles] = useState<string[]>([]);
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const fetchSimilarTitles = async (title: string) => {
      setIsLoading(true);

      try {
        const result = await fetchSimilarMovieFromOpenAI(title);

        if (!result) throw new Error();

        setSimilarTitles(result);
      } catch (error) {
        toast.error(`Somthing went wrong, try again, ${error}`);
        console.log(`Error on openai similar movies, ${error}`);
      }
    };
    fetchSimilarTitles(title);
  }, [title]);

  useEffect(() => {
    if (!similarTitles.length) return;
    const getMovies = async (movies: string[]) => {
      try {
        const response = await fetchMovies(movies);

        if (!response || response.length === 0) {
          toast.error("Something went wrong, try again...");
          return;
        }
        const result = firstElementsFromArray(response);
        if (result) setSimilarMovies(result);
      } catch (error) {
        toast.error("Error... fetch data");
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies(similarTitles);
  }, [similarTitles]);

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
