import { nanoid } from 'nanoid';
import React from "react";
import { CombinedMovieArr, ListMoviesProps} from "@/types";
import { MovieCard } from './MovieCard';
import { loadMoreCard } from '@/lib';


export const ListMovies: React.FC<ListMoviesProps> = ({
  movies,
  onLoadMore,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "load_more") {
      const filteredMovies = movies.filter((movie) => movie.title);
      const arrExistedTitles = filteredMovies.map((movie) => movie.title);
      onLoadMore(arrExistedTitles);
    }
  };


  return (
    <div
      onClick={handleClick}
      className="grid grid-cols-8 gap-5 w-full h-auto sm:grid-cols-4 sm:items-center"
    >
      {movies.map((item) => (
        <MovieCard key={nanoid()} movie={item} />
      ))}
    </div>
  );
};
