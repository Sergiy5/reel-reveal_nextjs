import dynamic from "next/dynamic";
import { MovieInfo } from "@/app/components/movieInfo/MovieInfo";
import { getMovieById } from "@/app/services";
import { getSessionUser } from "@/utils";

const DynamicSimilarMovies = dynamic(() =>
  import("@/app/components/similarMovies/SimilarMovies").then(
    (mod) => mod.SimilarMovies
  )
);

const DynamicSliderCarousel = dynamic(() =>
  import("@/app/components/sliderCarousel/SliderCarousel").then((mod) => mod.SliderCarousel)
);

const DynamicMovieInfoCast = dynamic(() =>
  import("@/app/components/movieInfo/MovieInfoCast").then(
    (mod) => mod.MovieInfoCast
  )
);

const DynamicMovieInfoTrailer = dynamic(() =>
  import("@/app/components/movieInfo/MovieInfoTrailer").then(
    (mod) => mod.MovieInfoTrailer
  )
);

export default async function OneMoviePage(props: {
  params: Promise<{ movieId: number }>;
}) {
  const params = await props.params;
  const { movieId } = params;

  const sessionUser = await getSessionUser();

  const movie = await getMovieById(movieId);

  const { title, original_title } = movie;

  return (
    <div className="flex flex-col items-center overflow-hidden md:pt-0 lg:pt-0 gap-0 md:gap-0">
      <MovieInfo movie={movie} />
      <div className="page-wrapper">
        <div className="w-full flex items-center justify-center">

        <DynamicMovieInfoTrailer id={movieId} />
        </div>
        <div
          className={`flex items-center justify-center flex-col w-full gap-16 md:gap-20 xl:gap-30`}
        >
          <DynamicMovieInfoCast id={movieId} />
          <DynamicSimilarMovies
            movieId={movieId}
            title={title ?? original_title}
            sessionUser={sessionUser}
          />
          <DynamicSliderCarousel />
        </div>
      </div>
    </div>
  );
}
