"use client";

import { useMoviesContext } from "@/context/ServiceMoviesContext";
import { Icon } from "../ui/Icon";

interface MovieCardHoverBtnProps {
  iconId: string;
  text: string;
  isChecked?: boolean;
  movieId?: number;
  dataMovie: string;
  onClick?:
    | ((e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void)
    | undefined;
}
export const MovieCardHoverBtn: React.FC<MovieCardHoverBtnProps> = ({
  iconId,
  text,
  movieId,
  isChecked,
  dataMovie,
  onClick,
}): React.JSX.Element => {

  const { likedMovies, watchedMovies, toggleLiked, toggleWatched } =
    useMoviesContext();

  const isLiked = likedMovies.includes(movieId ?? 0);
  const isWatched = watchedMovies.includes(movieId ?? 0);

  //  if (clickedTarget === "sawIt" || clickedTarget === "saveIt") {
  //       if (sessionUserStatus !== "authenticated") {
  //         toast.error("You need to be logged in to save movies");
  //         return;
  //       }
  //       if (clickedTarget === "saveIt") {
  //         toggleLiked(movie.id);
  //       }

  //       if (clickedTarget === "sawIt") {
  //         toggleWatched(movie.id);
  //       }
  //     }

  return (
    <div
      className={`group relative flex items-center justify-center w-7 h-7 bg-transparent rounded-full border-solid border
         transition-all duration-350 ease-in-out
        ${isChecked ? "border-accentColor" : "border-textColor"}
      `}
      onClick={()=> console.log("first")}
    >
      <button
        type="button"
        data-movie={dataMovie}
        onClick={onClick}
        className={`absolute flex items-center justify-center right-0 pr-6 w-7 h-7
           border-solid border border-r-hidden rounded-full overflow-hidden transition-all duration-350 ease-in-out
          group-hover:w-28 text-transparent
          ${
            isChecked
              ? "group-hover:text-accentColor border-accentColor"
              : "group-hover:text-textColor border-textColor"
          }
        `}
      >
        {text}
      </button>
      <Icon
        id={iconId}
        width={16}
        height={16}
        className={`${isChecked ? "text-accentColor" : "text-textColor"}`}
      />
    </div>
  );
};
