import { useEffect, useState } from "react";
import { QuizProgresBar } from "./QuizProgresBar";
import { QuizButtons } from "./QuizButtons";
import { quizDataList } from "../../../public/quiz-data/quizDataList";
import { useResize } from "@/hooks";
import { nextQuestion } from "@/lib";
import { quizDataType, QuizQuestionsProps } from "@/typification";

export const QuizQuestions: React.FC<QuizQuestionsProps> = ({ quizData }) => {
  const [currentQuiz, setCurrentQuiz] = useState<quizDataType>(quizDataList[0]);
  const [currentPageForProgresBar, setCurrentPageForProgresBar] = useState(1);
  const [quizResult, setQuizResult] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const viewWidth = useResize();

  useEffect(() => {
    if (quizResult.length < 8) return;
    quizData(quizResult);
  }, [quizData, quizResult]);

  // Collect answers from quiz ======================
  const collectQuizChoices = (e: string) => {
    if (currentPageForProgresBar < 9) {
      setQuizResult((prev) => [...prev, e]);
      setCurrentPageForProgresBar((page) => page + 1);
    }
    if (currentPageForProgresBar === 8) return setIsDisabled(true);

    // Transition to the next question ================
    const nextQuiz = nextQuestion(quizDataList, currentPageForProgresBar);

    if (nextQuiz) setCurrentQuiz(nextQuiz);
  };

  const { quiz, title, options } = currentQuiz;

  return (
    <div className={`flex items-center flex-col justify-center w-full gap-12`}>
      <div className={`flex flex-row justify-between w-full gap-5`}>
        <h2>
          <span className={`text-accentColor`}>{quiz}</span>
          {title}
        </h2>

        {viewWidth > 1024 ? (
          <QuizProgresBar page={currentPageForProgresBar} />
        ) : null}
      </div>

      <div
        className={`grid items-center grid-cols-2 gap-5 w-full h-auto lg:grid-cols-4`}
      >
        <QuizButtons
          collectQuiz={collectQuizChoices}
          isActive={isDisabled}
          answers={options}
        />
      </div>
      {viewWidth < 1025 ? (
        <QuizProgresBar page={currentPageForProgresBar} />
      ) : null}
    </div>
  );
};
