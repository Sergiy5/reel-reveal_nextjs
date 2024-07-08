interface FileData {
  files: string[];
}


export const getPaths = async (): Promise<FileData> => {
  const res = await fetch("/api/files");
  return res.json();
};
// export const getPaths = async () => {
//   const res = await fetch("/api/files");

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// };
