"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Loader } from "./ui/Loader";
import { fetchMoviesByTitle } from "../actions";
import { ListMovies } from "./ListMovies";
import Link from "next/link";
import { searchMoviesSignal, searchQuerySignal } from "@/context/MoviesContext";
import { Modal } from "./ui/Modal";
import { fetchPopularMovies } from "../actions/fetchPopularMovies";

export interface MovieSearchProps {
  movieTitle: string;
}

export const MovieSearch: React.FC<MovieSearchProps> = ({ movieTitle }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [totalMovies, setTotalMovies] = useState(0);
  const [totalPages, setTotalPages] =useState(0)
  const [isActiveSearch, setisActiveSearch] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    searchMoviesSignal.value = [];
    
}, [movieTitle])
  
  
  useEffect(() => {
     if (movieTitle !== "movies") {
       setPage(1);
    return   setisActiveSearch(true);
     }
   
    if (isActiveSearch) return;
    const getPopular = async (page: number) => {
      setIsLoading(true);
      try {
        const response = await fetchPopularMovies(page);

console.log("POPULAR", response)
        if (!response) throw new Error();
        setTotalMovies(response.total_results);
        setTotalPages(response.total_pages);
        if (page === 1) return (searchMoviesSignal.value = response.results);
        if (page > 1) {
          return (searchMoviesSignal.value = [
            ...searchMoviesSignal.value,
            ...response.results,
          ]);
        }
      } catch (error) {
        console.log("Error fetch popular movies", error);
      } finally {
        setIsLoading(false);
      }
    };
    getPopular(page);
  }, [isActiveSearch, movieTitle, page]);


  useEffect(() => {
    if (!isActiveSearch) return;

    if (searchQuerySignal.value === movieTitle && page === 1) return;
    searchQuerySignal.value = movieTitle;

    const getMovies = async (title: string) => {
      setIsLoading(true);
      try {
        
        const response = await fetchMoviesByTitle(title, page);
        if (!response) throw new Error();

        setTotalMovies(response.total_results);
        setTotalPages(response.total_pages);

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
  }, [isActiveSearch, movieTitle, page]);

  return (
    <div
      className={` flex flex-col items-center justify-center w-full gap-12 z-10`}
    >
      {isActiveSearch ? (
       !isLoading && <h1>
          Found{" "}
          <span className="font-bold text-accentColor">{totalMovies}</span>{" "}
          movies based on your search &quot;{movieTitle}&quot;
        </h1>
      ) : (
        <h1>The most popular movies</h1>
      )}
      <ListMovies movies={searchMoviesSignal.value} />
      <div className={`flex gap-5 z-10 flex-col sm:flex-row`}>
        <button
          className={`link-btn text-transparent w-[285px]`}
          onClick={() => setPage((prev) => prev + 1)}
        >
          load more
        </button>
        <Link href="/quiz" className={`link-btn w-[285px]`}>
          take quiz
        </Link>
      </div>
      <Modal isOpen={isLoading}>
        <div className={`flex items-center h-lvh`}>
          <Loader />
        </div>
      </Modal>
    </div>
  );
};
