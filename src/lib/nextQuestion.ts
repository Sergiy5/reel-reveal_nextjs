import { QuizQuestions } from "@/types";

export const nextQuestion = (listData: QuizQuestions[], currentPage: number) => {
    if (currentPage < 8) {
      const currentQuiz = listData.filter(
        (item) => item.page === currentPage + 1
      );
    return currentQuiz;
  }
};
