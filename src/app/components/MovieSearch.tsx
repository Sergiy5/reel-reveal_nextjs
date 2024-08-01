"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Loader } from "./ui/Loader";
import { fetchMoviesByTitle } from "../actions";
import { ListMovies } from "./ListMovies";
import Link from "next/link";
import { searchMoviesSignal, searchQuerySignal } from "@/context/MoviesContext";
import { Modal } from "./ui/Modal";

export interface MovieSearchProps {
  movieTitle: string;
}

export const MovieSearch: React.FC<MovieSearchProps> = ({ movieTitle }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchQuerySignal.value === movieTitle && page === 1) return;

    searchQuerySignal.value = movieTitle;

    const getMovies = async (title: string) => {
      setIsLoading(true);
      
      try {
        const response = await fetchMoviesByTitle(title, page);
        if (!response) throw new Error();
        if (response.results?.length === 0) {
          toast.info(`We can't find any movie... Try again.`);
        }

        searchMoviesSignal.value = [
          ...searchMoviesSignal.value,
          ...response.results,
        ];

      } catch (error) {
        toast.error("Faild to fetch movies...");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies(searchQuerySignal.value);
  }, [movieTitle, page]);

  const incrementPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div
      className={` flex flex-col items-center justify-center w-full gap-12 z-10`}
    >
      <ListMovies movies={searchMoviesSignal.value} />
      <div className={`flex gap-5 z-10 flex-col sm:flex-row`}>
        <button
          className={`link-btn text-transparent w-[285px]`}
          onClick={incrementPage}
        >
          load more
        </button>
        <Link href="/quiz" className={`link-btn w-[285px]`}>
          take quiz
        </Link>
      </div>
      <Modal isOpen={isLoading}>
        <Loader />
      </Modal>
    </div>
  );
};
