"use clent";

import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { firstElementsFromArray, scrollToY } from "@/lib";
import { Movie } from "@/types";
import { QuizListMovies } from "./QuizListMovies";
import { QuizQuestions } from "./QuizQuestions";
import { getOpenAiAPI, getQuizMovies } from "@/api";

export const Quiz = () => {
  const [quizResult, setQuizResult] = useState<string[]>([]);
  const [moviesFromOpenaiApi, setTitleMoviesFromOpenaiApi] = useState<string[]>([]);
  const [allMoviesForOneSession, setAllMoviesForOneSession] = useState<string[]>(
    []
  );
  const [listMovies, setListMovies] = useState<Movie[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const clickLoadMore = (moviesArr: string[]) => {
    if (!moviesArr.length) return;

    const filteredMovies = moviesArr.filter((movie) =>
      allMoviesForOneSession.indexOf(movie)
    );
    setAllMoviesForOneSession((prev) => [...prev, ...filteredMovies]);
  };

  const onNewQuiz = () => {
    setIsQuizActive(true);
    setAllMoviesForOneSession([]);
    setQuizResult([]);
  };
  // Request (POST) to openai API =====================
  useEffect(() => {
    if (quizResult.length < 7) return;

    const openAiAPI = async (quizMovies: string[], existedMovies: string[]) => {
      setIsLoading(true);

      try {
        const response = await getOpenAiAPI(quizMovies, existedMovies);
        if (!response) {
          setIsLoading(false);
          alert("Error... Try again");
          throw new Error();
        }
        setTitleMoviesFromOpenaiApi(response);
      } catch (error) {
        console.error("Error fetch data from openai:", error);
      }
    };

    openAiAPI(quizResult, allMoviesForOneSession);
  }, [quizResult, allMoviesForOneSession]);

  // Rquest to TMdB
  useEffect(() => {
    if (!moviesFromOpenaiApi.length) return;

    const getMoviesFromAIResult = async (movies: string[]) => {
      try {
        const response = await getQuizMovies(movies);

        const result = firstElementsFromArray(response);

        if (result) setListMovies(result);

        setIsQuizActive(false);
        scrollToY(1440);
      } catch (error) {
        console.log("Error in Quiz!!!", error);
      } finally {
        setIsLoading(false);
      }
    };

    const lastArrayFromAI = moviesFromOpenaiApi.slice(-7);

    getMoviesFromAIResult(lastArrayFromAI);
  }, [moviesFromOpenaiApi]);

  return (
    <div
      className={`relative flex items-center justify-center py-[131px] w-full gap-12`}
    >
      <div className={` absolute top-0 border-quiz bg-border-icon `}></div>
      {isLoading ? (
        <Loader />
      ) : isQuizActive ? (
        <QuizQuestions quizData={setQuizResult} />
      ) : (
        <QuizListMovies
          isQuizActive={onNewQuiz}
          arrMovies={listMovies}
          onLoadMoreCard={clickLoadMore}
        />
      )}
      <div className={` absolute bottom-0 border-quiz bg-border-icon `}></div>

    </div>
  );
};
