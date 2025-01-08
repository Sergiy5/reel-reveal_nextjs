"use client";

import React from "react";
import { Movie, sessionUser } from "@/typification";
import { MySlider } from "./ui/MySlider";
import { MovieCard } from "./ui/MovieCard";
import { settings } from "./ui/MySlider";
import { useSession } from "next-auth/react";

export interface GetShowMoviesProps {
  title: string;
  movies: Movie[];
  sessionUser: sessionUser;
}

export const GetShowMovies: React.FC<GetShowMoviesProps> = ({
  title,
  movies,
  sessionUser,
}) => {
  const { status } = useSession();

  return (
    <div
      className={` flex flex-col items-center gap-12 w-full z-10 xl:max-w-[1440px]`}
    >
      <h2>{title}</h2>
      <div className={` max-w-[1200px] w-full flex flex-col h-auto`}>
        <MySlider
          arraySlides={movies}
          SlideComponent={(props) => (
            <MovieCard {...props} sessionUserStatus={sessionUser.userStatus} />
          )}
          settings={settings}
        />
      </div>
    </div>
  );
};
