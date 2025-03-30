import { IMovie } from "@/typification";

export const firstElementsFromArrays = (arrMovies: IMovie[][]): IMovie[] => {
  // console.log("arrMovies_>>>>>>>>>>>>>", arrMovies);
  if (arrMovies.length) {
    const arrForListMovies = arrMovies
      .map((item: IMovie[]) => {
        for (let i = 0; i < item.length; i++) {
          if (item[i].poster_path?.length) {
            return item[i];
          }
        }
        return undefined;
      })
      .filter((movie) => movie !== undefined); // Remove undefined values

    return arrForListMovies as IMovie[];
  }
  return [];
};
