import Link from "next/link";
import { TypeDevice, ViewWidth } from "@/types";

export const LinkToQuiz: React.FC = () => {
  
  return (
    <div
      className={` flex items-center justify-center flex-col gap-[28px] z-10 md:flex-row md:gap-12`}
    >
      <h2 className={`hidden md:flex`}>Take Our Quiz!</h2>

      <Link
        href={"/quiz"}
        className={`link-btn w-[249px] sm:w-[343px] md:w-[249px]`}
      >
        take a quiz
      </Link>
    </div>
  );
};
