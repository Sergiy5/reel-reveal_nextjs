"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Loader } from "./ui/Loader";
import { fetchMoviesByOneTitle } from "../actions";
import { ListMovies } from "./ListMovies";
import {
  popularMoviesSignal,
  searchQuerySignal,
  totalSearchMoviesSignal,
} from "@/context/MoviesContext";
import { Modal } from "./ui/Modal";
import { fetchPopularMovies } from "../actions/fetchPopularMovies";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import { Movie } from "@/typification";
import { ISessionUserSignal } from "@/context/UserContext";

export interface MovieSearchProps {
  movieTitle: string;
  sessionUser: ISessionUserSignal;
}

export const MovieSearch: React.FC<MovieSearchProps> = ({
  movieTitle,
  sessionUser,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [totalMovies, setTotalMovies] = useState(totalSearchMoviesSignal.value);
  const [totalPages, setTotalPages] = useState(
    popularMoviesSignal.value.length / 20
  );
  const [isActiveSearch, setisActiveSearch] = useState(false);
  const [page, setPage] = useState(1);

  // On first render show popular movies
  useEffect(() => {
    // console.log("totalSearchMoviesSignal.value", totalSearchMoviesSignal.value);
    if (movieTitle !== "movies") {
      return setisActiveSearch(true);
    }

    if (isActiveSearch) return;
    const getPopular = async (page: number) => {
      setIsLoading(true);
      try {
        const response = await fetchPopularMovies(page);

        if (!response) throw new Error();

        totalSearchMoviesSignal.value = response.total_results;
        setTotalMovies(response.total_results);
        setTotalPages(response.total_pages);

        if (page === 1) return (popularMoviesSignal.value = response.results);

        if (page > 1) {
          return (popularMoviesSignal.value = [
            ...popularMoviesSignal.value,
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

  // On searching movies
  useEffect(() => {
    if (!isActiveSearch) return;

    if (searchQuerySignal.value === movieTitle && page === 1) return;
    searchQuerySignal.value = movieTitle;

    const getMovies = async (title: string) => {
      setIsLoading(true);
      try {
        const response = await fetchMoviesByOneTitle(title, page);
        if (!response) throw new Error();
        totalSearchMoviesSignal.value = response.total_results;
        setTotalMovies(response.total_results);
        setTotalPages(response.total_pages);

        popularMoviesSignal.value = [
          ...popularMoviesSignal.value,
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
        !isLoading && (
          <h1>
            Found{" "}
            <span className="font-bold text-accentColor">{totalMovies}</span>{" "}
            movies based on your search &quot;{movieTitle}&quot;
          </h1>
        )
      ) : (
        <h1>The most popular movies</h1>
      )}
      <ListMovies
        movies={popularMoviesSignal.value}
        sessionUser={sessionUser}
      />
      <div className={`flex gap-5 z-10 flex-col sm:flex-row`}>
        <ButtonOrLink onClick={() => setPage((prev) => prev + 1)} transparent>
          load more
        </ButtonOrLink>
        <ButtonOrLink href="/quiz">take quiz</ButtonOrLink>
      </div>
      <Modal isOpen={isLoading}>
        <div className={`flex items-center h-lvh`}>
          <Loader />
        </div>
      </Modal>
    </div>
  );
};
