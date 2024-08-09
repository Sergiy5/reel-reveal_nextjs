import { quizDataType } from "@/typification";

export const nextQuestion = (listData: quizDataType[], currentPage: number) => {
  if (currentPage < 8) {
    const currentQuiz = listData.filter(
      (item) => item.page === currentPage + 1
    );
    return currentQuiz[0];
  }
};
