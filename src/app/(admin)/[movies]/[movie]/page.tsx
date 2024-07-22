import { MovieInfo } from "@/app/components/MovieInfo";
import SliderCarousel from "@/app/components/SliderCarousel";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { MovieInfoTrailer } from "@/app/components/MovieInfoTrailer";
import { MovieInfoCast } from "@/app/components/MovieInfoCast";
import { SimilarMovies } from "@/app/components/SimilarMovies";

export async function generateStaticParams() {
  
  return [{movies: "11", movie: '1' }];
}

export default async function OneMoviePage({ params }: { params: { movie: string, movies: string} }) {
  const { movie, movies } = params;
  const decodedMovie = JSON.parse(decodeURIComponent(movie as string));
  const { id } = decodedMovie;
  
  if (movie === "1") return <div>Page</div>;
  if (movies === "11") return <div>Page</div>;


  return (
    <>
      <main className={`pt-0 `}>
        <MovieInfo movie={decodedMovie} />
        <MovieInfoTrailer id={id} />
        <MovieInfoCast id={id} />
        <SimilarMovies movie={decodedMovie} />
        <SliderCarousel />
        <TakeOurQuiz />
      </main>
    </>
  );
}
