"use user";

import { SavedMovies } from "@/app/components/SavedMovies";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
// import { useSession } from "next-auth/react";

export default async function Saved() {
  // const { data: session } = useSession();

  // if (!session) {
  //   return <p>Loading...</p>;
  // }

  const session = await auth();
  if (!session?.user) redirect("/auth");

  return (
    <main>
      <SavedMovies />
    </main>
  );
}
