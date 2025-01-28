"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { format, isSameDay } from "date-fns";
import { useIndexedDB } from '@/hooks';
import { countDefaultQuizes } from '@/variables';


// Create the context
const CountQuizContext = createContext({
  count: countDefaultQuizes,
  decrement: () => {},
  reset: () => {},
});

// Create the provider component
export const CountQuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(countDefaultQuizes);
  const [isToDay, setIsToDay] = useState(false);
  const [dateToday, setDateToday] = useState(format(new Date(), "yyyy-MM-dd"));

  // Use IndexedDB
  const { setIndexedDB, getIndexedDB } = useIndexedDB();
  
// Refresh count on new day
  useEffect(() => {
    if (isToDay) return
    
    getIndexedDB("quizCount")
      .then((dataQuiz: any) => {

        if (
          dataQuiz &&
          isSameDay(new Date(dataQuiz.date), new Date(dateToday))
        ) {
          setCount(dataQuiz.count);
          setIsToDay(true);
          return;
        }

        setIndexedDB("quizCount", {
          date: dateToday,
          count: countDefaultQuizes,
        });

        if (!isToDay) setIsToDay(true);
      })
      .catch((error) => {
        console.error(error);
      });
}, [dateToday, getIndexedDB, isToDay, setIndexedDB]);

  useEffect(() => {

    if (!isToDay || count < 0) return
    
setIndexedDB("quizCount", {
  date: dateToday,
  count,
})
  }, [count, dateToday, isToDay, setIndexedDB])


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
  const context = useContext(CountQuizContext);

  return context;
};
