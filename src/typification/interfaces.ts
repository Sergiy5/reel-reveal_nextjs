import { CustomArrowProps, Settings } from "react-slick";

export interface LayoutProps {
  children: React.ReactNode;
}
export interface ViewWidth {
  viewWidth: number;
}
export interface TypeDevice {
  deviceType: string;
}
export interface LayoutContextProps {
  deviceType: string;
}
export interface LayoutProviderProps {
  deviceType: string;
  children: React.ReactNode;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime: number;
}
export interface MovieCardHoverBtnProps {
  id: string;
  text: string;
  isChecked: boolean;
  dataMovie: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  hoverd?: boolean;
}
export interface MovieCardProps {
  movie: Movie;
}

export interface MovieCardHoverProps {
  movie: Movie;
  handleMovie: (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => string | undefined;
}

export interface ListMoviesProps {
  movies: Movie[];
}

export interface MySliderProps<T> {
  arraySlides: T[];
  settings: Settings;
  SlideComponent: React.ComponentType<{ movie: T }>;
}

export interface SliderCarouselSlideProps {
  movie: string;
}
export interface GetShowMoviesProps {
  title: string;
  // category: string;
  movies: Movie[]
}

export interface ResponsDataTMbD {
  results: Movie[];
}

export interface LoadMoreCard {
  id: "load_more";
  textBtn: string;
}

export interface QuizListMoviesProps {
  arrMovies: Movie[];
  clearPrevQuiz: () => void;
}

export interface QuizBtnsProps {
  answers: { answer: string; value: string }[];
  collectQuiz: (answer: string) => void;
  isActive: boolean;
}


export interface MySliderBtnProps extends CustomArrowProps {
  prev_style?: string;
}

export interface quizDataType {
  quiz: string;
  title: string;
  options: { answer: string, value: string }[];
  page: number;
}

export interface ErrorComponentProp {
  error: Error;
  reset: () => void;
  from: string;
}

export interface MovieInfoProps {
  id: string;
}

export interface QuizQuestionsProps {
  quizData: (answerForAI: string[]) => void;
}