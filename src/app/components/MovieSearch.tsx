"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import { Loader } from "./ui/Loader";
import { ListMovies } from "./ListMovies";
import { Modal } from "./ui/Modal";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import { fetchMovieDataFromAPI } from "../actions/fetchMovieDataFromAPI";
import { Movie, sessionUser } from "@/typification";
import { useSearchParams } from "next/navigation";
import { MultiSelect } from "./ui/MultiSelect";
import { arrayOfRatings } from "@/utils";

export interface MovieSearchProps {
  movieTitle?: string | undefined;
  sessionUser: sessionUser;
}

export const MovieSearch: React.FC<MovieSearchProps> = ({
  // movieTitle,
  sessionUser,
}) => {
  const [totalMovies, setTotalMovies] = useState(); //totalSearchMoviesSignal.value
  const [isActiveSearch, setisActiveSearch] = useState<boolean | null>(null);
  const [queryTitle, setQueryTitle] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [movieStatus, setMovieStatus] = useState<null | "success">(null);
  const [totalPages, setTotalPages] = useState(movies.length / 20); //allMoviesSignal.value.length / 20

  const { data, error, isLoading, isValidating, mutate } = useSWR(
    isActiveSearch ? "/api/movies/one-by-title" : "/api/movies/all",
    () =>
      fetchMovieDataFromAPI(
        isActiveSearch ? "/api/movies/one-by-title" : "/api/movies/all",
        isActiveSearch ? { title: queryTitle, page } : { page }
      ),
    { revalidateOnFocus: false }
  );

  const searchParams = useSearchParams();
  const movieTitle = searchParams.get("title") || "";

  const clearCache = () => mutate(() => true, undefined);

  useEffect(() => {
    // if (movieTitle === queryTitle) return
    if (movieTitle?.length && movieTitle !== queryTitle) {
      setisActiveSearch(true);
      setQueryTitle(movieTitle);
      // console.log("one");
      setPage(1);
      setMovies([]);
      // mutate("/api/movies/one-by-title");
    } else if (!movieTitle?.length && movieTitle !== queryTitle) {
      setisActiveSearch(false);
      setQueryTitle("");
      // console.log("second");
      setPage(1);
      setMovies([]);
      // mutate("/api/movies/all");
    } else if (!movieTitle?.length) {
      setisActiveSearch(false);
    }

    return () => {
      clearCache();
      // setMovies([]);
    };
  }, [movieTitle, movieTitle?.length, page, queryTitle]);

  useEffect(() => {
    if (isActiveSearch === null) return;
    setMovieStatus(null);
    mutate();
    // console.log("page", page);
  }, [mutate, page, isActiveSearch]);

  useEffect(() => {
    if (!data?.results || movieStatus === "success") return;
    // console.log("Set MOVIES_>>>>>>>");
    // console.log(movieStatus);
    setTotalMovies(data.total_results);
    setTotalPages(data.total_pages);

    setMovies((prev) => [...prev, ...data.results]);
    setMovieStatus("success");
  }, [data, movieStatus]);

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
      {/* Filter */}
      <div className="flex justify-between w-full ">
        <div className="flex gap-6">
          <MultiSelect options={[]} placeholder="Genre" />{" "}
          <MultiSelect options={[]} placeholder="Year" />{" "}
          <MultiSelect options={arrayOfRatings(91)} placeholder="Rating" />{" "}
        </div>
        <ButtonOrLink onClick={() => setPage(1)}>apply filters</ButtonOrLink>
      </div>
      <ListMovies movies={movies} sessionUser={sessionUser} />
      <div className={`flex gap-5 z-10 flex-col sm:flex-row`}>
        <ButtonOrLink
          onClick={() => setPage((prev) => prev + 1)}
          transparent
          disabled={totalMovies === 0}
        >
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
