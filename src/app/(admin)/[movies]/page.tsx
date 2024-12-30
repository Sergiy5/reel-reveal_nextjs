import { Genres } from "@/app/components/Genres";
import { MovieSearch } from "@/app/components/MovieSearch";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { getSessionUser } from "@/utils";

export default async function MoviesPage({
  params,
}: {
  params: { movies: string};
}) {
  const { movies: title } = params;

  const sessionUser = await getSessionUser();

  return (
    <main>
      <MovieSearch movieTitle={title} sessionUser={sessionUser} />
      <Genres />
      <TakeOurQuiz />
    </main>
  );
}
