"use client";

import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { firstElementsFromArray} from "@/lib";
import { Movie } from "@/typification";
import { QuizListMovies } from "./QuizListMovies";
import { QuizQuestions } from "./QuizQuestions";
import { quizDataFromOpenAI } from "@/app/api";
import { getQuizMovies } from "../api/actions/getQuizMovies";

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

      try {
        const response = await quizDataFromOpenAI(quizMovies);

        if (!response) {
          setIsLoading(false);
          alert("Error... fetch data");
          throw new Error();
        }
        setTitlesFromOpenaiApi(response);
      } catch (error) {
        console.error("Error fetch data from openai:", error);
      }
    };

    openAiAPI(quizResult);
  }, [quizResult]);

  // Rquest to TMdB
  useEffect(() => {
    if (!titlesFromOpenaiApi.length) return;

    const getArrMovies = async (movies: string[]) => {
      try {
        const response = await getQuizMovies(movies);
        const result = firstElementsFromArray(response);

        if (result) setListMovies(result);

        setIsQuizActive(false);
      } catch (error) {
        console.log("Error in Quiz!!!", error);
      } finally {
        setIsLoading(false);
      }
    };

    const lastArrayFromAI = titlesFromOpenaiApi.slice(-8);

    getArrMovies(lastArrayFromAI);
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
