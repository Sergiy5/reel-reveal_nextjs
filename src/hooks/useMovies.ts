import { likedMoviesGetAll } from "@/app/actions/likedMoviesGetAll";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useMovies = (userId: string) => {
  const { data, error, mutate } = useSWR(
    userId ? `/api/get-all-liked_movies?userId=${userId}` : null,
    fetcher,
    {
      fallbackData: JSON.parse(localStorage.getItem("movies") || "[]"),
      onSuccess: (data) => {
        // Save fetched data to localStorage
        localStorage.setItem("movies", JSON.stringify(data));
      },
    }
  );

  return { data, error, mutate };
};
