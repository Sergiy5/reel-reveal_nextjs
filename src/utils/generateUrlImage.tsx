export const generateUrlImage = (path: string | null, width: string) => {
  const pathImage = path
    ? `https://image.tmdb.org/t/p/w${width}/${path}`
    : "/images/no-image.jpg";
  return pathImage;
};
