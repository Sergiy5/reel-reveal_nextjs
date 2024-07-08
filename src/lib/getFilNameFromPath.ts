/**
 * !!! NEED TO REMOVE THIS
 * @param path : STRING
 * @returns Name : string
 */

export const getFilNameFromPath = (filePath: string) => {

  const pathSegments = filePath.split("\\");

  const fileName = pathSegments[pathSegments.length - 1];

  // // Remove the file extension
  const nameFile = fileName.split('.')[0];
  return nameFile;
};
