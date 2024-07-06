import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { nanoid } from "nanoid";

import { MovieCardHover } from './MovieCardHover';
import { MovieCardProps } from "@/types";
import Head from "next/head";

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isShowHover, setIsShowHover] = useState(false);

  const handleMovie = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    e.stopPropagation();
console.log(    e.currentTarget.dataset.movie)
    return e.currentTarget.dataset.movie;
  };

  

  const { poster_path, id, title } = movie;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : "/images/no-image.jpg";

  return (
    <div>
      <div
        key={nanoid()}
        onMouseEnter={() => {
          setIsShowHover(true);
        }}
        onMouseLeave={() => {
          setIsShowHover(false);
        }}
        className={` flex p-1 items-center justify-center w-full
           aspect-auto text-transparent bg-contain lg:p-2 xl:p-3`}
      >
        {/* Need to change !!! */}
        {/* <Head>
          <link rel="preload" href={poster} as="image" />
        </Head> */}
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
    </div>
  );
};
