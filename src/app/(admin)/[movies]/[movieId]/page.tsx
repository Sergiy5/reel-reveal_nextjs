import dynamic from "next/dynamic";
import SliderCarousel from "@/app/components/SliderCarousel";
import { MovieInfo } from "@/app/components/MovieInfo";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { MovieInfoTrailer } from "@/app/components/MovieInfoTrailer";
import { MovieInfoCast } from "@/app/components/MovieInfoCast";
import { getMovieById } from "@/app/services";
import { getSessionUser } from "@/utils";
import { sessionUserSignal } from "@/context/UserContext";
import { SimilarMovies } from "@/app/components/SimilarMovies";

const DynamicSimilarMovies = dynamic(
  () =>
    import("@/app/components/SimilarMovies").then((mod) => mod.SimilarMovies),
  { ssr: false }
);

const DynamicSliderCorousel = dynamic(
  () =>
    import("@/app/components/SliderCarousel").then((mod) => mod.SliderCarousel),
  { ssr: false }
);
// export async function generateStaticParams() {
 
    // return []; 
// }

export default async function OneMoviePage({
  params,
}: {
  params: { movieId: number};
  }) {
  
  if (typeof window === "undefined") {
    // Server-only logic here
  }
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
        <DynamicSliderCorousel />
        <TakeOurQuiz />
      </div>
    </main>
  );
}
