"use client";

import Image from "next/image";
import useSWR from "swr";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import { ListMovies } from "./ListMovies";
import { Modal } from "./ui/Modal";
import { Loader } from "./ui/Loader";
import { useState } from "react";
import { ISessionUserSignal, sessionUserSignal } from "@/context/UserContext";
import { useMovies } from "@/hooks/useMovies";
import { IMovieInDB } from "./ui/MovieCard";
import { fetcher } from "../actions";

interface SavedMoviesProps {
  sessionUser: ISessionUserSignal;
}

export const SavedMovies: React.FC<SavedMoviesProps> = ({ sessionUser }) => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { userId, userStatus } = sessionUser ?? sessionUserSignal.value;
  /**
   * Fetch saved movies from database ================
   */
  const { data: moviesInDB, error } = useMovies(userId);

  const arraySavedMoviesInDB = moviesInDB?.filter((movie: IMovieInDB) => !movie.watched ? movie.movieId : null);
  const arrayOfIds = arraySavedMoviesInDB.map(
    (movie: IMovieInDB) => movie.movieId
  );
  const url = "/api/movies/many-by-array_id";
  const { data: savedMoviesFromTMDB, error: error2 } = useSWR(url, () =>
    fetcher([url, arrayOfIds])
  );
  
  const { movies } = savedMoviesFromTMDB ?? [];

  return (
    <div
      className={`flex items-center flex-col justify-center gap-20 w-full mb-20`}
    >
      {!movies ? (
        <>
          <Image
            src={"/images/popcorn.png"}
            alt="Popcorn image"
            width={163}
            height={161}
            className={`size-auto`}
          />
          <p>
            Your list is empty, explore our movie search or take a quiz to find
            something interesting!
          </p>
          <div
            className={`flex flex-col items-center justify-center w-full md:flex-row gap-4`}
          >
            <ButtonOrLink href={"/movies"} transparent>
              search movie
            </ButtonOrLink>
            <ButtonOrLink href={"/quiz"}>start quiz</ButtonOrLink>
          </div>
        </>
      ) : (
        <>
          <h1>Saved movies {movies.length}</h1>

          <ListMovies movies={movies} sessionUser={sessionUser} />
          <div className={`flex gap-5 z-20 flex-col sm:flex-row`}>
            <ButtonOrLink
              onClick={() => setPage((prev) => prev + 1)}
              transparent
            >
              load more
            </ButtonOrLink>
            <ButtonOrLink href="/quiz">take quiz</ButtonOrLink>
          </div>
          <Modal isOpen={isLoading}>
            <div className={`flex items-center h-lvh`}>
              <Loader />
            </div>
          </Modal>
        </>
      )}
    </div>
  );
};
