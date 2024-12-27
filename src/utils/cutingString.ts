export const cutingString = (string: string, max: number): string => {
  // console.log(string);
  if (string.length > max) {
    return string.slice(0, max) + "...";
  }
  return string;
};