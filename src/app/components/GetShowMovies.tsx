import React, { ReactHTMLElement } from "react";
import { GetShowMoviesProps} from "@/types";
import { MySlider } from "./MySlider";

export const GetShowMovies: React.FC<GetShowMoviesProps> = ({
  title,
  movies,
}) => {
console.log(movies)
  return (
    <div
      className={` flex flex-col items-center gap-12 w-full z-10 xl:max-w-[1440px]`}
    >
      <h2>{title}</h2>
      <MySlider arrMovies={movies} />
    </div>
  );
};
