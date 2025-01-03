import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Genres } from "@/app/components/Genres";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { getSessionUser } from "@/utils";

const MovieSearchDynamics = dynamic(() => import("@/app/components/MovieSearch").then((mod) => mod.MovieSearch), { ssr: false });

export default async function MoviesPage() {

  const sessionUser = await getSessionUser();
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <MovieSearchDynamics sessionUser={sessionUser} />
      </Suspense>
      <Genres />
      <TakeOurQuiz />
    </main>
  );
}
