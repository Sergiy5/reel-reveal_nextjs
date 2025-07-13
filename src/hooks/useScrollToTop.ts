import { useRef, useCallback } from "react";

export const useScrollToTop = <T extends HTMLElement>() => {
  const topRef = useRef<T | null>(null); // ✅ use `null` not `undefined`

  const scrollToTop = useCallback(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return { topRef, scrollToTop };
};
