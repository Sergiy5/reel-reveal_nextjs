import { CustomArrowProps, Settings } from "react-slick";

export interface LayoutProps {
  children: React.ReactNode;
}
export interface IViewWidth {
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

export interface ListMoviesProps {
  movies: Movie[];
}

// export interface MySliderProps<T> {
//   arraySlides: T[];
//   settings: Settings;
//   SlideComponent: React.ComponentType<{ movie: T }>;
// }

export interface SliderCarouselSlideProps {
  movie: string;
}

export interface IResponsDataTMbD {
  results: Movie[];
}

export interface ILoadMoreCard {
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

export interface IQuizData {
  quiz: string;
  title: string;
  options: { answer: string; value: string }[];
  page: number;
}

export interface MovieInfoProps {
  id: string;
}

export interface QuizQuestionsProps {
  quizData: (answerForAI: string[]) => void;
}

export interface VideoComponentProps {
  id: number;
}

export interface IFilm {
  id: string;
  isChecked: boolean;
}

export interface IUser {
  email: string;
  password: string;
  token: string;
  _id: string;
  name: string;
  role: string;
  films: IFilm[];
}

export interface fetchUserByEmailResponse {
  message: string;
  user: IUser;
}

export interface IStoredMovie {
  movieId: number;
  watched: boolean;
  _id: string;
}

export interface ErrorComponentProps {
  error: Error;
  reset: () => void;
  from: string;
}