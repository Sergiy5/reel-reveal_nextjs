"use client";

import { getMovieById } from "@/app/api/actions/getMovieById";
import { Movie } from "@/types";
import Image from "next/image";
import { MovieCardHoverBtn } from "./MovieCardHoverBtn";
import {
  floorNumber,
  generateUrlImage,
  hoursFromMinuts,
  yearFromDate,
} from "@/lib";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Loader } from "./Loader";

export const MovieInfo = () => {
  const [movie, setMovie] = useState<Movie | null>(null);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchMovie = async (id: string | string[]) => {
      try {
        const movieData = await getMovieById(id);
        setMovie(movieData);

        const { vote_average } = movieData;
        console.log(Math.floor(vote_average * 10) / 10);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie(id);
  }, [id]);

  return (
    <div
      className={`relative lg:w-screen w-full h-[600px] lg:max-w-[1440px] lg:aspect-[1440/810]`}
    >
      {movie ? (
        <>
          <div
            className={`absolute flex items-center justify-center -top-[120px] h-[600px] lg:aspect-[1440/810] lg:w-full lg:h-auto bg-movieGradient z-10`}
          >
            <div
              className={`flex items-end gap-[122px] w-full md:px-[60px] lg:px-[120px]`}
            >
              <Image
                src={generateUrlImage(movie.poster_path)}
                alt={movie.title}
                width={285}
                height={428}
                className={` rounded-2xl w-[285px] aspect-auto md:w-48 lg:w-[285px]`}
              />
              <div className={`flex flex-col w-[800px] gap-6 `}>
                <div
                  className={`flex gap-9 md:flex-col xl:justify-between lg:items-start xl:items-center xl:flex-row`}
                >
                  <h1>{movie.title}</h1>
                  <div className={`flex gap-10`}>
                    <h3 className={`flex w-32`}>
                      IMBd {floorNumber(movie.vote_average)}
                    </h3>
                    <MovieCardHoverBtn
                      id="icon-heart_btn"
                      dataMovie={"save it"}
                      text="save it"
                      isChecked={false}
                    />
                    <MovieCardHoverBtn
                      id="icon-checked"
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
                <p className={`md:hidden lg:flex`}>{movie.overview}</p>
              </div>
            </div>
          </div>
          <div />
          <Image
            src={generateUrlImage(movie.backdrop_path)}
            alt={"Movie image"}
            width={600}
            height={400}
            className={`absolute -top-[120px] w-auto h-[600px] object-cover lg:w-full lg:h-auto lg:object-fill`}
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
