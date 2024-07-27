import { getManyMoviesByTitle } from "@/app/services";
import useSWR from "swr";

export const useFetchManyMovies = (titles: string[]) => {
  const { data, error, isLoading } = useSWR(
    titles,
    getManyMoviesByTitle
  );
  return { data, error, isLoading };
};
