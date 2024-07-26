import { MovieInfo } from "@/app/components/MovieInfo";
import SliderCarousel from "@/app/components/SliderCarousel";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { MovieInfoTrailer } from "@/app/components/MovieInfoTrailer";
import { MovieInfoCast } from "@/app/components/MovieInfoCast";
import { getMovieCast } from "@/app/services/getMovieCast";
import dynamic from "next/dynamic";

const DynamicSimilarMovies = dynamic(
  () =>
    import("@/app/components/SimilarMovies").then((mod) => mod.SimilarMovies),
  { ssr: false }
);

export async function generateStaticParams() {
  return [{ movies: "11", movie: "1" }];
}

export default async function OneMoviePage({
  params,
}: {
  params: { movie: string; movies: string };
}) {
  const { movie, movies } = params;
  const decodedMovie = JSON.parse(decodeURIComponent(movie as string));
  const { id, title, original_title } = decodedMovie;

  if (movie === "1") return <div>Page</div>;
  if (movies === "11") return <div>Page</div>;

  const castMovie = await getMovieCast(`${id}`);

  return (
    <main className={`pt-0 gap-0`}>
      <MovieInfo movie={decodedMovie} />
      <MovieInfoTrailer id={id} />
      <div className={`flex items-center justify-center flex-col w-full gap-16 md:gap-20 xl:gap-30`}>
        <MovieInfoCast cast={castMovie} />
        <DynamicSimilarMovies title={title ?? original_title} />
        <SliderCarousel />
        <TakeOurQuiz />
      </div>
    </main>
  );
}
