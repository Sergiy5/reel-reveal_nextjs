import { UserProfile } from "@/app/components/UserProfile";
import { auth } from "@/auth";
import { redirect } from "next/navigation";


export default async function ProfilePage() {

  // const session = await auth();
  // if (!session?.user) redirect("/");

  return (
    <main>
      <UserProfile />
    </main>
  );
}
