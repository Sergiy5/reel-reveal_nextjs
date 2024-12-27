"use client";

import React from "react";
import { Movie } from "@/typification";
import { MySlider } from "./ui/MySlider";
import { MovieCard } from "./ui/MovieCard";
import { settings } from "./ui/MySlider";
import { ISessionUserSignal } from "@/context/UserContext";


export interface GetShowMoviesProps {
  title: string;
  movies: Movie[];
  sessionUser: ISessionUserSignal ;
}

export const GetShowMovies: React.FC<GetShowMoviesProps> = ({
  title,
  movies,
  sessionUser,
}) => {

  return (
    <div
      className={` flex flex-col items-center gap-12 w-full z-10 xl:max-w-[1440px]`}
    >
      <h2>{title}</h2>
      <div className={` max-w-[1200px] w-full flex flex-col h-auto`}>
        <MySlider
          arraySlides={movies}
          SlideComponent={(props) => (
            <MovieCard {...props} sessionUser={sessionUser} />
          )}
          settings={settings}
          sessionUser={sessionUser}
        />
      </div>
    </div>
  );
};
