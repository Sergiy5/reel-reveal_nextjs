import dynamic from "next/dynamic";
import { HowItWorks } from "@/app/components/HowItWorks";
import SliderCarousel from "@/app/components/SliderCarousel";

const DynamicQuiz = dynamic(
  () => import("../../components/Quiz").then((mod) => mod.Quiz),
  { ssr: false }
);

export default function Home() {
  return (
    <main>
      <DynamicQuiz  />
      <HowItWorks />
      <SliderCarousel />
    </main>
  );
}
