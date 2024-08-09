import { genres } from "../../public/ganres/ganres";

export function getGenres(array: number[]) {
  if (!array.length) ["Unknown genre"];
    
   const result= genres
      .filter((element) => array.includes(element.id))
      .map((element) => element.name);  
  return result
}
