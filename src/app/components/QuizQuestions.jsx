import { useEffect, useState } from "react";
import { QuizProgresBar } from './QuizProgresBar';
import { QuizButtons } from './QuizButtons'
import {quizDataList} from '../../../public/quiz-data/quizDataList'
import { useResize } from "@/hooks";
import { nextQuestion } from "@/lib";

export const QuizQuestions = ({ quizData }) => {
  const [currentQuiz, setCurrentQuiz] = useState(
    () => quizDataList[0]
  );
  const [currentPageForProgresBar, setCurrentPageForProgresBar] = useState(1);
  const [quizResult, setQuizResult] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const viewWidth = useResize();
  
  useEffect(() => {
    if (quizResult.length < 7) return;
    quizData(quizResult);
  }, [quizData, quizResult]);
  
  // Collect ansvers from quiz ======================
  const collectQuizChoices = e => {
    if (currentPageForProgresBar < 8) {
      
      setQuizResult(prev => [...prev, e]);
      
      setCurrentPageForProgresBar(page => page + 1);
    }
    if (page === 7) return setIsDisabled(true);
    // Transition to the next question ================
    const currentQuiz = nextQuestion(quizDataList, page);

    setCurrentQuiz(...currentQuiz);

  };

  const { quiz, title, page, options } = currentQuiz;
  return (
    <div className={`flex items-center flex-col justify-center w-full gap-12`}>
      <div className={` flex flex-row justify-between w-full gap-5`}>
        <h2 >
          <span className={` text-accentColor `}>{quiz}</span>
          {title}
        </h2>

        {viewWidth > 1024 ? (
          <QuizProgresBar page={currentPageForProgresBar} />
        ) : null}
      </div>

      <div
        className={` grid items-center grid-cols-2 gap-5 w-full h-auto lg:grid-cols-4 `}
      >
        <QuizButtons
          collectQuiz={collectQuizChoices}
          isActiv={isDisabled}
          answers={options}
        />
      </div>
      {viewWidth < 1025 ? (
        <QuizProgresBar page={currentPageForProgresBar} />
      ) : null}
    </div>
  );
};
