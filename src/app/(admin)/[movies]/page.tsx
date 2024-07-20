
import { LinkToQuiz } from "@/app/components/LinkToQuiz";
import { Genres } from "@/app/components/Genres";

export async function generateStaticParams() {
  return [{ id: "1" }];
}

export default async function MoviesPage({ params }: { params: { id: string } }) {
  const { id } = params;

  if (id === "1") {
    return <div>Page</div>;
  }

  return (
    <main>
      <Genres />
      <LinkToQuiz />
    </main>
  );
}
