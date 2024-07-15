import { getMovieById } from "@/app/api/actions/getMovieById";
import { MovieInfo } from "@/app/components/MovieInfo";
import SliderCarousel from "@/app/components/SliderCarousel";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { VideoComponent } from "@/app/components/VideoComponent";

export async function generateStaticParams() {

  return [{ id: ""}];
}
export default async function MoviePage({ params }: { params: { id: string | null} }) {

  const token = process.env.BEARER_TOKEN_TMDB;

  const movie = await getMovieById(params.id);
// console.log(movie)

  return (
    <main className={`pt-0`}>
      <MovieInfo movie={movie} />
      {/* <VideoComponent id={params.id} /> */}
      <SliderCarousel />
      <TakeOurQuiz />
    </main>
  );
}
