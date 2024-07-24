"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Loader } from "./Loader";
import { Movie } from "@/typification";
import { QuizListMovies } from "./QuizListMovies";
import { QuizQuestions } from "./QuizQuestions";
import { quizDataFromOpenAI } from "@/app/api";
import { firstElementsFromArray, isArray } from "@/lib";
import { fetchMovies } from "../actions/fetchMovies";

export const Quiz: React.FC = () => {
  const [quizResult, setQuizResult] = useState<string[]>([]);
  const [titlesFromOpenaiApi, setTitlesFromOpenaiApi] = useState<string[]>([]);
  const [listMovies, setListMovies] = useState<Movie[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Request (POST) to openai API =====================
  useEffect(() => {
    if (quizResult.length < 7) return;

    const openAiAPI = async (quizMovies: string[]) => {
      setIsLoading(true);
      setIsQuizActive(false);

      try {
        const result = await quizDataFromOpenAI(quizMovies);

        if (!result) {
          setIsLoading(false);
          toast.error("Error... fetch data");
          throw new Error();
        }
        if (isArray(result)) {
          if (result) return setTitlesFromOpenaiApi(result);
        }
        toast.error("Something went wrong, try again...");
      } catch (error) {
        toast.error("Error... fetch data");
        console.error("Error fetch data from openai:", error);
      } finally {
        setIsLoading(false);
      }
    };

    openAiAPI(quizResult);
  }, [quizResult]);

  // Rquest to TMdB
  useEffect(() => {
    if (!titlesFromOpenaiApi.length) return;
    const getMovies = async (movies: string[]) => {
      try {
        const response = await fetchMovies(movies);
        console.log(response);
        if (!response || response.length === 0) {
          toast.error("Something went wrong, try again...");
          return;
        }
        const result = firstElementsFromArray(response);
        if (result) setListMovies(result);
      } catch (error) {
        toast.error("Error... fetch data");
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies(titlesFromOpenaiApi);
  }, [titlesFromOpenaiApi]);

  return (
    <div
      className={`relative flex items-center justify-center py-[131px] w-full gap-12`}
    >
      <div
        className={` absolute top-0 w-lvw h-10 bg-repeat-x bg-contain z-10 bg-borderIcon rotate-180`}
      ></div>
      {isLoading ? (
        <Loader />
      ) : isQuizActive ? (
        <QuizQuestions quizData={setQuizResult} />
      ) : (
        <QuizListMovies
          clearPrevQuiz={() => setIsQuizActive(true)}
          arrMovies={listMovies}
        />
      )}
      <div
        className={` absolute bottom-0 w-lvw h-10 bg-repeat-x bg-contain z-10 bg-borderIcon `}
      ></div>
    </div>
  );
};
