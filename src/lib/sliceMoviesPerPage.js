// import { moviesOnPage } from "assets/variables/variables";

export const sliceMoviesPerPage = (array, firstMovieOnPage) => {
  const lastMovieOnPage = firstMovieOnPage + moviesOnPage; 
   
  return array.slice(firstMovieOnPage, lastMovieOnPage);
};