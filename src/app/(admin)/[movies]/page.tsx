
import { LinkToQuiz } from "@/app/components/LinkToQuiz";
import { Genres } from "@/app/components/Genres";

// export async function generateStaticParams() {
//   return [{ movies: "1" }];
// }
// { params }: { params: { movies: string[] } }
export default async function MoviesPage() {
  // const { movies } = params;

  // if (!movies.length) {
  //   return <div>Page</div>;
  // }

  return (
    <main>
      <Genres />
      <LinkToQuiz />
    </main>
  );
}
