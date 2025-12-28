import { FC } from "react";
import { motion } from "framer-motion";

export const LoaderQuiz: FC = () => {
  // Placeholder movie cards
  const placeholders = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="flex flex-col items-center justify-center h-64 w-full space-y-6">
      {/* AI Robot */}
      <div className="relative flex flex-col items-center">
        <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-white text-xl font-bold animate-pulse">
          AI
        </div>
        <div className="w-2 h-24 bg-gray-400 mt-2 animate-pulse"></div>
      </div>

      {/* Projector light */}
      <div className="relative w-64 h-32">
        <div className="absolute inset-0 bg-yellow-200 opacity-20 rounded-xl transform rotate-[-15deg]"></div>

        {/* Movie card placeholders */}
        <div className="absolute inset-0 flex justify-around items-center">
          {placeholders.map((_, i) => (
            <motion.div
              key={i}
              className="w-14 h-20 bg-gray-300 rounded-lg shadow-md"
              initial={{ opacity: 0, y: -20, rotate: -5 }}
              animate={{
                opacity: [0, 1, 0.7, 1],
                y: [0, -10, 0, -5],
                rotate: [-5, 5, -3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Loading text */}
      <motion.div
        className="text-gray-700 font-medium"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        AI is picking your movies...
      </motion.div>
    </div>
  );
};

