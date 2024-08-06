"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Loader } from "./ui/Loader";
import { Movie } from "@/typification";
import { QuizListMovies } from "./QuizListMovies";
import { QuizQuestions } from "./QuizQuestions";
import { firstElementsFromArray, isArray } from "@/lib";
import { fetchMovies, fetchQuizDataFromOpenAI } from "../actions";
 
export const Quiz: React.FC = () => {
  const [quizResult, setQuizResult] = useState<string[]>([]);
  const [listMovies, setListMovies] = useState<Movie[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
     if (quizResult.length < 7) return;
    const fetchData = async () => {
      setIsLoading(true);
      
      try {
        const result = await fetchQuizDataFromOpenAI(quizResult);
        
        if (!result || !isArray(result)) {
          toast.info("Something went wrong... Try again.");
          
          throw new Error("Error fetching data from OpenAI");
        }
        
        const movies = await fetchMovies(result);
        
        if (!movies || movies.length === 0) {
          toast.info("Something went wrong... Try again.");
          
          throw new Error("Error fetching movies");
        }
        setListMovies(firstElementsFromArray(movies));
        setIsQuizActive(false);
      } catch (error: any) {
        toast.error(error.message);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (quizResult.length >= 7) {
      fetchData();
    }
  }, [quizResult]);

  return (
    <div className="relative flex items-center justify-center py-[131px] w-full gap-12">
      <div className="absolute top-0 w-lvw h-10 bg-repeat-x bg-contain z-10 bg-borderIcon rotate-180"></div>
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
      <div className="absolute bottom-0 w-lvw h-10 bg-repeat-x bg-contain z-10 bg-borderIcon"></div>
    </div>
  );
};