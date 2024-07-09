import Image from "next/image";
import { useState } from "react";
import { MovieCardHover } from "./MovieCardHover";
import { MovieCardProps } from "@/types";

export const MovieCard: React.FC<MovieCardProps> = ({ item }) => {
  const [isShowHover, setIsShowHover] = useState(false);

  const handleMovie = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    e.stopPropagation();
    console.log(e.currentTarget.dataset.movie);

    return e.currentTarget.dataset.movie;
  };
  const { poster_path, id, title } = item;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : "/images/no-image.jpg";

  return (
    <div>
      <div
        // key={nanoid()}
        onMouseEnter={() => {
          setIsShowHover(true);
        }}
        onMouseLeave={() => {
          setIsShowHover(false);
        }}
        className={` flex p-1 items-center justify-center w-full
           aspect-auto text-transparent bg-contain lg:p-2 xl:p-3`}
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
    </div>
  );
};
