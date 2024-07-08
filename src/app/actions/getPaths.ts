export const getPaths = async () => {
  const res = await fetch("http://localhost:3000/api/files");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
