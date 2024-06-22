import axios from 'axios';

const urlSearchMovie = movie => {
  return `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;
  
};

const AUTH_TOKEN = process.env.REACT_APP_TMDB_API_KEY;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const getQuizMovies = async arrMovies => {

  try {
    return arrMovies.map(movie => axios.get(urlSearchMovie(movie)));
    
  } catch (error) {
    console.log('getQuizMovies error', error.message);
  }

};
