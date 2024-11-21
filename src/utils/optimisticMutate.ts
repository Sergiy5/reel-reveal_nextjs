import { KeyedMutator } from "swr";

interface IMovieForSaving {
  movieId: number;
  watched: boolean;
}

type OptimisticUpdateFn<T> = (
  mutate: KeyedMutator<T>,
  newItem: IMovieForSaving
) => void;

export const optimisticMutate: OptimisticUpdateFn<IMovieForSaving[]> = (
  mutate,
  newItem
) => {
  mutate(
    (currentData) => {
      // Ensure currentData exists
      const updatedData = currentData ? [...currentData, newItem] : [newItem];
      return updatedData;
    },
     false // Don't revalidate yet
  );
};
