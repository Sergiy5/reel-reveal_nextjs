
export const getFilNameFromPath = (filePath: string, regExp: string) => {

  const pathSegments = filePath.split(regExp);

  const fileName = pathSegments[pathSegments.length - 1];

  // // Remove the file extension
  const nameFile = fileName.split(".")[0];
  return nameFile;
};
