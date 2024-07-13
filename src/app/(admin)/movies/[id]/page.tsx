import { LinkToQuiz } from "@/app/components/LinkToQuiz";
import { MovieInfo } from "@/app/components/MovieInfo";

// export async function generateStaticParams() {
// return [{ id: "533535" }];
// }
// { params }: { params: { id: string } }
export default async function MoviePage() {

  return (
    <main>
      <MovieInfo />
      <LinkToQuiz />
    </main>
  );
}
