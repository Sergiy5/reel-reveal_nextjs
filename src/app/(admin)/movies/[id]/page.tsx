import { getMovieById } from "@/app/api/actions/getMovieById";
import { MovieInfo } from "@/app/components/MovieInfo";
import SliderCarousel from "@/app/components/SliderCarousel";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { VideoComponent } from "@/app/components/VideoComponent";

export async function generateStaticParams() {

return [];
}
export default async function MoviePage({ params }: { params: { id: string | []} }) {

  // const token = process.env.BEARER_TOKEN_TMDB;

  // const movie = await getMovieById(params.id);
// console.log("============Page=========", movie)
  const { id } = params
  // console.log("++++++++++++++++++++++++++++++++++ID+++++++++++++++++",id)
  return (
    <>
    {params.id ? <main className={`pt-0`}>
      <MovieInfo id={id} />
      {/* <VideoComponent id={params.id} /> */}
      <SliderCarousel />
      <TakeOurQuiz />
    </main> : <div>Loading...</div>}
    </>
  );
}
