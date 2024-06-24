import clsx from "clsx";
import { QuizBtnsProps } from "@/types";

export const QuizButtons: React.FC<QuizBtnsProps> = ({
  answers,
  collectQuiz,
  isActive,
}) => {

  return (
    <>
      {answers.map((item) => {
        // To prettify text in button to divide strings
        const [first, second] = item.split(/\s*(?=\()/);

        return (
          <button
            key={item}
            onClick={() => collectQuiz(item)}
            disabled={isActive}
            type="button"
            className={clsx(
              "flex items-center justify-center font-normal text-2xl leading-[114%] w-auto aspect-[57/40] text-inherit rounded-[18px] border",
              "transition duration-350 ease-[cubic-bezier(0.4, 0, 0.2, 1)]",
              "md:w-[calc((100%-60px)/4)] md:aspect-[57/40] lg:w-[285px] lg:h-[200px]",
              {
                "bg-[radial-gradient(ellipse_at_center,_rgb(32,43,61),_colors.bgColor_160%)]":
                  !isActive,
                "transform-none": !isActive,
                "hover:scale-[1.01] hover:border-accentColor hover:text-accentColor":
                  !isActive,
                "focus:outline-2 focus:outline-accentColor focus:text-accentClickedColor":
                  true,
                "active:transform-none": !isActive,
              }
            )}
          >
            <p>
              {first}
              <br />
              {second}
            </p>
          </button>
        );
      })}
    </>
  );
};
