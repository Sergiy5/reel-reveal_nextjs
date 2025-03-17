"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import { Loader } from "../ui/Loader";
import { ListMovies } from "@/app/components/listMovies/ListMovies";
import { ButtonOrLink } from "../ui/ButtonOrLink";
import { fetchMovieDataFromAPI } from "../../actions/fetchMovieDataFromAPI";
import { IQueryFilterParams, IMovie, ISessionUser } from "@/typification";
import { useSearchParams } from "next/navigation";
import { MovieSearchFilter } from "./MovieSearchFilter";
import { Modal } from "../ui/Modal";
import { capitalizeFirstLetter } from "@/utils";

export interface MovieSearchProps {
  movieTitle?: string | undefined;
  sessionUser: ISessionUser;
}

export const MovieSearch: React.FC<MovieSearchProps> = ({ sessionUser }) => {
  const [totalMovies, setTotalMovies] = useState(); //totalSearchMoviesSignal.value
  const [isActiveSearch, setisActiveSearch] = useState<boolean | null>(null);
  const [queryTitle, setQueryTitle] = useState("");
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [page, setPage] = useState(1);
  const [movieStatus, setMovieStatus] = useState<null | "success">(null);
  const [filterOptions, setFilterOptions] = useState<IQueryFilterParams>();
  const [queryGenre, setQueryGenre] = useState<string | null>(null);
console.log("filterOptions>>>>>>>>>", filterOptions);
  const currentUrl = isActiveSearch
    ? "/api/movies/one-by-title"
    : `/api/movies/all`;

  const { data, error, isLoading, isValidating, mutate } = useSWR(
    [
      currentUrl,
      isActiveSearch ? queryTitle : JSON.stringify(filterOptions), // Depend on filterOptions or queryTitle
      page,
    ],
    () =>
      fetchMovieDataFromAPI(
        currentUrl,
        isActiveSearch
          ? { title: queryTitle, page }
          : { filter: JSON.stringify(filterOptions), page }
      ),
    {
      revalidateOnFocus: false, // Prevents refetching on window focus
      shouldRetryOnError: true, // Retries fetching if it fails
      dedupingInterval: 0, // Ensures it refetches immediately when dependencies change
    }
  );

  const searchParams = useSearchParams();
  const movieTitle = searchParams.get("title") || "";
  const genreName = searchParams.get("genre") || null;

  useEffect(() => {
    setQueryGenre(genreName);
  }, [genreName]);

  useEffect(() => {
      // console.log("0");

    setMovieStatus(null);
    setMovies([]);
  }, [filterOptions, isActiveSearch]);

  useEffect(() => {
    if (movieTitle?.length && movieTitle !== queryTitle) {
      // console.log("1")
      setisActiveSearch(true);
      // console.log("movieTitle_>>>>>>>>>>>>>>>>>>>>", movieTitle);
      setQueryTitle(movieTitle);
      setPage(1);
      setMovies([]);

       setMovieStatus(null);
      mutate();
      
    } else if (!movieTitle?.length && movieTitle !== queryTitle) {
     
      // console.log("2");
      setisActiveSearch(false);
      setQueryTitle("");
      setPage(1);
      setMovies([]);
    } else if (!movieTitle?.length) {
     
      // console.log("3");
      setisActiveSearch(false);
    }
  }, [movieTitle, movieTitle?.length, page, queryTitle, mutate]);

  useEffect(() => {
    if (!data?.results || movieStatus === "success") return;
      // console.log("6");
    setTotalMovies(data.total_results);

    setMovies((prev) => [...prev, ...data.results]);
    setMovieStatus("success");
  }, [data, movieStatus]);

  const safeQueryTitle = queryTitle ? capitalizeFirstLetter(decodeURIComponent(queryTitle)) : "";

  return (
    <div
      className={` flex flex-col items-center justify-center w-full gap-10 lg:gap-12 z-10`}
    >
      {isActiveSearch && !isLoading ? (
        <h1 className="flex justify-start md:justify-center w-full">
          Found&nbsp;
          <span className="font-bold text-accentColor">{totalMovies}</span>
          &nbsp;movies based on your search &quot;{safeQueryTitle}
          &quot;
        </h1>
      ) : (
        <h1 className="flex justify-start md:justify-center w-full">
          The most popular movies
        </h1>
      )}
      {/* Filter */}
      <MovieSearchFilter
        getFilterOptions={setFilterOptions}
        genreName={queryGenre}
      />
      <ListMovies movies={movies} sessionUser={sessionUser} />
      <div
        className={`flex w-full items-center justify-center gap-5 z-10 flex-col sm:flex-row`}
      >
        <ButtonOrLink
          onClick={() => {
            setMovieStatus(null);
            setPage((prev) => prev + 1);
          }}
          transparent
          disabled={totalMovies === 0}
          className="md:w-[245px]"
        >
          load more
        </ButtonOrLink>
        <ButtonOrLink href="/quiz" className="md:w-[245px]">
          take quiz
        </ButtonOrLink>
      </div>
      <Modal isOpen={isLoading || isValidating}>
        <div className={`flex items-center my-auto h-lvh`}>
          <Loader />
        </div>
      </Modal>
    </div>
  );
};
