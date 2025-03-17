import dynamic from "next/dynamic";
import { getSessionUser } from "@/utils";

const SavedMoviesDynamics = dynamic(() =>
  import("@/app/components/savedMovies/SavedMovies").then(
    (mod) => mod.SavedMovies
  )
);

export default async function Saved() {
  const sessionUser = await getSessionUser();

  return (
    <div className="page-wrapper">
      <SavedMoviesDynamics sessionUser={sessionUser} />
    </div>
  );
}
