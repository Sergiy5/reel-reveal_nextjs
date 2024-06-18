import { moviesOnPage } from '../assets/variables/index';

export const firstMovieOnPage = page => {
  const movie = page === 1 ? 0 : (page - 1) * moviesOnPage;
  return movie;
};
