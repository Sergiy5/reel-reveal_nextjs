"use client"

import { useContextCountQuiz } from "@/context/CountQuizContext";
import { Icon } from "../ui/Icon";

export const ShowQuizCount: React.FC = () => {
  const { count } = useContextCountQuiz();

  return (
    <span className="flex items-center gap-[3px]">
      <span className="font-medium text-base">{count}</span>
      <Icon id="icon-ai" width={20} height={18} className="text-bgColor" />
    </span>
  );
};
