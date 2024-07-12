import { LinkToQuiz } from "@/app/components/LinkToQuiz";
import { MovieInfo } from "@/app/components/MovieInfo";

export default async function MoviePage() {

  return (
    <main>
      <MovieInfo />
      <LinkToQuiz />
    </main>
  );
}
