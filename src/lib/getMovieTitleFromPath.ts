/**
 * !!! NEED TO REMOVE THIS
 * @param path : STRING
 * @returns Name : string
 */

export const getMovieTitleFromPath = (path: string) => {
  const pathSegments = path.split('/');
  // Get the last segment of the path, which is the filename
  const filename = pathSegments[pathSegments.length - 1];
  // Remove the file extension
  const nameWithoutExtension = filename.split('.')[0];
  return nameWithoutExtension;
};
