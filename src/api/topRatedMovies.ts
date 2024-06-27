import axios from "axios";
import { Movie } from "@/types";

export const topRatedMovies = async (page: number): Promise<Movie[]> => {
  try {
    const res = await axios.get(`top_rated?language=en-US&page=${page}`);

    return res.data.results as Movie[];
  } catch (error: any) {
    console.error("topRatedMOvies error:", error.message);
    return [];
  }
};
