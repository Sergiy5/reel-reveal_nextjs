"use client";

import { toast } from "react-toastify";
import useSWR from "swr";
import { Loader } from "./ui/Loader";
import { QuizListMovies } from "./QuizListMovies";
import { QuizQuestions } from "./QuizQuestions";
import { useState } from "react";
import { fetchQuizMovies } from "../actions/fetchQuizMovies";
import { sessionUser } from "@/typification";
// import { qiuzMoviesSignal } from "@/context/MoviesContext";
// import { ISessionUserSignal } from "@/context/UserContext";

interface IQuizProps {
  sessionUser: sessionUser;
}

export const Quiz: React.FC<IQuizProps> = ({ sessionUser }) => {
  const [quizResult, setQuizResult] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(true)
    // () =>
  //   qiuzMoviesSignal.value.length ? false : true
  // );

  // Use SWR to fetch quiz movies based on quizResult
  const {
    data: listMovies,
    error,
    isValidating,
  } = useSWR(
    quizResult.length >= 7 ? ["quizMovies", quizResult] : null,
    () => fetchQuizMovies(quizResult),
    {
      revalidateOnFocus: false,
      onSuccess: (movies) => {
        // qiuzMoviesSignal.value = movies ?? [];
        setIsQuizActive(false);
      },
      onError: (error: any) => {
        toast.error(error.message);
        console.error(error);
      },
    }
  );

  return (
    <div className="relative flex items-center justify-center py-[131px] w-full gap-12">
      <div className="absolute top-0 w-lvw h-10 bg-repeat-x bg-contain z-10 bg-borderIcon rotate-180"></div>

      {isValidating ? (
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
