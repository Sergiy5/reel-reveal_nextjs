import { SavedMovies } from "@/app/components/SavedMovies";
import { cookies } from "next/headers";

export default async function Saved() {

 const cookieStore = cookies();
 const theme = cookieStore.get("token");
console.log("Cookies====================", theme)
  return <main><SavedMovies />
  </main>;
}
