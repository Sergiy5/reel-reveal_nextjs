import React, { useMemo } from "react";
import { MovieCardHoverBtn } from "./MovieCardHoverBtn";
import { nanoid } from "nanoid";
import { Movie } from "@/typification";

interface IMovieForHover {
  voteAverage: number;
  releaseDate: Date;
  title: string;
  id: number;
  isLiked: boolean;
  isWatched: boolean;
}

 interface MovieCardHoverProps {
   movie: IMovieForHover;
   handleMovie: (
     e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
   ) => void;
 }

export const MovieCardHover: React.FC<MovieCardHoverProps> = ({
  movie,
  handleMovie,
}) => {

  const formattedMovie = useMemo(() => {
    return {
      ...movie,
      voteAverageFormatted: movie.voteAverage.toFixed(1),
      releaseYear: new Date(movie.releaseDate).getFullYear(),
    };
  }, [movie]);

  const {
    title,
    id,
    isLiked,
    isWatched,
    voteAverageFormatted,
    releaseYear,
  } = formattedMovie;
  // releaseDate.slice(0, 4);
  
  return (
    <div
      id={`${id}`}
      data-movie={"movie"}
      onClick={handleMovie}
      className="absolute w-full h-full bg-cardGradient p-4 flex flex-col justify-between rounded-[18px] border border-accentColor"
    >
      <div className="flex justify-between">
        <div className=" flex flex-col h-12.5">
          <div className="flex text-textColor mb-1 ">
            <svg width="19" height="19" className="mr-1">
              <use xlinkHref={`/icons/sprite.svg#icon-star`} />
            </svg>
            {voteAverageFormatted}
          </div>
          <span className="text-white">{releaseYear}</span>
        </div>

        <ul className="flex flex-col justify-between h-[119px]">
          <li key={nanoid()}>
            <MovieCardHoverBtn
              iconId="icon-heart_btn"
              dataMovie={"saveIt"}
              onClick={handleMovie}
              text="save it"
              isChecked={isLiked}
              hoverd={true}
            />
          </li>
          <li key={nanoid()}>
            <MovieCardHoverBtn
              iconId="icon-checked"
              dataMovie={"sawIt"}
              onClick={handleMovie}
              text="saw it"
              isChecked={isWatched}
              hoverd={true}
            />
          </li>
          <li key={nanoid()}>
            <MovieCardHoverBtn
              iconId="icon-play"
              dataMovie={"trailer"}
              onClick={handleMovie}
              text="trailer"
              hoverd={true}
            />
          </li>
        </ul>
      </div>
      <span className="text-white">{title}</span>
    </div>
  );
};
