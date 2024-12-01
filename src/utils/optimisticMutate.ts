import { IMovieInDB } from "@/app/components/ui/MovieCard";
import { KeyedMutator } from "swr";

type OptimisticUpdateFn<T> = (
  mutate: KeyedMutator<T>,
  newItem: IMovieInDB
) => void;

export const optimisticMutate: OptimisticUpdateFn<IMovieInDB[]> = (
  mutate,
  newItem
) => {
  mutate(
    (currentData) => {
      // Ensure currentData exists
      const updatedData = currentData ? [...currentData, newItem] : [newItem];
      return updatedData;
    },
    false // revalidate
  );
};
