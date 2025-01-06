import { redirect } from "next/navigation";
import { ButtonOrLink } from "./components/ui/ButtonOrLink";

export default function Page() {
  redirect("/home");

  return (
    <main>
      <h2>Root Page</h2>
      <ButtonOrLink href={"/home"}> Link to home page...</ButtonOrLink>
    </main>
  );
}
