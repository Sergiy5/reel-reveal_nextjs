import { MovieInfo } from "@/app/components/MovieInfo";
import SliderCarousel from "@/app/components/SliderCarousel";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { MovieInfoTrailer } from "@/app/components/MovieInfoTrailer";
import { MovieInfoCast } from "@/app/components/MovieInfoCast";
import { getTrailer } from "@/app/api/actions/getTrailler";
import { getMovieCast } from "@/app/api/actions/getMovieCast";
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

  const traillerId = await getTrailer(`${id}`);
  const castMovie = await getMovieCast(`${id}`);

  return (
    <main className={`pt-0 `}>
      <MovieInfo movie={decodedMovie} />
      <MovieInfoTrailer id={traillerId} />
      <MovieInfoCast cast={castMovie} />
      <DynamicSimilarMovies title={(title ?? original_title)} />
      <SliderCarousel />
      <TakeOurQuiz />
    </main>
  );
}
