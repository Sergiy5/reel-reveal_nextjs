"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import useSWR from "swr";
import { fetchMovieDataFromAPI } from "../../actions/fetchMovieDataFromAPI";
import { IQueryFilterParams, IMovie, ISessionUser } from "@/typification";
import { ListMovies } from "@/app/components/listMovies/ListMovies";
import { MovieSearchFilter } from "./MovieSearchFilter";
import { ButtonOrLink } from "../ui/ButtonOrLink";
import { capitalizeFirstLetter } from "@/utils";
import { useScrollToTop, useShowScrollTopButton } from "@/hooks";
import { Loader } from "../ui/Loader";
import { Modal } from "../ui/Modal";

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

  const isVisible = useShowScrollTopButton(800);
  const { topRef, scrollToTop } = useScrollToTop<HTMLDivElement>();

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
      shouldRetryOnError: false, // Prevent retry loops that increase function invocations
      dedupingInterval: 2000, // Dedupe requests within 2 seconds
      revalidateIfStale: false, // Only revalidate when explicitly triggered
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

  const safeQueryTitle = queryTitle
    ? capitalizeFirstLetter(decodeURIComponent(queryTitle))
    : "";

  return (
    <div
      ref={topRef}
      className={`relative flex flex-col items-center justify-center w-full gap-10 lg:gap-12 z-10`}
    >
      {/* &nbsp; */}
      {isActiveSearch && !isLoading ? (
        <h2 className="flex-inline flex-wrap items-start justify-start w-full">
          Found
          <span className="font-bold text-accentColor">
            &nbsp;{totalMovies}&nbsp;
          </span>
          <span className="">{`movies based on your search "${safeQueryTitle}"`}</span>
        </h2>
      ) : (
        <h2 className="flex justify-start items-start w-full">
          The most popular movies
        </h2>
      )}
      {/* Filter */}
      {!movieTitle && (
        <MovieSearchFilter
          getFilterOptions={setFilterOptions}
          genreName={queryGenre}
        />
      )}
      <ListMovies movies={movies} sessionUser={sessionUser} />
      <div
        className={`flex w-full items-center justify-center gap-5 flex-col sm:flex-row`}
      >
        {movies && movies.length >= 20 && (
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
        )}

        <ButtonOrLink href="/quiz" className="md:w-[245px]">
          take quiz
        </ButtonOrLink>
      </div>
      {/* {isVisible && ( */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-10 bg-accentColor/60 hover:bg-accentColor text-bgColor p-2 rounded-full
             transition-all duration-200 easy-in-out ${isVisible ? "right-10" : "-right-[210px]"}`}
      >
        <HiOutlineChevronDoubleUp className="size-10" />
      </button>
      {/* )} */}
      <Modal isOpen={isLoading || isValidating}>
        <Loader />
      </Modal>
    </div>
  );
};
