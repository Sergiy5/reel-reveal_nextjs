'use client';

import React from "react";
import { nanoid } from "nanoid";
import { MovieCard } from "./ui/MovieCard";
// import { ISessionUserSignal, sessionUserSignal } from "@/context/UserContext";
import { Movie, sessionUser } from "@/typification";
import { useSession } from "next-auth/react";

export interface ListMoviesProps {
  movies: Movie[];
  sessionUser: sessionUser;
}

export const ListMovies: React.FC<ListMoviesProps> = ({ movies, sessionUser }) => {
  // const { data, status, update } = useSession();
  // console.log(session);

  return (
    <div className="grid w-full h-auto lg:grid-cols-4 grid-cols-2 sm:items-center">
      {movies.map((movie) => (
        <MovieCard
          key={nanoid()}
          movie={movie}
          sessionUserStatus={sessionUser.userStatus}
        />
      ))}
    </div>
  );
};