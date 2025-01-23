import dynamic from "next/dynamic";
import { HowItWorks } from "@/app/components/howItWorks/HowItWorks";
import SliderCarousel from "@/app/components/sliderCarousel/SliderCarousel";
import { getSessionUser } from "@/utils";

const DynamicQuiz = dynamic(() =>
  import("../../components/quiz/Quiz").then((mod) => mod.Quiz)
);

export default async function Home() {
  const sessionUser = await getSessionUser();

  return (
    <main>
      <DynamicQuiz sessionUser={sessionUser} />
      <HowItWorks />
      <SliderCarousel />
    </main>
  );
}
