export const generateUrlImage = (path: string | null) => {
  const pathImage = path
    ? `https://image.tmdb.org/t/p/w500/${path}`
    : "/images/no-image.jpg";
  return pathImage;
};
