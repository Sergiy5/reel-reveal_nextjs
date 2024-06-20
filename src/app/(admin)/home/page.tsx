"use client";

import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { LinkToQuiz } from "@/app/components/LinkToQuiz";
import { useDeviceType } from "@/hooks";

export default function Home() {
  const deviceType = useDeviceType();

  return (
    <main>
      <Hero />
      <HowItWorks />

      {deviceType !== "mobile" && <LinkToQuiz />}
    </main>
  );
}
