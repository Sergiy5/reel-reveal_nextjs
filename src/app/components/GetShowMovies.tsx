'use client'

import React, { useEffect, useState } from "react";
import { GetShowMoviesProps, Movie} from "@/types";
import { MySlider } from "./MySlider";
import { getMovies } from "../actions/getMovies";

export const GetShowMovies: React.FC<GetShowMoviesProps> = ({ title, category }) => {
const [movies, setMovies] = useState<Movie[]>([])


  useEffect(() => {
const upcomingTopRatedMovies = async (page = '1') => {
try {
  const response = await getMovies(category, page);

  setMovies(response)

} catch (error) {
  console.log(error)
  }
}
   upcomingTopRatedMovies();

  }, [category]);

  return (
    <div
      className={` flex flex-col items-center gap-12 w-full z-10 xl:max-w-[1440px]`}
    >
      <h2>{title}</h2>
      <MySlider arrMovies={movies} />
    </div>
  );
};
