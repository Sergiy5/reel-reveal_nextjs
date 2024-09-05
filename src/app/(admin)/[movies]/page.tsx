import { Genres } from "@/app/components/Genres";
import { MovieSearch } from "@/app/components/MovieSearch";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";


export default async function MoviesPage({
  params,
}: {
  params: { movies: string};
}) {
  const { movies } = params;

  return (
    <main>
      <MovieSearch movieTitle={movies} />
      <Genres />
      <TakeOurQuiz />
    </main>
  );
}
