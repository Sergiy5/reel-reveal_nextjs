import { SavedMovies } from "@/app/components/SavedMovies";
// import { auth } from "@/auth";
// import { redirect } from "next/navigation";


export default async function Saved() {

  // const session = await auth();
  // if (!session?.user) redirect("/");

  return (
    <main>
      <SavedMovies />
    </main>
  );
}
