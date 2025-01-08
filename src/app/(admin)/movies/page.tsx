import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Genres } from "@/app/components/Genres";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { getSessionUser } from "@/utils";
import { Loader } from "@/app/components/ui/Loader";

const MovieSearchDynamics = dynamic(() => import("@/app/components/MovieSearch").then((mod) => mod.MovieSearch));

export default async function MoviesPage() {

  const sessionUser = await getSessionUser();

  return (
    <main>
      <Suspense fallback={<Loader />}>
        <MovieSearchDynamics sessionUser={sessionUser} />
      </Suspense>
      <Genres />
      <TakeOurQuiz />
    </main>
  );
}
