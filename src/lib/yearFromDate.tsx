export const yearFromDate = (date: string) => {
  const year = date.split(" - ")[0].slice(0, 4);
  return year;
};
