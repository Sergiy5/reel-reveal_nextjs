import { MovieInfo } from "@/app/components/MovieInfo";
import dynamic from "next/dynamic";
import SliderCarousel from "@/app/components/SliderCarousel";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { MovieInfoTrailer } from "@/app/components/MovieInfoTrailer";
import { MovieInfoCast } from "@/app/components/MovieInfoCast";

const DynamicSimilarMovies = dynamic(
  () =>
    import("@/app/components/SimilarMovies").then((mod) => mod.SimilarMovies),
  { ssr: false }
);

export async function generateStaticParams() {
 
    return [{ movie: "3"}]; 
}

export default async function OneMoviePage({
  params,
}: {
  params: { movie: string};
  }) {
  
  const { movie } = params;

  if (movie === "3") return (<div>Page</div>)
  
  const decodedMovie = JSON.parse(decodeURIComponent(movie));

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
