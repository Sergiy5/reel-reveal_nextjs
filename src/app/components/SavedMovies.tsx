"use client";

import Image from "next/image";
import React from "react";
import useSWR from "swr";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import { ListMovies } from "./ListMovies";
import { Modal } from "./ui/Modal";
import { Loader } from "./ui/Loader";
// import { ISessionUserSignal } from "@/context/UserContext";
import { fetcher } from "../actions";
import { useMoviesContext } from "@/context/ServiceMoviesContext";
import { sessionUser } from "@/typification";

interface SavedMoviesProps {
  sessionUser: sessionUser;
}

export const  SavedMovies: React.FC<SavedMoviesProps> = React.memo(
  ({ sessionUser }) => {
  
     const { likedMovies, isLoading, isValidating } = useMoviesContext();

    const { data: likedMoviesFromTMDB } = useSWR(
      likedMovies.length > 0
        ? ["/api/movies/many-by-array_id", likedMovies]
        : null,
      () => fetcher(["/api/movies/many-by-array_id", likedMovies])
    );

    const movies = likedMoviesFromTMDB?.movies || [];

    return (
      <div className="flex items-center flex-col justify-center gap-20 w-full mb-20 z-20">
        {movies.length === 0 ? (
          <>
            <Image
              src="/images/popcorn.png"
              alt="Popcorn image"
              width={163}
              height={161}
              className="size-auto"
            />
            <p>
              Your list is empty, explore our movie search or take a quiz to
              find something interesting!
            </p>
            <div className="flex flex-col items-center justify-center w-full md:flex-row gap-4">
              <ButtonOrLink href="/movies" transparent>
                search movie
              </ButtonOrLink>
              <ButtonOrLink href="/quiz">start quiz</ButtonOrLink>
            </div>
          </>
        ) : (
          <>
            <h1>
              Saved <span className="text-accentColor">{movies.length}</span>{" "}
              movies
            </h1>
            <ListMovies movies={movies} sessionUser={sessionUser} />
          </>
        )}
        <Modal isOpen={isValidating  || isLoading}>
          <div className="flex items-center h-lvh">
            <Loader />
          </div>
        </Modal>
      </div>
    );
  }
);

SavedMovies.displayName = "SavedMovies";
