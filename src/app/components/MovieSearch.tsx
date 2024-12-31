"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import { Loader } from "./ui/Loader";
import { ListMovies } from "./ListMovies";
import {
  allMoviesSignal,
  totalSearchMoviesSignal,
} from "@/context/MoviesContext";
import { Modal } from "./ui/Modal";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import { ISessionUserSignal } from "@/context/UserContext";
import { fetchMovieDataFromAPI } from "../actions/fetchMovieDataFromAPI";
import { Movie } from "@/typification";

export interface MovieSearchProps {
  movieTitle: string | undefined;
  sessionUser: ISessionUserSignal;
}

export const MovieSearch: React.FC<MovieSearchProps> = ({
  movieTitle,
  sessionUser,
}) => {
  const [totalMovies, setTotalMovies] = useState(totalSearchMoviesSignal.value);
  const [isActiveSearch, setisActiveSearch] = useState(false);
  const [queryTitle, setQueryTitle] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(
    allMoviesSignal.value.length / 20
  );

  const { data, error, isLoading, isValidating, mutate } = useSWR(
    // currentRoute,
    isActiveSearch ? "/api/movies/one-by-title" : "/api/movies/all",
    () =>
      fetchMovieDataFromAPI(
        isActiveSearch ? "/api/movies/one-by-title" : "/api/movies/all",
        isActiveSearch ? { title:queryTitle, page } : { page }
      ),
    { revalidateOnFocus: false }
  );
  // console.log("DATA=========================", data);
useEffect(() => {
  // if (typeof window === "undefined") return;
  if (movieTitle?.length && movieTitle !== queryTitle) {
    setMovies([]);
    setisActiveSearch(true);
    setQueryTitle(movieTitle);
    mutate();
  } else if (movieTitle?.length && movieTitle === queryTitle) {
    // setMovies(prev => [...prev, ...data.results]);
    setisActiveSearch(true);
    mutate();

  } else if(!movieTitle?.length) {
    setisActiveSearch(false);
    setMovies([]);
    mutate();
  }
},[movieTitle, movieTitle?.length, mutate, queryTitle])

  useEffect(() => {
    mutate();
    console.log(page);
  }, [mutate, page]);

  useEffect(() => {
    if (!data) return;

    totalSearchMoviesSignal.value = data.total_results;
    setTotalMovies(data.total_results);
    setTotalPages(data.total_pages);

    setMovies((prev) => [...prev, ...data.results]);
  }, [data]);

  // if (!data) return null;
  // if (isValidating) return <Loader />;

  const safeQueryTitle = queryTitle ? decodeURIComponent(queryTitle) : "";

  return (
    <div
      className={` flex flex-col items-center justify-center w-full gap-12 z-10`}
    >
      {isActiveSearch && !isLoading ? (
        <h1 className="w-full">
          Found{" "}
          <span className="font-bold text-accentColor">{totalMovies}</span>{" "}
          movies based on your search &quot;{safeQueryTitle}
          &quot;
        </h1>
      ) : (
        <h1>The most popular movies</h1>
      )}
      <ListMovies movies={movies} sessionUser={sessionUser} />
      <div className={`flex gap-5 z-10 flex-col sm:flex-row`}>
        <ButtonOrLink onClick={() => setPage((prev) => prev + 1)} transparent>
          load more
        </ButtonOrLink>
        <ButtonOrLink href="/quiz">take quiz</ButtonOrLink>
      </div>
      <Modal isOpen={isLoading || isValidating}>
        <div className={`flex items-center my-auto h-lvh`}>
          <Loader />
        </div>
      </Modal>
    </div>
  );
};
