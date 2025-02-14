"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { format, isSameDay } from "date-fns";
import { countDefaultQuizes } from "@/variables";

// Create the context
const CountQuizContext = createContext({
  count: countDefaultQuizes,
  decrement: () => {},
  reset: () => {},
});

// Create the provider component
export const CountQuizProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [count, setCount] = useState(countDefaultQuizes);
  const [isToDay, setIsToDay] = useState(false);
  const dateToday = format(new Date(), "yyyy-MM-dd");

  // Load data from localStorage
  useEffect(() => {
    if (isToDay) return;

    const storedData = localStorage.getItem("quizCount");
    if (storedData) {
      try {
        const dataQuiz = JSON.parse(storedData);
        if (isSameDay(new Date(dataQuiz.date), new Date(dateToday))) {
          setCount(dataQuiz.count);
          setIsToDay(true);
          return;
        }
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }

    // If no valid data, set default values
    localStorage.setItem(
      "quizCount",
      JSON.stringify({ date: dateToday, count: countDefaultQuizes })
    );
    setIsToDay(true);
  }, [dateToday, isToDay]);

  // Update localStorage when count changes
  useEffect(() => {
    if (!isToDay || count < 0) return;

    localStorage.setItem(
      "quizCount",
      JSON.stringify({ date: dateToday, count })
    );
  }, [count, dateToday, isToDay]);

  // Decrement function
  const decrement = () => setCount((prevCount) => prevCount - 1);

  // Reset function
  const reset = () => setCount(0);

  return (
    <CountQuizContext.Provider value={{ count, decrement, reset }}>
      {children}
    </CountQuizContext.Provider>
  );
};

// Custom hook to use the context
export const useContextCountQuiz = () => {
  return useContext(CountQuizContext);
};
