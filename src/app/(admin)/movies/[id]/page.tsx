import { MovieInfo } from "@/app/components/MovieInfo";
import SliderCarousel from "@/app/components/SliderCarousel";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { VideoComponent } from "@/app/components/VideoComponent";

export async function generateStaticParams() {

return [{ id: "X" }];
}
export default async function MoviePage({ params }: { params: { id: string } }) {

  const token = process.env.BEARER_TOKEN_TMDB;

  const movie = await fetch(`https://api.themoviedb.org/3/movie/${params.id}`, {
    next: { revalidate: 3600 },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
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
