import { Genres } from "@/app/components/Genres";
import { MovieSearch } from "@/app/components/MovieSearch";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";

export async function generateStaticParams() {
 
  return [{ movies: "&#@!_" }];
}

export default async function MoviesPage({
  params,
}: {
  params: { movies: string };
  }) {
  
  const { movies } = params;

  if (movies === "&#@!_") {
    return <div>Page</div>;
  }

  return (
    <main>
      <MovieSearch movieTitle={movies} />
      <Genres />
      <TakeOurQuiz />
    </main>
  );
}
