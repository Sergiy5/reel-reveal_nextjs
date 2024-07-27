import FilmPiksIcon from "../../../public/icons/film-picks.svg";
import TakeQuizIcon from "../../../public/icons/take-quiz.svg";
import ExploreAndEnjoyIcon from "../../../public/icons/explore-and-enjoy.svg";
import HowItWorksBgEllips from "../../../public/icons/how-it-works_bg-ellips.svg";

export const HowItWorks = () => {

  return (
    <article
      id="how it work"
      className={` relative flex items-start flex-col w-full gap-6 text-textColor md:items-center xl:gap-[38px] xl:gap-22 `}
    >
      <HowItWorksBgEllips
        className={`absolute w-full h-auto blur-hero top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-full lg:h-auto`}
      />

      <h2>How it works</h2>
      <div
        className={` flex items-start justify-between flex-col w-full h-auto gap-6 lg:flex-row`}
      >
        <div
          className={` flex-1 items-start flex-col gap-3.5 w-full h-auto lg:gap-6 lg:justify-start `}
        >
          <TakeQuizIcon className={`w-[61px] h-[61px]`} />

          <h3>Take the Quiz</h3>
          <p>
            A short quiz contains 7 questions that delve into your cinematic
            preferences and mood.
          </p>
        </div>
        <div
          className={`flex-1 items-start flex-col gap-3.5 w-full h-auto lg:gap-6 lg:justify-start `}
        >
          <FilmPiksIcon className={`w-[61px] h-[61px]`} />

          <h3>Get Film Picks</h3>
          <p>
            Based on your quiz responses, receive a personalized movie
            recommendations just for you.
          </p>
        </div>
        <div
          className={`flex-1 items-start flex-col gap-3.5 w-full h-auto lg:gap-6 lg:justify-start `}
        >
          <ExploreAndEnjoyIcon className={`w-[61px] h-[61px]`} />

          <h3>Explore and Enjoy</h3>
          <p>
            Explore the recommendations, pop your popcorn and enjoy, we have a
            movie for everybody!
          </p>
        </div>
      </div>
    </article>
  );
};
