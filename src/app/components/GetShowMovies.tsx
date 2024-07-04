'use client'

import React, { useEffect, useState } from "react";
import { GetShowMoviesProps, Movie } from "@/types";
import { MySlider } from "./MySlider";
import dynamic from "next/dynamic";
import { moviesFromTmdb } from "../actions/moviesFromTmdb";


const GetShowMovies: React.FC<GetShowMoviesProps> = ({
  title,
  category
}) => {
  const [allMovies, setAllMovies] = useState<Movie[]>([]);

  // Get first request movies
  useEffect(() => {
    const getAllMovies = async (page = '1') => {
      try {
        const response = await moviesFromTmdb(category, page);
        
        setAllMovies(response);
      } catch (error) {
        console.log("Get Show Movies", error);
      }
    };

    getAllMovies();
  }, [category]);

  return (
    <div
      className={` flex flex-col items-center gap-12 w-full z-10 xl:max-w-[1440px]`}
    >
      <h2>{title}</h2>
      <MySlider arrMovies={allMovies} />
    </div>
  );
};

export default GetShowMovies;