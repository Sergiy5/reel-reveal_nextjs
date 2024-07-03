import React, { useEffect, useState } from "react";
import { GetShowMoviesProps, Movie } from "@/types";
import { MySlider } from "./MySlider";
import axios from "axios";

export const GetShowMovies: React.FC<GetShowMoviesProps> = ({
  title,
  url,
}) => {
  const [allMovies, setAllMovies] = useState<Movie[]>([]);

  // Get first request movies
  useEffect(() => {
    const getAllMovies = async (page = 1) => {
      try {
        const response = await fetch(`${url}page=${page}`);
        const data = await response.json();
        console.log(data);
        
        setAllMovies(data as Movie[]);
      } catch (error) {
        console.log("Get Show Movies", error);
      }
    };

    getAllMovies();
  }, [url]);

  return (
    <div
      className={` flex flex-col items-center gap-12 w-full z-10 xl:max-w-[1440px];
  }`}
    >
      <h2>{title}</h2>
      <MySlider arrMovies={allMovies} />
    </div>
  );
};
