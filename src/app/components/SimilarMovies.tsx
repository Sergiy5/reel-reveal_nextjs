"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Movie } from "@/typification";
import {
  getManyMoviesByTitle,
  getSimilarMovieFromOpenAI,
} from "../api/actions";
import { firstElementsFromArray } from "@/lib";
import { GetShowMovies } from "./GetShowMovies";

interface SimilarMoviesProps {
  movie: Movie;
}
export const SimilarMovies: React.FC<SimilarMoviesProps> = ({ movie }) => {
  const [similarTitles, setSimilarTitles] = useState<string[]>([]);
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);

  const { original_title, title } = movie;
  const movieTitle = original_title ?? title;

  useEffect(() => {
    const fetchSimilarTitles = async (title: string) => {
      try {
        const result = await getSimilarMovieFromOpenAI(title);

        if (!result) throw new Error();

        setSimilarTitles(result);
      } catch (error) {
        toast.error(`Somthing went wrong, try again, ${error}`);
        console.log(`Error on openai similar movies, ${error}`);
      }
    };
    fetchSimilarTitles(movieTitle);
  }, [movieTitle]);

  useEffect(() => {
    const fetchSimilarMovies = async (titles: string[]) => {
      try {
        const response = await getManyMoviesByTitle(titles);

        if (!response) throw new Error();

        const result = firstElementsFromArray(response);

        if (result) setSimilarMovies(result);
      } catch (error) {
        toast.error(`Somthing went wrong, try again, ${error}`);
        console.log(`Error on TMDB similar movies, ${error}`);
      }
    };
    fetchSimilarMovies(similarTitles);
  }, [similarTitles]);

  return (
    <>
      <GetShowMovies title={"Similar movies"} movies={similarMovies} />
    </>
  );
};
