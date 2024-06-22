"use clent";

import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { getOpenAiAPI, getQuizMovies } from "@/api";
import { firstElementsFromArray, scrollToY } from "@/lib";
import { Movie } from "@/types";
import { QuizListMovies } from "./QuizListMovies";
import { QuizQuestions } from "./QuizQuestions";

export const Quiz = () => {
  const [quizResult, setQuizResult] = useState<string[]>([]);
  const [moviesFromOpenaiApi, setMoviesFromOpenaiApi] = useState<Movie[]>([]);
  const [allMoviesForOneSession, setAllMoviesForOneSession] = useState<Movie[]>(
    []
  );
  const [listMovies, setListMovies] = useState<Movie[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const clickLoadMore = (moviesArr: Movie[]) => {
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

    const openAiAPI = async (quizMovies: string[], existedMovies: Movie[]) => {
      setIsLoading(true);

      try {
        const response = await getOpenAiAPI(quizMovies, existedMovies);
        if (!response) {
          setIsLoading(false);
          alert("Error... Try again");
          throw new Error();
        }
        setMoviesFromOpenaiApi(response);
      } catch (error) {
        console.error("Error fetch data from openai:", error);
      }
    };

    openAiAPI(quizResult, allMoviesForOneSession);
  }, [quizResult, allMoviesForOneSession]);

  // Rquest to TMdB
  useEffect(() => {
    if (!moviesFromOpenaiApi.length) return;

    const getMoviesFromAIResult = async (movies: Movie[]) => {
      try {
        const promises = await getQuizMovies(movies);
        const response = await Promise.all(promises);

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

      {/* <BorderBottomSvg /> */}
    </div>
  );
};
