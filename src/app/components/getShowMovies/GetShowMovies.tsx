"use client";

import React from "react";
import { motion } from "motion/react";
import { IMovie, ISessionUser } from "@/typification";
import { MySlider } from "@/app/components/mySlider/MySlider";
import { MovieCard } from "@/app/components/movieCard/MovieCard";
import { settings } from "@/app/components/mySlider/MySlider";
import { animationSection } from "@/variables/animation";

export interface GetShowMoviesProps {
  title: string;
  movies: IMovie[];
  sessionUser: ISessionUser;
}

export const GetShowMovies: React.FC<GetShowMoviesProps> = ({
  title,
  movies,
  sessionUser,
}) => {
  return (
    <motion.section
      {...animationSection}
      className={` flex flex-col items-center gap-12 w-full xl:max-w-[1440px]`}
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
    </motion.section>
  );
};
