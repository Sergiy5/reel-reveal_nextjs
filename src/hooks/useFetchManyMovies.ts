import useSWR from "swr";
import getManyMoviesByTitle from "@/app/actions/getManyMoviesByTitle";

export const useFetchManyMovies = (similarTitles: string[]) => {
  const { data, error, isLoading } = useSWR(
    similarTitles,
    getManyMoviesByTitle
  );
  return { data, error, isLoading };
};