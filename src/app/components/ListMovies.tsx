import { nanoid } from "nanoid";
import React from "react";
import { ListMoviesProps } from "@/typification";
import { MovieCard } from "./MovieCard";

export const ListMovies: React.FC<ListMoviesProps> = ({ movies }) => {

  return (
    <div className="grid grid-cols-8 w-full h-auto sm:grid-cols-4 sm:items-center">
      {movies.map((movie) => (
        <MovieCard key={nanoid()} movie={movie} />
      ))}
    </div>
  );
};
