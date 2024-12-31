import { Genres } from "@/app/components/Genres";
import { MovieSearch } from "@/app/components/MovieSearch";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { getSessionUser } from "@/utils";

export default async function MoviesPage({
  searchParams,
}: {
  searchParams:{title: string};
}) {
  const { title } = searchParams

  const sessionUser = await getSessionUser();
// console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", title)
  return (
    <main>
      <MovieSearch movieTitle={title} sessionUser={sessionUser} />
      <Genres />
      <TakeOurQuiz />
    </main>
  );
}
