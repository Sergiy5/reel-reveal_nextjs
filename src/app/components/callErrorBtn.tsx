"use client";

import { useEffect, useState } from "react";

export const CallErrorBtn = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 2) {
      throw new Error("Some error...");
    }
  }, [count]);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="w-40 h-12 text-red-500 border-solid rounded-md z-30 border-r-2 hover:cursor-pointer "
    >
      ERROR BUTTON
    </button>
  );
};
