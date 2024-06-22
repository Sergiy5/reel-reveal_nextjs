import { useEffect, useState } from "react";
import { QuizProgresBar } from './QuizProgresBar';
import { QuizButtons } from './QuizButtons'
import {quizDataList} from '../../../public/ststic-data/quizDataList'
import { useResize } from "@/hooks";

export const QuizQuestions = ({ quizData }) => {
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(
    () => quizDataList[0]
  );
  const [currentPageForProgresBar, setCurrentPageForProgresBar] = useState(1);
  const [quizResult, setQuizResult] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const viewWidth = useResize();

  // Transition to the next question ================
  const moveOnToNextQueston = (listData, page) => {
    if (page < 8) {
      const currentQuiz = listData.filter(item => item.page === page + 1);
      setCurrentQuizQuestion(...currentQuiz);
    }
  };

  useEffect(() => {
    if (quizResult.length < 7) return;
    quizData(quizResult);
  }, [quizData, quizResult]);

  // Collect ansvers from quiz ======================
  const collectQuizChoices = e => {
    if (currentPageForProgresBar < 8) {
      setCurrentPageForProgresBar(page => page + 1);

      setQuizResult(prev => [...prev, e]);
    }
    if (page === 7) return setIsDisabled(true);
    moveOnToNextQueston(quizDataList, page);
  };

  const { quiz, title, page, options } = currentQuizQuestion;
  return (
    <div className={`flex items-center flex-col justify-center w-full gap-12`}>
      <div className={` flex flex-row justify-between w-full gap-5`}>
        <h2>
          <span className={` text-accentColor `}>{quiz}</span>
          {title}
        </h2>

        {viewWidth > 1024 ? (
          <QuizProgresBar page={currentPageForProgresBar} />
        ) : null}
      </div>

      <div
        className={` grid items-center flex-wrap grid-cols-2 gap-5 w-full h-auto lg:flex `}
      >
        <QuizButtons
          click={collectQuizChoices}
          isActiv={isDisabled}
          buttons={options}
        />
      </div>

      {viewWidth < 1025 ? (
        <QuizProgresBar page={currentPageForProgresBar} />
      ) : null}
    </div>
  );
};
