import { CustomArrowProps } from "react-slick";

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
  backdrop_path: string;
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
}
export interface MovieCardHoverBtnProps {
  id: string;
  text: string;
  isChecked: boolean;
  dataMovie: string;
  onClick: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
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
  onLoadMore: (titles: string[]) => void;
}

export interface MySliderProps {
  arrMovies: Movie[];
}

export interface GetShowMoviesProps {
  title: string;
  category: string;
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
  isQuizActive: () => void;
  onLoadMoreCard: (onLoadMoreCard: string[]) => void;
}

export interface QuizQuestions {
  quiz: string;
  title: string;
  options: string[];
  page: number;
}

export interface QuizBtnsProps {
  answers: string[];
  collectQuiz: (item: string) => string[];
  isActive: boolean;
}

export interface MySliderBtnProps extends CustomArrowProps {
  prevStyle?: string;
}
