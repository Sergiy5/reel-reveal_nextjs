import { LinkToQuiz } from "@/app/components/LinkToQuiz";
import { MovieInfo } from "@/app/components/MovieInfo";

export async function generateStaticParams() {
return [{ id: "533535" }];
}
export default async function MoviePage({ params }: { params: { id: string } }) {

  return (
    <main>
      <MovieInfo id={params.id} />
      <LinkToQuiz />
    </main>
  );
}
