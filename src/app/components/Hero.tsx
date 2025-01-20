import Image from "next/image";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import { ShowQuizCount } from "./showQuizCount/ShowQuizCount";

export const Hero: React.FC = () => {

  return (
    <div
      className={`relative flex justify-between flex-col-reverse h-auto gap-6 lg:flex-row -mb-10 `}
    >
      <article
        className={`flex items-start justify-center flex-col text-textColor w-full h-auto gap-6
             lg:pr-20`}
      >
        <h1 className={` lg:justify-start`}>
          Discover Your Perfect Movie with ReelReveal!
        </h1>

        <p className={` lg:justify-start`}>
          Tired of endlessly scrolling through streaming platforms, unsure of
          what to watch? Look no further! Reel Reveal is your go-to service for
          finding the perfect movie match.
        </p>

        <ButtonOrLink href="/quiz" className={`z-10 mt-2`}>
          <ShowQuizCount />{" "}start quiz
        </ButtonOrLink>
      </article>

      <div
        className={`relative flex items-center justify-center w-full h-auto`}
      >
        <Image
          src={"/images/hero-image.webp"}
          width={590}
          height={584}
          alt="Hero movies colage"
          priority
          className={` aspect-[590/584] z-10`}
        />
        <Image
          src={"/icons/hero_bg-ellips.svg"}
          width={833}
          height={890}
          alt="Hero movies"
          className={` absolute w-auto h-auto blur-hero `}
        />
      </div>
    </div>
  );
};
