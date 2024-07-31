"use client";

import React from "react";
import { GetShowMoviesProps } from "@/typification";
import { MySlider } from "./MySlider";
import { MovieCard } from "./MovieCard";
import { settings } from "./MySlider";

export const GetShowMovies: React.FC<GetShowMoviesProps> = ({
  title,
  movies,
}) => {
  return (
    <div
      className={` flex flex-col items-center gap-12 w-full z-10 xl:max-w-[1440px]`}
    >
      <h2>{title}</h2>
      <div className={` max-w-[1200px] w-full flex flex-col h-auto`}>
        <MySlider
          arraySlides={movies}
          SlideComponent={MovieCard}
          settings={settings}
        />
      </div>
    </div>
  );
};
