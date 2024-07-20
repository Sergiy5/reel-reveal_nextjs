import React from "react";
import { MovieCardHoverProps } from "@/typification";
import { MovieCardHoverBtn } from "./MovieCardHoverBtn";
import { nanoid } from "nanoid";
import { yearFromDate } from "@/lib";

export const MovieCardHover: React.FC<MovieCardHoverProps> = ({
  movie,
  handleMovie,
}) => {
  const { vote_average, release_date, title, id } = movie;

  const releaseYear = yearFromDate(release_date);

  return (
    <div
      id={`${id}`}
      data-movie={"movie"}
      onClick={handleMovie}
      className="absolute w-full h-full rounded-[18px] bg-cardGradient p-4 flex flex-col justify-between"
    >
      <div className="flex justify-between">
        <div className=" flex flex-col h-12.5">
          <div className="flex text-textColor mb-1 ">
            <svg width="19" height="19" className="mr-1">
              <use xlinkHref={`/icons/sprite.svg#icon-star`} />
            </svg>
            {vote_average?.toFixed(1)}
          </div>
          <span className="text-white">{releaseYear}</span>
        </div>

        <ul className="flex flex-col justify-between h-[119px]">
          <li key={nanoid()}>
            <MovieCardHoverBtn
              id="icon-heart_btn"
              dataMovie={"save it"}
              onClick={handleMovie}
              text="save it"
              isChecked={false}
              hoverd={true}
            />
          </li>
          <li key={nanoid()}>
            <MovieCardHoverBtn
              id="icon-checked"
              dataMovie={"saw it"}
              onClick={handleMovie}
              text="saw it"
              isChecked={false}
              hoverd={true}
            />
          </li>
          <li key={nanoid()}>
            <MovieCardHoverBtn
              id="icon-play"
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
