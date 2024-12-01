export const cutingString = (string: string, max: number): string => {
  if (string.length > max) {
    return string.slice(0, max) + "...";
  }
  return string;
};