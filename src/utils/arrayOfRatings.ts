export const arrayOfRatings = (ratings: number) =>
  Array.from({ length: ratings }, (_, index) =>
    Number((1 + index * 0.1).toFixed(1))
  ).reverse();
