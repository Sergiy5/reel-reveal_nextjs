"use client"

import { MovieInfo } from "@/app/components/MovieInfo";
import SliderCarousel from "@/app/components/SliderCarousel";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { MovieInfoTrailer } from "@/app/components/MovieInfoTrailer";
import { MovieInfoCast } from "@/app/components/MovieInfoCast";
import dynamic from "next/dynamic";

const DynamicSimilarMovies = dynamic(
  () =>
    import("@/app/components/SimilarMovies").then((mod) => mod.SimilarMovies),
  { ssr: false }
);

// export async function generateStaticParams() {
//   return [{ movies: "11", movie: "1" }];
// }

export default function OneMoviePage({
  params,
}: {
  params: { movie: string; movies: string };
}) {
  const { movie} = params;
  const decodedMovie = JSON.parse(decodeURIComponent(movie as string));
  const { id, title, original_title } = decodedMovie;

  return (
    <main className={`pt-0 gap-0`}>
      <MovieInfo movie={decodedMovie} />
      <MovieInfoTrailer id={id} />
      <div className={`flex items-center justify-center flex-col w-full gap-16 md:gap-20 xl:gap-30`}>
        <MovieInfoCast id={id} />
        <DynamicSimilarMovies title={title ?? original_title} />
        <SliderCarousel />
        <TakeOurQuiz />
      </div>
    </main>
  );
}
