import dynamic from "next/dynamic";
import { getSessionUser } from "@/utils";

const SavedMoviesDynamics = dynamic(
  () =>
    import("@/app/components/SavedMovies").then((mod) => mod.SavedMovies),
  { ssr: false }
)

export default async function Saved() {
  const sessionUser = await getSessionUser();

  return (
    <main>
      <SavedMoviesDynamics sessionUser={sessionUser} />
    </main>
  );
}
