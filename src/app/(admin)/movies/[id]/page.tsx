import { LinkToQuiz } from "@/app/components/LinkToQuiz";
import { MovieInfo } from "@/app/components/MovieInfo";
import { Movie } from "@/types";

export async function generateStaticParams() {
return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
export default async function MoviePage({ params }: { params: { id: string } }) {

  return (
    <main>
      <MovieInfo id={params.id} />
      <LinkToQuiz />
    </main>
  );
}
