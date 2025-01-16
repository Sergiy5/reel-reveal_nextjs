"use client";

import { useState } from "react";
import useSWR from "swr";
import { toast } from "react-toastify";
import { Loader } from "./ui/Loader";
import { QuizListMovies } from "./QuizListMovies";
import { QuizQuestions } from "./QuizQuestions";
import { fetchQuizMovies } from "../actions/fetchQuizMovies";
import { sessionUser } from "@/typification";
import { qiuzMoviesSignal } from "@/context/MoviesContext";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import { useContextCountQuiz } from "@/context/CountQuizContext";
import { useIndexedDB } from "@/hooks";
import { isTodayOrPast } from "@/utils";


interface IQuizProps {
  sessionUser: sessionUser;
}

export const Quiz: React.FC<IQuizProps> = ({ sessionUser }) => {
  const [quizResult, setQuizResult] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(() =>
    qiuzMoviesSignal.value.length ? false : true
  );

  // Use context count pased quiz
  const { decrement, reset } = useContextCountQuiz();
  // Use IndexedDB
  const { setIndexedDB, getIndexedDB } = useIndexedDB();
  // Check if it's today
  const isToday = isTodayOrPast(""); //"YYYY-MM-DD"

  // Use SWR to fetch quiz movies based on quizResult
  const {
    data: listMovies,
    error,
    isValidating,
    mutate,
  } = useSWR(
    quizResult.length >= 7 ? ["quizMovies", quizResult] : null,
    () => fetchQuizMovies(quizResult),
    {
      revalidateOnFocus: false,
      onSuccess: (movies) => {
        qiuzMoviesSignal.value = movies ?? [];
        setIsQuizActive(false);
        decrement();
      },
      onError: (error: any) => {
        toast.error(error.message);
        console.error(error);
      },
    }
  );

  if (error) {
    return (
      <div className="flex items-center justify-center flex-col gap-12">
        <h2 className={`pr-2.5 pl-2.5`}>Somthing went wrong</h2>;
        <ButtonOrLink onClick={mutate}>try again</ButtonOrLink>
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center py-[131px] w-full gap-12">
      <div className="absolute top-0 w-lvw h-10 bg-repeat-x bg-contain z-10 bg-borderIcon rotate-180"></div>

      {error ? (
        <div className="flex items-center justify-center flex-col gap-12">
          <h2 className={`pr-2.5 pl-2.5`}>Somthing went wrong</h2>;
          <ButtonOrLink onClick={mutate}>try again</ButtonOrLink>
        </div>
      ) : isValidating ? (
        <Loader />
      ) : isQuizActive ? (
        <QuizQuestions quizData={setQuizResult} />
      ) : (
        <QuizListMovies
          clearPrevQuiz={() => {
            setQuizResult([]);
            setIsQuizActive(true);
          }}
          sessionUser={sessionUser}
          arrMovies={listMovies ?? []}
        />
      )}
      <div className="absolute bottom-0 w-lvw h-10 bg-repeat-x bg-contain z-10 bg-borderIcon"></div>
    </div>
  );
};
