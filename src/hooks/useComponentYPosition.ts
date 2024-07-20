import { useRef, useEffect, useState } from "react";

export const useComponentYPosition = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [positionY, setPositionY] = useState(0);

  useEffect(() => {
    if (componentRef.current) {
      const handleScroll = () => {
        const rect = componentRef.current!.getBoundingClientRect();
        setPositionY(rect.top + window.scrollY);
      };

      // Calculate initial position
      handleScroll();

      // Add scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return { componentRef, positionY };
};