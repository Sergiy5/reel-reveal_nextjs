"use client";

import Image from "next/image";
import { Movie } from "@/typification";
import { MovieCardHoverBtn } from "./MovieCardHoverBtn";
import {
  floorNumber,
  generateUrlImage,
  hoursFromMinuts,
  yearFromDate,
} from "@/lib";
import { Loader } from "./Loader";
interface MovieInfoProps {
  movie: Movie;
}

export const MovieInfo: React.FC<MovieInfoProps> = ({ movie }) => {


  return (
    <>
      {movie && (
        <div
          className={`relative w-screen aspect-[3.8/4] md:aspect-[1440/810] lg:w-screen  lg:max-w-[1440px]`}
        >
          <div
            className={`absolute flex flex-col items-center justify-center w-full h-full aspect-[3.8/4] md:aspect-[1440/810] bg-movieGradient lg:w-full lg:h-auto z-10`}
          >
            <h1 className={`block lg:hidden pb-6`}>{movie.title}</h1>
            <div
              className={`flex items-end px-4 gap-10  w-full md:px-[60px] lg:gap-[122px] xl:px-[120px]`}
            >
              <Image
                src={generateUrlImage(movie.poster_path, "300")}
                alt={movie.title}
                width={285}
                height={428}
                priority={true}
                quality={75}
                className={` rounded-2xl w-[285px] aspect-[285/428] md:w-52 lg:w-[285px]`}
              />
              <div className={`flex flex-col  lg:w-[800px] gap-6 `}>
                <div
                  className={`flex gap-9 flex-col xl:justify-between lg:items-start xl:items-start xl:flex-row`}
                >
                  <h1 className={`hidden lg:flex`}>{movie.title}</h1>
                  <div className={`flex w-48 justify-between xl:pt-5`}>
                    <h3 className={`flex max-w-32 `}>
                      IMBd {floorNumber(movie.vote_average)}
                    </h3>
                    <MovieCardHoverBtn
                      iconId="icon-heart_btn"
                      dataMovie={"save it"}
                      text="save it"
                      isChecked={false}
                    />
                    <MovieCardHoverBtn
                      iconId="icon-checked"
                      dataMovie={"saw it"}
                      text="saw it"
                      isChecked={false}
                    />
                  </div>
                </div>
                <ul className={`flex justify-between`}>
                  <li className={`rounded-2xl bg-bgColor px-2`}>
                    {yearFromDate(movie.release_date)}
                  </li>
                  <li className={`rounded-2xl bg-bgColor px-2`}>{}</li>
                  <li className={`rounded-2xl bg-bgColor px-2`}>
                    {hoursFromMinuts(movie.runtime)}
                  </li>
                </ul>
                <p className={`flex`}>{movie.overview}</p>
              </div>
            </div>
          </div>
          <div />
          <Image
            src={generateUrlImage(movie.backdrop_path, "500")}
            alt={"Movie image"}
            width={600}
            height={380}
            priority={true}
            quality={75}
            className={`w-full aspect-[3.8/4] md:aspect-[1440/810] object-cover lg:h-auto`}
          />
        </div>
      )}
    </>
  );
};
