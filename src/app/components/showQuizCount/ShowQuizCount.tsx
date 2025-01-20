"use client"

import { useContextCountQuiz } from "@/context/CountQuizContext";
import { Icon } from "../ui/Icon";

export const ShowQuizCount: React.FC = () => {
  const { count } = useContextCountQuiz();

  return (
      <span className="flex items-center justify-center gap-[1px]">
        <span >{count}</span>
        <Icon id="icon-ai" width={20} height={18} className="text-bgColor" />
      </span>
  );
};
