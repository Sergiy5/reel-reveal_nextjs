import { ButtonOrLink } from "./ui/ButtonOrLink";

export const LinkToQuiz: React.FC = () => {
  
  return (
    <ButtonOrLink
      href={"/quiz"}
      className={`w-[249px] mx-auto sm:w-[343px] md:w-[249px]`}
    >
      take a quiz
    </ButtonOrLink>
  );
};
