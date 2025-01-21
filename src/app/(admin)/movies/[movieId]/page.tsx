import dynamic from "next/dynamic";
import { MovieInfo } from "@/app/components/MovieInfo";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { MovieInfoTrailer } from "@/app/components/MovieInfoTrailer";
import { getMovieById } from "@/app/services";
import { getSessionUser } from "@/utils";

const DynamicSimilarMovies = dynamic(() =>
  import("@/app/components/SimilarMovies").then((mod) => mod.SimilarMovies)
);

const DynamicSliderCarousel = dynamic(() =>
  import("@/app/components/SliderCarousel").then((mod) => mod.SliderCarousel)
);

const DynamicMovieInfoCast = dynamic(() =>
  import("@/app/components/MovieInfoCast").then((mod) => mod.MovieInfoCast)
);

const DynamicMovieInfoTrailer = dynamic(() => import ("@/app/components/MovieInfoTrailer").then((mod) => mod.MovieInfoTrailer));

export default async function OneMoviePage(props: {
  params: Promise<{ movieId: number }>;
}) {
  const params = await props.params;
  const { movieId } = params;
  const sessionUser = await getSessionUser();

  const movie = await getMovieById(movieId);

  const { title, original_title } = movie;

  return (
    <main className={`pt-0 gap-0`}>
      <MovieInfo movie={movie} />
      <MovieInfoTrailer id={movieId} />
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
        <TakeOurQuiz />
      </div>
    </main>
  );
}
