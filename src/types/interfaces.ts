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
  poster_path: string | null;
  id: string;
  title: string;
  textBtn?: string;
  vote_average?: number;
  release_date?: string;
}

export interface MovieCardProps {
  movie: Movie;
}

export interface ListMoviesProps {
  movies: Movie[];
  onLoadMore: (titles: string[]) => void;
}

export interface MySliderProps {
  arrMovies: Movie[];
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface GetShowMoviesProps {
  title: string;
  getMovies: (page: number) => Promise<Movie[]>;
}

export interface ResponsDataOpenAI {
  arrMovies: {
    data: {
      results: Movie[];
    };
  }[];
}

export interface LoadMoreCard {
  id: "load_more";
  textBtn: string;
}

export interface QuizListMoviesProps {
  arrMovies: Movie[];
  isQuizActive: () => void;
  onLoadMoreCard: (onLoadMoreCard:Movie[]) => void;
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