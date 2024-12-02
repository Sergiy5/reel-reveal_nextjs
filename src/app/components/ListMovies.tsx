'use client';

import React from "react";
import { nanoid } from "nanoid";
import { MovieCard } from "./ui/MovieCard";
import { ISessionUserSignal, sessionUserSignal } from "@/context/UserContext";
import { Movie } from "@/typification";

export interface ListMoviesProps {
  movies: Movie[];
  sessionUser?: ISessionUserSignal;
}

export const ListMovies: React.FC<ListMoviesProps> = ({ movies, sessionUser }) => {

  return (
    <div className="grid w-full h-auto lg:grid-cols-4 grid-cols-2 sm:items-center">
      {movies.map((movie) => (
        <MovieCard
          key={nanoid()}
          movie={movie}
          sessionUser={sessionUser ?? sessionUserSignal.value}
        />
      ))}
    </div>
  );
};
