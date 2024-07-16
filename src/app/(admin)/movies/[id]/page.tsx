import { MovieInfo } from "@/app/components/MovieInfo";
import SliderCarousel from "@/app/components/SliderCarousel";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { VideoComponent } from "@/app/components/VideoComponent";

export async function generateStaticParams() {

return [{id: "1"}];
}

// type MoviePageParams = {params:{id: string}}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params

  if (id === "1") {
    return (<div>Page</div>)
  }


  return (
    <>
    <main className={`pt-0`}>
      <MovieInfo id={id} />
      <VideoComponent id={params.id} />
      <SliderCarousel />
      <TakeOurQuiz />
    </main>
    </>
  );
}
