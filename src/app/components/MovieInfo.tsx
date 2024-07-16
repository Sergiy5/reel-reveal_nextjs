"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getMovieById } from "@/app/api/actions/getMovieById";
import { Movie } from "@/types";
import { MovieCardHoverBtn } from "./MovieCardHoverBtn";
import {
  floorNumber,
  generateUrlImage,
  hoursFromMinuts,
  yearFromDate,
} from "@/lib";
import { Loader } from "./Loader";
interface MovieInfoProps{
  id: string | null;
}

export const MovieInfo: React.FC<MovieInfoProps> = ({ id }) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  // const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async (id: string | null) => {
      try {
        const movieData = await getMovieById(id);
        console.log('first', movieData)
        setMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie(id);
  }, [id]);

  // useEffect(() => {
  //   const getTMDBVideoInfo = async (id: string | string[]) => {
  //     const KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  //     const response = await fetch(
  //       `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY}`
  //     );
  //     const data = await response.json();
  //    console.log("dataVideo", KEY);
  //   };
  //   getTMDBVideoInfo(id);
  // }, [id]);

  return (
    <>
      {movie ? (
        <div
          className={`relative lg:w-screen w-screen h-full aspect-[3.8/4] md:aspect-[4/3] lg:max-w-[1440px] lg:aspect-[1440/810]`}
        >
          <div
            className={`absolute flex flex-col items-center justify-center w-full h-full lg:aspect-[1440/810] lg:w-full lg:h-auto bg-movieGradient z-10`}
          >
            <h1 className={`block lg:hidden pb-6`}>{movie.title}</h1>
            <div
              className={`flex items-end px-4 gap-10  w-full md:px-[60px] lg:gap-[122px] xl:px-[120px]`}
            >
              <Image
                src={generateUrlImage(movie.poster_path)}
                alt={movie.title}
                width={285}
                height={428}
                className={` rounded-2xl w-[285px] aspect-auto md:w-52 lg:w-[285px]`}
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
                    {/* {yearFromDate(movie.release_date)} */}
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
            src={generateUrlImage(movie.backdrop_path)}
            alt={"Movie image"}
            width={600}
            height={400}
            className={`absolute w-full h-full object-cover lg:h-auto lg:object-fill`}
          />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
