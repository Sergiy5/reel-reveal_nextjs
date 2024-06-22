"use client";

import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { LinkToQuiz } from "@/app/components/LinkToQuiz";
import { Quiz } from "@/app/components/Quiz";
import { useLayoutContext } from "@/context/LayoutContext";

export default function Home() {
  const { deviceType } = useLayoutContext();

  return (
    <main>
      <Hero />
      <HowItWorks />
      <Quiz />
      {deviceType !== "mobile" && <LinkToQuiz />}
    </main>
  );
}
