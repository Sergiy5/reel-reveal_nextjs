import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { nanoid } from "nanoid";

// import { MovieCardOverlay } from './MovieCardOverlay';
import { MovieCardProps } from "@/types";

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isShowHover, setIsShowHover] = useState(false);

  const { poster_path, id, title, textBtn } = movie;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : "/images/no-image.jpg";

  return (
    <Link href={"/movie"}>
      <div
        key={nanoid()}
        onMouseEnter={() => {
          setIsShowHover(true);
        }}
        onMouseLeave={() => {
          setIsShowHover(false);
        }}
        className={`movie-card_wrapper`}
      >
        {id === "load_more" ? (
          <button
            id={id}
            className={`flex w-auto h-auto text-textColor border border-white bg-transparent
        transition duration-[350ms] ease-in-out
        
        hover:border-accentColor hover:text-accentColor
        focus:border-accentColor focus:outline focus:outline-1 focus:outline-accentColor
      `}
          >
            {textBtn}
          </button>
        ) : (
          <>
            {/* {isShowHover ? <MovieCardOverlay movie={movie} /> : null} */}
            <Image
              id={id}
              src={poster}
              alt={title}
              width={285}
              height={428}
              className={`w-full h-auto rounded-[18px]`}
            />
          </>
        )}
      </div>
    </Link>
  );
};
