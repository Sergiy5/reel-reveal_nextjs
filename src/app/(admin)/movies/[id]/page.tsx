import { getMovieById } from "@/app/api/actions/getMovieById";
import { MovieInfo } from "@/app/components/MovieInfo";
import SliderCarousel from "@/app/components/SliderCarousel";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { VideoComponent } from "@/app/components/VideoComponent";

interface MoviePageProps {
  params: {
    id: string;
  };
}

export default async function MoviePage({ params }: MoviePageProps) {

  const movie = await getMovieById(params.id);
  
  return (
    <>
      {params.id ? (
        <main className={`pt-0`}>
          <MovieInfo movie={movie} />
          {/* <VideoComponent id={params.id} /> */}
          <SliderCarousel />
          <TakeOurQuiz />
        </main>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
