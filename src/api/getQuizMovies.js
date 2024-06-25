import axios, { AxiosResponse } from "axios";

// Construct the search URL for a movie
const urlSearchMovie = (movie) => {
  return `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;
};

// Set the authorization token
const AUTH_TOKEN = process.env.NEXT_PUBLIC_TMDB_API_KEY;

if (AUTH_TOKEN) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;
} else {
  console.error("Authorization token is not defined");
}

// Function to fetch movie data based on an array of movie titles
export const getQuizMovies = async (
  arrMovies
) => {
  try {
    const requests = arrMovies.map((movie) =>
      axios.get(urlSearchMovie(movie))
    );
    return await Promise.all(requests);
  } catch (error) {
    console.log("getQuizMovies error", error.message);
    throw error;
  }
};
