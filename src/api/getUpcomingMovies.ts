import axios from "axios";
import { Movie } from "@/types";

const AUTH_TOKEN = process.env.NEXT_PUBLIC_TMDB_API_KEY;

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie/";

axios.defaults.headers.common["Authorization"] = `Bearer &{AUTH_TOKEN}`;

export const getUpcomingMovies = async (page: number): Promise<Movie[]> => {
  try {
    const res = await axios.get(`upcoming?language=en-US&page=${page}`);

    return res.data.results as Movie[];
  } catch (error: any) {
    console.log("getUpcomingMovies error", error.message);
    return [];
  }
};

/**
 *  Another example how to setup axios
 */
// const axiosInstance = axios.create({
//   baseURL: "https://api.themoviedb.org/3/",
//   headers: {
//     Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
//     "Content-Type": "application/json",
//   },
// });
