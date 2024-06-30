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
              "flex items-center justify-center w-auto aspect-[285/200] px-2 rounded-xl sm:rounded-[18px] bg-quizBtnGradient border-[1px] border-transparent ",
              "transition duration-300 ease-in-out hover:border-solid hover:scale-[1.01] hover:border-accentColor hover:text-accentColor",
              
              {
                // "focus:outline-2 focus:outline-accentColor focus:text-accentClickedColor":
                //   true,
              }
            )}
          >
            <p className=" font-normal text-xl sm:text-2xl md:text-3xl  text-inherit">
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
