import useSWR from "swr";

const fetcher = (url: string, userId?: string) =>
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
    }),
  }).then((res) => res.json());

export const useMovies = (userId: string) => {
  const { data, error, mutate } = useSWR(
    userId ? `/api/get-all-liked_movies` : null,
    () => fetcher(`/api/get-all-liked_movies`, userId),
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
