'use client';

import React from "react";
import { nanoid } from "nanoid";
import { ListMoviesProps } from "@/typification";
import { MovieCard } from "./ui/MovieCard";

export const ListMovies: React.FC<ListMoviesProps> = ({ movies }) => {

  return (
    <div className="grid w-full h-auto lg:grid-cols-4 grid-cols-2 sm:items-center">
      {movies.map((movie) => (
        <MovieCard key={nanoid()} movie={movie} />
      ))}
    </div>
  );
};
