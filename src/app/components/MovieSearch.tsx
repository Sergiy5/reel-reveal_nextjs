"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Loader } from "./Loader";
import { fetchMoviesByTitle } from "../actions";
import { MovieCard } from "./MovieCard";
import { MySlider } from "./MySlider";
import { ListMovies } from "./ListMovies";
import { useResize } from "@/hooks";
import Link from "next/link";
import { Movie } from "@/typification";
import { settings } from "./MySlider";
import { searchMoviesSignal, searchQuerySignal } from "@/context/MoviesContext";

export interface MovieSearchProps {
  movieTitle: string;
}
export const MovieSearch: React.FC<MovieSearchProps> = ({ movieTitle }) => {
  const [isLoading, setIsLoading] = useState(false);
const page = 3
  const viewWidth = useResize();

  useEffect(() => {
    if (searchQuerySignal.value === movieTitle) return;
    searchQuerySignal.value = movieTitle;

    const getMovies = async (title: string) => {
      setIsLoading(true);
      try {
        const response = await fetchMoviesByTitle(title, page);
        console.log("Response", response);
        if (!response) throw new Error();
        if (response.results.length === 0) toast.info(`We can't find movie... Try again.`);
        searchMoviesSignal.value = response.results;
      } catch (error) {
        toast.error("Faild to fetch movies...");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies(searchQuerySignal.value);
  }, [movieTitle]);

  return (
    <div className={` flex flex-col items-center justify-center w-full gap-12 z-10`}>
      {isLoading ? (
        <Loader />
      ) : viewWidth > 1024 ? (
        <ListMovies movies={searchMoviesSignal.value} />
      ) : (
        <div className={` max-w-[1200px] w-full flex flex-col h-auto`}>
          <MySlider
            arraySlides={searchMoviesSignal.value}
            SlideComponent={MovieCard}
            settings={settings}
          />
        </div>
      )}
      <div className={`flex gap-5 z-10`}>
        <button className={`link-btn text-transparent w-[285px]`}>
          load more
        </button>
        <Link href="/quiz" className={`link-btn w-[285px]`}>
          take quiz
        </Link>
      </div>
    </div>
  );
};
