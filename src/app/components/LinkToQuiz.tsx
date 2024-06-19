import Link from "next/link";
import { ViewWidth } from "@/types";

export const LinkToQuiz: React.FC<ViewWidth> = ({ viewWidth }) => {

  return (
    <div
      className={` flex items-center justify-center flex-col gap-[28px] z-10 md:flex-row md:gap-12`}
    >
      <h2 className={`hidden md:flex`}>Take Our Quiz!</h2>

      <Link href={"/quiz"} className={`link-btn w-[343px] md:w-[249px]`}>
        take a quiz
      </Link>
    </div>
  );
};
