"use client";

import Image from "next/image";
import { useState } from "react";
import { MovieCardHover } from "./MovieCardHover";
import { MovieCardProps } from "@/typification";
import { useRouter } from "next/navigation";

export const MovieCard: React.FC<MovieCardProps> = ({ item }) => {
  const [isShowHover, setIsShowHover] = useState(false);
  const router = useRouter();
  const handleMovie = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    e.stopPropagation();
    const clickeTtarget = e.currentTarget.dataset.movie;

    if (clickeTtarget === "movie") {
      router.push(`/movies/${item.id}`);
    }
    if (clickeTtarget === "saw it") console.log("saw it", item.id);
    if (clickeTtarget === "save it") console.log("save it", item.id);
    if (clickeTtarget === "trailer") console.log("trailer", item.id);

    return e.currentTarget.dataset.movie;
  };
  const { poster_path, id, title } = item;

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
          <MovieCardHover movie={item} handleMovie={handleMovie} />
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
