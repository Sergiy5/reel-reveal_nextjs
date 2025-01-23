import Image from "next/image";
import { HowItWorksItem } from "./HowItWorksItem";

export const HowItWorks = () => {
  return (
    <article
      id="how it work"
      className={` relative flex items-start flex-col w-full gap-12 text-textColor md:items-center xl:gap-[38px] xl:gap-22 `}
    >
      <Image
        src={"/icons/how-it-works_bg-ellips.svg"}
        alt="Background ellips"
        width={1440}
        height={850}
        priority
        className={`absolute w-full h-auto blur-hero top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-full lg:h-auto`}
      />

      <h2>How it works</h2>
      <div
        className={` flex items-start justify-between flex-col w-full h-auto gap-10 lg:gap-20 lg:flex-row`}
      >
        <HowItWorksItem
          id="icon-take_quiz"
          title="Take the Quiz"
          text="A short quiz contains 7 questions that delve into your cinematic preferences and mood."
        />

        <HowItWorksItem
          id="icon-get-film-picks"
          title="Get Film Picks"
          text="Based on your quiz responses, receive a personalized movie recommendations just for you."
        />

        <HowItWorksItem
          id="icon-explore-and-enjoy"
          title="Explore and Enjoy"
          text="Explore the recommendations, pop your popcorn and enjoy, we have a movie for everybody!"
        />
      </div>
    </article>
  );
};
