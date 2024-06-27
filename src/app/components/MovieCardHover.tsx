import React from "react";
import { MovieCardProps } from "@/types";
import { MovieCardHoverBtn } from "./MovieCardHoverBtn";

export const MovieCardHover: React.FC<MovieCardProps> = ({ movie }) => {
  const { vote_average, release_date, title } = movie;
  const releaseYear = release_date?.split(" - ")[0].slice(0, 4);

    
  
  return (
    <div className="absolute w-full h-full rounded-[18px] bg-cardGradient p-4 flex flex-col justify-between">
      <div className="flex justify-between">
        <div className=" flex flex-col h-12.5">
          <div className="flex text-textColor items-center mb-1 ">
            <svg width="19" height="19" className="mr-1">
              <use xlinkHref={`/icons/sprite.svg#icon-star`} />
            </svg>
            {vote_average?.toFixed(1)}
          </div>
          <span className="text-white">{releaseYear}</span>
        </div>

        <ul className="flex flex-col justify-between h-[119px]">
          <li>
            <MovieCardHoverBtn id="icon-heart_btn" text="save it"  isChecked={false}/>
          
          </li>
          <li>
            <MovieCardHoverBtn id="icon-checked" text="saw it"  isChecked={false}/>

          </li>
          <li>
            <MovieCardHoverBtn id="icon-play" text="trailer" isChecked={false} />

          </li>
        </ul>
      </div>
      <span className="text-white">{title}</span>
    </div>
  );
};
