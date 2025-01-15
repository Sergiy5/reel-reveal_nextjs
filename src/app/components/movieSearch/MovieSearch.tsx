"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import useSWR from "swr";
import { Loader } from "../ui/Loader";
import { ListMovies } from "../ListMovies";
import { ButtonOrLink } from "../ui/ButtonOrLink";
import { fetchMovieDataFromAPI } from "../../actions/fetchMovieDataFromAPI";
import { IQueryFilterParams, Movie, sessionUser } from "@/typification";
import { useSearchParams } from "next/navigation";
import { MovieSearchFilter } from "./MovieSearchFilter";

const ModalDynamic = dynamic(() =>
  import("../ui/Modal").then((mod) => mod.Modal)
);

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
  const [filterOptions, setFilterOptions] = useState<IQueryFilterParams>();
  const [queryGenre, setQueryGenre] = useState<string | null>(null);
  
  const currentUrl = isActiveSearch
    ? "/api/movies/one-by-title"
    : `/api/movies/all`;


  const { data, error, isLoading, isValidating, mutate } = useSWR(
    [currentUrl, filterOptions, page],

    () =>
      fetchMovieDataFromAPI(
        currentUrl,
        isActiveSearch
          ? { title: queryTitle, page }
          : {
              filter: JSON.stringify(filterOptions),
              page,
            }
      ),
    {
      revalidateOnFocus: false, // Optional: Prevent revalidation on focus
      shouldRetryOnError: true, // Retry fetch on errors
      dedupingInterval: 0, // Ensures SWR doesn't deduplicate fetches
    }
  );

  const searchParams = useSearchParams();
  const movieTitle = searchParams.get("title") || "";
  const genreName = searchParams.get("genre") || null;

  
  useEffect(() => {
    setQueryGenre(genreName);
    // console.log("genreId", genreName);
  },[genreName])

  const clearCache = () => mutate(() => true, undefined);

  useEffect(() => {
    setMovieStatus(null)
    setMovies([]);
    // console.log("filterOptions_==============", filterOptions);
  }, [filterOptions]);

  useEffect(() => {
    if (movieTitle?.length && movieTitle !== queryTitle) {

      setisActiveSearch(true);
      setQueryTitle(movieTitle);
      setPage(1);
      setMovies([]);

    } else if (!movieTitle?.length && movieTitle !== queryTitle) {

      setisActiveSearch(false);
      setQueryTitle("");
      setPage(1);
      setMovies([]);

    } else if (!movieTitle?.length) {

      setisActiveSearch(false);
    }

    return () => {
      clearCache();
    };
  }, [movieTitle, movieTitle?.length, page, queryTitle]);

  useEffect(() => {
    if (isActiveSearch === null) return;
    setMovieStatus(null);
    mutate();
  }, [mutate, page, isActiveSearch]);

  useEffect(() => {
    if (!data?.results || movieStatus === "success") return;

    setTotalMovies(data.total_results);
    setTotalPages(data.total_pages);

    setMovies((prev) => [...prev, ...data.results]);
    setMovieStatus("success");
  }, [data]);

  const safeQueryTitle = queryTitle ? decodeURIComponent(queryTitle) : "";

  return (
    <div
      className={` flex flex-col items-center justify-center w-full gap-10 lg:gap-12 z-10`}
    >
      {isActiveSearch && !isLoading ? (
        <h1 className="flex justify-start md:justify-center w-full">
          Found{" "}
          <span className="font-bold text-accentColor">{totalMovies}</span>{" "}
          movies based on your search &quot;{safeQueryTitle}
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
      <ModalDynamic isOpen={isLoading || isValidating}>
        <div className={`flex items-center my-auto h-lvh`}>
          <Loader />
        </div>
      </ModalDynamic>
    </div>
  );
};
