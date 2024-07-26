interface FileData {
  files: string[];
}

export const fetchPaths = async (): Promise<FileData> => {
  const res = await fetch("/api/files");
  return res.json();
};
