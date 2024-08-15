"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Loader } from "./ui/Loader";
import { Movie } from "@/typification";
import { QuizListMovies } from "./QuizListMovies";
import { QuizQuestions } from "./QuizQuestions";
import { firstElementsFromArray } from "@/utils";
import { fetchMovies, fetchQuizDataFromOpenAI } from "../actions";
import { qiuzMoviesSignal } from "@/context/MoviesContext";
 
export const Quiz: React.FC = () => {
  const [quizResult, setQuizResult] = useState<string[]>([]);
  const [listMovies, setListMovies] = useState<Movie[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(()=>qiuzMoviesSignal.value ? false : true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
     if (quizResult.length < 7) return;
    const fetchData = async () => {
      setIsLoading(true);
      
      try {
        /**
         * Fetch data from OpenAI API
         */
        const result = await fetchQuizDataFromOpenAI(quizResult);
        
        if (!result || !result.length) {
          throw new Error("Error fetching data from OpenAI... Try again.");
        }
        /**
         * Fetch movies from TMDB API
         */
        const movies = await fetchMovies(result);
        
        if (!movies || movies.length === 0) {
          
          throw new Error("Error fetching movies... Try again.");
        }
        const arrMovies = firstElementsFromArray(movies);
        setListMovies(arrMovies);
        qiuzMoviesSignal.value = arrMovies;
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
          arrMovies={qiuzMoviesSignal.value ?? listMovies}
        />
      )}
      <div className="absolute bottom-0 w-lvw h-10 bg-repeat-x bg-contain z-10 bg-borderIcon"></div>
    </div>
  );
};