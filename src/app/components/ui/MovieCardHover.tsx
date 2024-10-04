import React from "react";
import { MovieCardHoverBtn } from "./MovieCardHoverBtn";
import { nanoid } from "nanoid";
import { Movie } from "@/typification";

 interface MovieCardHoverProps {
  movie: Movie;
  handleMovie: (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => void;
}

export const MovieCardHover: React.FC<MovieCardHoverProps> = ({
  movie,
  handleMovie,
}) => {
  const { vote_average, release_date, title, id } = movie;

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
            {vote_average?.toFixed(1)}
          </div>
          <span className="text-white">{release_date.slice(0, 4)}</span>
        </div>

        <ul className="flex flex-col justify-between h-[119px]">
          <li key={nanoid()}>
            <MovieCardHoverBtn
              iconId="icon-heart_btn"
              dataMovie={"saveIt"}
              onClick={handleMovie}
              text="save it"
              isChecked={false}
              hoverd={true}
            />
          </li>
          <li key={nanoid()}>
            <MovieCardHoverBtn
              iconId="icon-checked"
              dataMovie={"sawIt"}
              onClick={handleMovie}
              text="saw it"
              isChecked={false}
              hoverd={true}
            />
          </li>
          <li key={nanoid()}>
            <MovieCardHoverBtn
              iconId="icon-play"
              dataMovie={"trailer"}
              onClick={handleMovie}
              text="trailer"
              isChecked={false}
              hoverd={true}
            />
          </li>
        </ul>
      </div>
      <span className="text-white">{title}</span>
    </div>
  );
};
