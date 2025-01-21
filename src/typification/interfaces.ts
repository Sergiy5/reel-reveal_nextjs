import { CustomArrowProps, Settings } from "react-slick";
import { FilterArray } from "./types";

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
  id: number;
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  genres?: { id: number; name: string }[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime: number;
}

export interface IResponsDataTMbD {
  results: Movie[];
}

export interface ILoadMoreCard {
  id: "load_more";
  textBtn: string;
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
  liked: boolean;
  _id: string;
}

export interface sessionUser {
  userId: string;
  email: string;
  userName: string;
  userStatus: string;
}

export interface IQueryFilterParams {
  genresId: number[];
  years: number[];
  rating: number[];
}
