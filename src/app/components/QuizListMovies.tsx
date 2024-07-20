import { useResize } from "@/hooks";
import { ListMovies } from "./ListMovies";
import { MySlider } from "./MySlider";
import { QuizListMoviesProps } from "@/typification";
import { MovieCard } from "./MovieCard";
import { Settings } from "react-slick";

export const QuizListMovies: React.FC<QuizListMoviesProps> = ({
  arrMovies,
  clearPrevQuiz,
}) => {
  const viewWidth = useResize();

  const settings: Settings = {
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    arrows: false,
    pauseOnFocus: true,
    initialSlide: 0,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10%",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={` flex flex-col items-center justify-center w-full gap-12`}>
      <h2 className={`pr-2.5 pl-2.5`}>Have you seen these?</h2>

      {viewWidth > 1024 ? (
        <ListMovies movies={arrMovies} />
      ) : (
        <div className={` max-w-[1200px] w-full flex flex-col h-auto`}>
          <MySlider
            arraySlides={arrMovies}
            SlideComponent={MovieCard}
            settings={settings}
          />
        </div>
      )}
      <button onClick={clearPrevQuiz} className={`link-btn w-[285px]`}>
        retake quiz
      </button>
    </div>
  );
};
