import clsx from "clsx";
import { QuizBtnsProps } from "@/typification";

export const QuizButtons: React.FC<QuizBtnsProps> = ({
  answers,
  collectQuiz,
  isActive,
}) => {

  return (
    <>
      {answers.map((item) => {
        const { answer, value } = item;
        // To prettify text in button to divide strings
        const [firstString, secondString] = answer.split(/\s*(?=\()/);
        const answerForAI = value.length ? value : answer;
        // console.log("first", answerForAI);
        return (
          <button
            key={answer}
            onClick={() => collectQuiz(answerForAI)}
            disabled={isActive}
            type="button"
            className={clsx(
              "flex items-center justify-center w-auto aspect-[285/200] px-2 rounded-xl sm:rounded-[18px] bg-quizBtnGradient border-[1px] border-transparent ",
              "transition duration-300 ease-in-out hover:border-solid hover:border-accentColor hover:text-accentColor",

              {
                // "focus:outline-2 focus:outline-accentColor focus:text-accentClickedColor":
                //   true,
              }
            )}
          >
            <p className=" text-xl sm:text-2xl md:text-3xl  text-inherit">
              {firstString}
              <br />
              {secondString}
            </p>
          </button>
        );
      })}
    </>
  );
};
