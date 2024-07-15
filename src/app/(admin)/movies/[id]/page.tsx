import { MovieInfo } from "@/app/components/MovieInfo";
import SliderCarousel from "@/app/components/SliderCarousel";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";

export async function generateStaticParams() {
return [{ id: "533535" }];
}
export default async function MoviePage({ params }: { params: { id: string } }) {

  return (
    <main className={`pt-0`}>
      <MovieInfo />
      <SliderCarousel />
      <TakeOurQuiz />
    </main>
  );
}
