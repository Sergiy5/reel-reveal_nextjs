"use client";

import { createContext, useContext, useState } from 'react';

// Create the context
const CountQuizContext = createContext({
  count: 0,
  decrement: () => {},
  reset: () => {},
});

// Create the provider component
export const CountQuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(4);

  // Decrement function
  const decrement = () => setCount(prevCount => prevCount - 1);

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

  if (!context) {
    throw new Error('useContextCountQuiz must be used within a CountQuizProvider');
  }

  return context;
};
