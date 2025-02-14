"use client";

import React, { useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import { motion } from "motion/react";
import { IMovie, ISessionUser } from "@/typification";
import { MovieCard } from "@/app/components/movieCard/MovieCard";
import { animationCardImage } from "@/variables/animation";

export interface ListMoviesProps {
  movies: IMovie[];
  sessionUser: ISessionUser;
}

export const ListMovies: React.FC<ListMoviesProps> = ({
  movies,
  sessionUser,
}) => {
  
  return (
    <div className="grid w-full h-auto lg:grid-cols-4 grid-cols-2 sm:items-center">
      {movies.map((movie, index) => (
        <motion.div
          key={movie.id}
          {...animationCardImage}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
        >
          <MovieCard movie={movie} sessionUserStatus={sessionUser.userStatus} />
        </motion.div>
      ))}
    </div>
  );
};
