import { getManyMoviesByTitle } from '@/app/api/actions';
import useSWR from 'swr';

export const useFetchManyMovies = (similarTitles: string[]) => {
    const { data, error, isLoading } = useSWR(
      similarTitles,
      getManyMoviesByTitle
    );
    return {data, error, isLoading}
};