import { getMovieById } from "@/app/api/actions/getMovieById";
import { Movie, MovieInfoProps } from "@/types";
import Image from "next/image";
import { MovieCardHoverBtn } from "./MovieCardHoverBtn";
import { yearFromDate } from "@/lib";

export const MovieInfo: React.FC<MovieInfoProps> = async ({ id }) => {
  const movie = await getMovieById(id);
  // console.log("first", movie);
  const {
    backdrop_path,
    adult,
    genre_ids,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    video,
    vote_average,
    vote_count,
    runtime,
  } = movie as Movie;

  const hoursFromMinuts = (minutes: number) => {
   const hours = Math.floor(minutes / 60);
   const remainingMinutes = minutes % 60;
   const formattedTime = `${hours}h${remainingMinutes}m`;
    
    return formattedTime;
  }
 
  const generateUrlImage = (path: string | null) => {
    const pathImage = path
      ? `https://image.tmdb.org/t/p/w500/${path}`
      : "/images/no-image.jpg";
    return pathImage;
  };


  return (
    <div className={`relative w-screen max-w-[1440px]  aspect-[1440/800] `}>
      <div
        className={`absolute flex -top-[120px] items-center justify-center w-full h-full bg-movieGradient gap-12 z-10`}
      >
        <Image
          src={generateUrlImage(poster_path)}
          alt={title}
          width={285}
          height={428}
          className={`rounded-2xl aspect-auto`}
        />
        <div className={` w-[800px] `}>
          <div className={`flex items-center justify-start gap-9`}>
            <h2>{title}</h2>
            <h3>IMBd {vote_average}</h3>
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
            <li className={`rounded-2xl bg-bgColor px-2`}>{yearFromDate(release_date)}</li>
            <li className={`rounded-2xl bg-bgColor px-2`}>{}</li>
            <li className={`rounded-2xl bg-bgColor px-2`}>{hoursFromMinuts(runtime)}</li>
          </ul>
          <p>{overview}</p>
        </div>
        <div />
      </div>
      <div />
      <Image
        src={generateUrlImage(backdrop_path)}
        alt={"Movie image"}
        width={600}
        height={400}
        className={`absolute -top-[120px] w-screen aspect-auto  `}
      />
    </div>
  );
};
