"use client"

import { getMovieById } from "@/app/api/actions/getMovieById";
import { Movie} from "@/types";
import Image from "next/image";
import { MovieCardHoverBtn } from "./MovieCardHoverBtn";
import { generateUrlImage, hoursFromMinuts, yearFromDate } from "@/lib";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Loader } from "./Loader";

export const MovieInfo = () => {
  const [movie, setMovie] = useState<Movie | null>(null);

  const { id } = useParams()
  
  useEffect(() => {
    const fetchMovie = async (id: string | string[]) => {
      try {
       const movieData = await getMovieById(id);
       setMovie(movieData);
      } catch (error) {
        console.log(error)
     }
   };

   fetchMovie(id);
 }, [id]);
  
  // const {
  //   backdrop_path,
  //   adult,
  //   genre_ids,
  //   original_language,
  //   original_title,
  //   overview,
  //   popularity,
  //   poster_path,
  //   release_date,
  //   title,
  //   video,
  //   vote_average,
  //   vote_count,
  //   runtime,
  // } = movie; 
 
 
  return (
    <div className={`relative w-screen max-w-[1440px] aspect-[1440/810] `}>
      {movie ? (
        <>
          <div
            className={`absolute flex -top-[120px] items-center justify-center w-full h-full bg-movieGradient gap-12 z-10`}
          >
            <Image
              src={generateUrlImage(movie.poster_path)}
              alt={movie.title}
              width={285}
              height={428}
              className={`rounded-2xl aspect-auto`}
            />
            <div className={` w-[800px] `}>
              <div className={`flex items-center justify-start gap-9`}>
                <h2>{movie.title}</h2>
                <h3>IMBd {movie.vote_average}</h3>
                <div className={`flex gap-10`}>
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
              <p>{movie.overview}</p>
            </div>
            <div />
          </div>
          <div />
          <Image
            src={generateUrlImage(movie.backdrop_path)}
            alt={"Movie image"}
            width={600}
            height={400}
            className={`absolute -top-[120px] w-screen aspect-auto  `}
          />
        </>
      ) : <Loader />}
    </div>
  );
};
