// "use user";

import { SavedMovies } from "@/app/components/SavedMovies";
import { getManyMoviesByIds } from "@/app/services";
import { getSessionUser } from "@/utils";
// import { auth } from "@/auth";
// import { redirect } from "next/navigation";
// import { useSession } from "next-auth/react";

export default async function Saved() {
  const sessionUser = await getSessionUser();

  return (
    <main>
      <SavedMovies sessionUser={sessionUser} />
    </main>
  );
}
