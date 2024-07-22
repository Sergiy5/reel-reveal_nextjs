import { MovieInfo } from "@/app/components/MovieInfo";
import SliderCarousel from "@/app/components/SliderCarousel";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { MovieInfoTrailer } from "@/app/components/MovieInfoTrailer";
import { MovieInfoCast } from "@/app/components/MovieInfoCast";

export async function generateStaticParams() {
  const movie = {id: 1}
   const movieString = encodeURIComponent(JSON.stringify(movie));
  return [{ movie: movieString, movies: "1" }];
}

export default async function Page({ params }: { params: { movie: string; movies: string} }) {
  const { movie } = params;
  const decodedMovie = JSON.parse(decodeURIComponent(movie as string));
  const { id } = decodedMovie;

  if (id === 1) {
    return <div>Page</div>;
  }

  return (
    <>
      <main className={`pt-0 `}>
        <MovieInfo movie={decodedMovie} />
        <MovieInfoTrailer id={id} />
        <MovieInfoCast id={id} />
        <SliderCarousel />
        <TakeOurQuiz />
      </main>
    </>
  );
}
