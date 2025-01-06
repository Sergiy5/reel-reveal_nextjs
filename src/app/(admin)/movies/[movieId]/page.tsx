import dynamic from "next/dynamic";
import { MovieInfo } from "@/app/components/MovieInfo";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { MovieInfoTrailer } from "@/app/components/MovieInfoTrailer";
import { MovieInfoCast } from "@/app/components/MovieInfoCast";
import { getMovieById } from "@/app/services";
import { getSessionUser } from "@/utils";
// import { sessionUserSignal } from "@/context/UserContext";

const DynamicSimilarMovies = dynamic(
  () =>
    import("@/app/components/SimilarMovies").then((mod) => mod.SimilarMovies)
);

const DynamicSliderCarousel = dynamic(
  () =>
    import("@/app/components/SliderCarousel").then((mod) => mod.SliderCarousel)
);


export default async function OneMoviePage(
  props: {
    params: Promise<{ movieId: number}>;
    }
) {
  const params = await props.params;

  const sessionUser = await getSessionUser();

  const { movieId } = params;

  const movie = await getMovieById(movieId);

  const { title, original_title } = movie;

  return (
    <main className={`pt-0 gap-0`}>
      <MovieInfo movie={movie} />
      <MovieInfoTrailer id={movieId} />
      <div
        className={`flex items-center justify-center flex-col w-full gap-16 md:gap-20 xl:gap-30`}
      >
        <MovieInfoCast id={movieId} />
        <DynamicSimilarMovies
          sessionUser={sessionUser}
          movieId={movieId}
          title={title ?? original_title}
        />
        <DynamicSliderCarousel />
        <TakeOurQuiz />
      </div>
    </main>
  );
}
