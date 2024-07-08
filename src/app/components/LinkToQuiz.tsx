import Link from "next/link";

export const LinkToQuiz: React.FC = () => {
  
  return (
    <Link
      href={"/quiz"}
      className={`link-btn w-[249px] mx-auto sm:w-[343px] md:w-[249px]`}
    >
      take a quiz
    </Link>
  );
};
