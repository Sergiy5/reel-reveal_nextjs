interface FileData {
  files: string[];
}


export const getPaths = async (): Promise<FileData> => {
  const res = await fetch("/api/files");
  return res.json();
};
