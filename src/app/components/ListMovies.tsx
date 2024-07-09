import { nanoid } from "nanoid";
import React from "react";
import { CombinedMovieArr, ListMoviesProps } from "@/types";
import { MovieCard } from "./MovieCard";
import { loadMoreCard } from "@/lib";

export const ListMovies: React.FC<ListMoviesProps> = ({
  movies,
  // onLoadMore,
}) => {
  const handleClickLoadMore = (e: React.MouseEvent<HTMLDivElement>): void => {
    if ((e.target as HTMLElement).id === "load_more") {
      const movieTitles = movies.map((movie) => movie.title);
      console.log(e)
      // return onLoadMore(movieTitles);
    } else {

    }
  };

  return (
    <div
      onClick={handleClickLoadMore}
      className="grid grid-cols-8 w-full h-auto sm:grid-cols-4 sm:items-center"
    >
      {movies.map((item) => (
        <MovieCard key={nanoid()} item={item} />
      ))}
      <div className="flex h-full lg:p-2 xl:p-3 ">
        <button
          id={"load_more"}
          className={`flex justify-center items-center aspect-[285/428]  w-auto h-full
           text-textColor uppercase rounded-[18px] border-solid border-[1px]
            border-white bg-transparent transition duration-[350ms] ease-in-out
        
        hover:border-accentColor hover:text-accentColor active:text-accentClicked active:outline-accentClicked 
        focus:border-accentColor focus:outline focus:outline-1 focus:outline-accentColor active:border-accentClicked
      `}
        >
          load more
        </button>
      </div>
    </div>
  );
};
