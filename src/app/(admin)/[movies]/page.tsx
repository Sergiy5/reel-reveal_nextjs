import { LinkToQuiz } from "@/app/components/LinkToQuiz";
import { Genres } from "@/app/components/Genres";
import { MovieSearch } from "@/app/components/MovieSearch";

export async function generateStaticParams() {
  return [{ movies: "1" }];
}

export default async function MoviesPage({
  params,
}: {
  params: { movies: string };
}) {
  const { movies } = params;

  if (movies === "1") {
    return <div>Page</div>;
  }

  return (
    <main>
      <MovieSearch movieTitle={movies} />
      <Genres />
      <LinkToQuiz />
    </main>
  );
}
