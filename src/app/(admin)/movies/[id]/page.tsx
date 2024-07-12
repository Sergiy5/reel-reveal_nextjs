import { LinkToQuiz } from "@/app/components/LinkToQuiz";
import { useParams, useSearchParams } from "next/navigation";

export default async function MoviePage() {
//   const {id} = useParams()
// console.log(useSearchParams())  

  // console.log(id)
  return (
    <main>
      
      <LinkToQuiz  />
    </main>
  );
}
