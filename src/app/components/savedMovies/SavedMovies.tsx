"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import { ButtonOrLink } from "../ui/ButtonOrLink";
import { ListMovies } from "@/app/components/listMovies/ListMovies";
import { Loader } from "../ui/Loader";
import { fetcher } from "../../actions";
import { useMoviesContext } from "@/context/ServiceMoviesContext";
import { IMovie, ISessionUser } from "@/typification";
import { Modal } from "../ui/Modal";

interface SavedMoviesProps {
  sessionUser: ISessionUser;
}

export const SavedMovies: React.FC<SavedMoviesProps> = React.memo(
  ({ sessionUser }) => {
    const [movies, setMovies] = useState<IMovie[] | null>(null);

    const { likedMovies, isLoading } = useMoviesContext();

    const { data } = useSWR(
      likedMovies.length > 0
        ? ["/api/movies/many-by-array_id", likedMovies]
        : null,
      () => fetcher(["/api/movies/many-by-array_id", likedMovies])
    );

    useEffect(() => {
      if (!data) return;

      setMovies(data?.movies);
    }, [data, data?.movies.length]);

    if (movies === null) return null;
    
    return (
      <div
        className={`flex items-center flex-col justify-center gap-20 w-full mb-20 ${movies?.length ? "z-10" : "z-20"} `}
      >
        {movies?.length === 0 || !movies ? (
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
            <div className="flex flex-col items-center justify-center w-full md:flex-row md:w-[590px] gap-4">
              <ButtonOrLink href="/movies" transparent>
                search movie
              </ButtonOrLink>
              <ButtonOrLink href="/quiz">start quiz</ButtonOrLink>
            </div>
          </>
        ) : (
          <>
            <h1>
              Saved <span className="text-accentColor">{movies?.length}</span>{" "}
              movies
            </h1>
            <ListMovies movies={movies ?? []} sessionUser={sessionUser} />
          </>
        )}
        <Modal isOpen={isLoading}>
          <Loader />
        </Modal>
      </div>
    );
  }
);

SavedMovies.displayName = "SavedMovies";
