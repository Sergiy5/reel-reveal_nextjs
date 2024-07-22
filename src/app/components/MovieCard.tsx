"use client";

import Image from "next/image";
import { useState } from "react";
import { MovieCardHover } from "./MovieCardHover";
import { MovieCardProps } from "@/typification";
import { useRouter } from "next/navigation";

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isShowHover, setIsShowHover] = useState(false);
  const router = useRouter();
  const handleMovie = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    e.stopPropagation();
    const clickeTtarget = e.currentTarget.dataset.movie;

    if (clickeTtarget === "movie") {
      // const stringifyMovie = JSON.stringify(movie);

      const stringifyMovie = encodeURIComponent(JSON.stringify(movie));
      router.push(`/movies/${stringifyMovie}`);
    }
    if (clickeTtarget === "saw it") console.log("saw it", movie.id);
    if (clickeTtarget === "save it") console.log("save it", movie.id);
    if (clickeTtarget === "trailer") console.log("trailer", movie.id);

    return e.currentTarget.dataset.movie;
  };
  const { poster_path, id, title } = movie;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : "/images/no-image.jpg";

  return (
    <div
      onMouseEnter={() => {
        setIsShowHover(true);
      }}
      onMouseLeave={() => {
        setIsShowHover(false);
      }}
      className={`p-1 w-full lg:p-2 xl:p-3`}
    >
      <div className=" relative w-full">
        {isShowHover ? (
          <MovieCardHover movie={movie} handleMovie={handleMovie} />
        ) : null}
        <Image
          id={`${id}`}
          src={poster}
          alt={title}
          width={285}
          height={428}
          quality={75}
          priority={true}
          className={`w-full h-full rounded-[18px]`}
        />
      </div>
    </div>
  );
};
