import clsx from "clsx";

interface QuizBtnsProps {
  answers: { answer: string; value: string }[];
  collectQuiz: (answer: string) => void;
  isDisabled: boolean;
}

export const QuizButtons: React.FC<QuizBtnsProps> = ({
  answers,
  collectQuiz,
  isDisabled,
}) => {
  return (
    <>
      {answers.map((item) => {
        const { answer, value } = item;
        // To prettify text in button to divide strings
        const [firstString, secondString] = answer.split(/\s*(?=\()/);
        const answerForAI = value.length ? value : answer;

        return (
          <button
            key={answer}
            onClick={() => collectQuiz(answerForAI)}
            disabled={isDisabled}
            type="button"
            className={`
              "flex items-center justify-center w-auto aspect-[285/200] px-2 rounded-xl sm:rounded-[18px] bg-quizBtnGradient border-[1px] border-transparent ",
              "transition duration-300 ease-in-out ",

              ${isDisabled ? "opacity-50 cursor-default" : "hover:border-solid hover:border-accentColor hover:text-accentColor"},
                
              }
            `}
          >
            <p className=" text-xl sm:text-2xl md:text-3xl  lg:text-xl">
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
