import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useMovies = (email: string) => {
  const { data, error, mutate } = useSWR(
    `/api/movies?email=${email}`,
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
