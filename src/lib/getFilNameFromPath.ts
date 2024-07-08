/**
 * !!! NEED TO REMOVE THIS
 * @param path : STRING
 * @returns Name : string
 */

export const getFilNameFromPath = (filePath: string) => {

  const isDev = process.env.NODE_ENV 

  const pathSegments = filePath.split(isDev ? "\\" : "/");

  const fileName = pathSegments[pathSegments.length - 1];

  // // Remove the file extension
  const nameFile = fileName.split('.')[0];
  return nameFile;
};
