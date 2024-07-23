"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";
import { Movie } from "@/typification";
import {
  getManyMoviesByTitle,
  getSimilarMovieFromOpenAI,
} from "../api/actions";
import { firstElementsFromArray } from "@/lib";
import { GetShowMovies } from "./GetShowMovies";

interface SimilarMoviesProps {
  title: string;
}
export const SimilarMovies: React.FC<SimilarMoviesProps> = ({ title }) => {
  const [similarTitles, setSimilarTitles] = useState<string[]>([]);
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);
  const { data, error } = useSWR(similarTitles, getManyMoviesByTitle);

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
    fetchSimilarTitles(title);
  }, [title]);

  useEffect(() => {
    if (data) {
      const movies = firstElementsFromArray(data);
      if (movies) setSimilarMovies(movies);
    } else {
      if (error) {
        toast.error("Somthing went wron... Try again");
      }
    }
  }, [data, error]);

  // useEffect(() => {
  //   const fetchSimilarMovies = async (titles: string[]) => {
  //     try {
  //       const response = await getManyMoviesByTitle(titles);

  //       if (!response) throw new Error();

  //       const result = firstElementsFromArray(response);

  //       if (result) setSimilarMovies(result);
  //     } catch (error) {
  //       toast.error(`Somthing went wrong, try again, ${error}`);
  //       console.log(`Error on TMDB similar movies, ${error}`);
  //     }
  //   };
  //   fetchSimilarMovies(similarTitles);
  // }, [similarTitles]);

  return <GetShowMovies title={"Similar movies"} movies={similarMovies} />;
};
