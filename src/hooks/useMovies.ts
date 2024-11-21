import { likedMoviesGetAll } from "@/app/actions/likedMoviesGetAll";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useMovies = (email: string) => {
  
  const { data, error, mutate } = useSWR(
    email ? `/api/get-all-liked_movies?userEmail=${email}` : null,
    fetcher,
    {
      fallbackData: JSON.parse(localStorage.getItem("movies") || "[]"),
      onSuccess: (data) => {
        // Save fetched data to localStorage
        localStorage.setItem("movies", JSON.stringify(data));
      },
      onError: (error) => {},
    }
  );

  return { data, error, mutate };
};
