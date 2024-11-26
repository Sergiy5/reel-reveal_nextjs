import Image from "next/image";
import { Movie } from "@/typification";
import { MovieCardHoverBtn } from "./ui/MovieCardHoverBtn";
import {
  floorNumber,
  generateUrlImage,
  hoursFromMinuts,
} from "@/utils";
import { nanoid } from "nanoid";
interface MovieInfoProps {
  movie: Movie;
}

export const MovieInfo: React.FC<MovieInfoProps> = ({ movie }) => {

  const listGenres = movie.genres?.map((genre: { id: number; name: string }) => genre.name);
  
  const cutingString = (title: string, max: number) => {
    if (title.length > max) {
      return title.slice(0, max) + "...";
    }
    return title;
  };
  const title = cutingString(movie.title, 35);

  return (
    <>
      {movie && (
        <div
          className={`relative flex w-screen h-[1160px] sm:h-[960px] sm:aspect-[150/400] md:aspect-[1040/1024] lg:aspect-[1440/1024] lg:max-w-[1440px]`}
        >
          <div id="children" className={`absolute flex w-full h-full`}>
            <div
              className={`flex flex-col items-center justify-center w-full px-[16px]
               bg-movieGradient md:px-[60px] xl:px-[120px] z-10`}
            >
              <h1 className={`block lg:hidden sm:text-7xl pb-6`}>{title}</h1>
              <div
                className={`flex flex-col-reverse items-center md:items-end gap-10 md:flex-row w-full lg:gap-[122px]`}
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
                    <h1 className={`hidden lg:flex`}>{title}</h1>
                    <div
                      className={`flex justify-start min-w-[210px] gap-4 xl:pt-5`}
                    >
                      <h3 className={`max-w-34 `}>
                        TMDB {floorNumber(movie.vote_average)}
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
                  <ul className={`flex justify-start flex-wrap w-full`}>
                    <li className={`rounded-2xl bg-bgColor m-2 px-2`}>
                      {movie.release_date.replaceAll("-", " ")}
                    </li>
                    {listGenres?.map((item: string) => {
                      return (
                        <li
                          key={nanoid()}
                          className={`rounded-2xl bg-bgColor m-2 px-2`}
                        >
                          {item}
                        </li>
                      );
                    })}
                    <li className={`rounded-2xl bg-bgColor m-2 px-2`}>
                      {movie.runtime
                        ? hoursFromMinuts(movie.runtime)
                        : "Unknown duration"}
                    </li>
                  </ul>
                  <p className={`flex`}>{cutingString(movie.overview, 300)}</p>
                </div>
              </div>
            </div>
          </div>
          <div />
          <Image
            src={generateUrlImage(movie.backdrop_path, "1280")}
            alt={"Movie image"}
            width={600}
            height={380}
            priority={true}
            quality={75}
            className={`w-full h-full lg:aspect-[1440/810] object-cover lg:h-auto`}
          />
        </div>
      )}
    </>
  );
};
