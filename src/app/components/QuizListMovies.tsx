import { useResize } from "@/hooks";
import { ListMovies } from "./ListMovies";
import { MySlider } from "./MySlider";
import { QuizListMoviesProps } from "@/types";

export const QuizListMovies: React.FC<QuizListMoviesProps> = ({
  arrMovies,
  isQuizActive,
  onLoadMoreCard,
}) => {
  const viewWidth = useResize();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.id === "load_more") {

      const filteredMovies = arrMovies.filter((movie) => movie.title);
      const arrExistedTitles = filteredMovies.map((movie) => movie.title);

      onLoadMoreCard(arrExistedTitles);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={` flex flex-col items-center justify-center w-full gap-12`}
    >
      <h2 className={`pr-2.5 pl-2.5`}>Have you seen these?</h2>

      {viewWidth > 1024 ? (
        <ListMovies movies={arrMovies} onLoadMore={onLoadMoreCard} />
      ) : (
        <MySlider arrMovies={arrMovies} />
      )}
      <button onClick={isQuizActive} className={`link-btn w-[285px]`}>
        retake quiz
      </button>
    </div>
  );
};
