export const copyToClipboard = (text: string): boolean => {
  try {
    navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Copy failed:", err);
    return false;
  }
};
