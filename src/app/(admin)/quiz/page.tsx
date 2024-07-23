import { getManyMoviesByTitle } from "@/app/api/actions";
import { HowItWorks } from "@/app/components/HowItWorks";
import { Quiz } from "@/app/components/Quiz";
import SliderCarousel from "@/app/components/SliderCarousel";

export default function Home() {
  return (
    <main>
      <Quiz action={getManyMoviesByTitle} />
      <HowItWorks />
      <SliderCarousel />
    </main>
  );
}
