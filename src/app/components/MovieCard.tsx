import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import notFoundImg from '../../../public/images/no-Image.jpg';
// import { MovieCardOverlay } from './MovieCardOverlay';
import { MovieCardProps } from '@/types';


export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isShowHover, setIsShowHover] = useState(false);

  const { poster_path, id, title, textBtn } = movie;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : `${notFoundImg}`;

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
        className={`
        relative flex items-center justify-center w-[285px] h-auto text-transparent bg-contain rounded-[18px]
        md:w-[calc((100vw-45px)/3)]
        lg:w-[calc((100vw-45px)/4)]
        xl:w-[calc((100vw-185px)/4)]
        2xl:w-[calc((100vw-285px)/4)] 2xl:h-[auto]
        3xl:w-[285px] 3xl:h-[428px]
      `}
      >
        {id === "load_more" ? (
          <button
            id={id}
            className={`
        w-[285px] h-[428px] text-textColor rounded-[18px] border border-white bg-transparent
        transition duration-[350ms] ease-in-out
        xl:w-[calc((100vw-180px)/4)] xl:h-[calc((100vw-180px)/4)]
        2xl:w-[calc((100vw-300px)/4)] 2xl:h-[calc((100vw-300px)/4)]
        3xl:w-[285px] 3xl:h-[428px]
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
              className={`  w-full h-auto rounded-4.5`}
            />
          </>
        )}
      </div>
    </Link>
  );
};
