import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h2>Root Page</h2>
      <Link href={"/home"} className={`link-btn  px-12`}> Link to home page...</Link>
    </main>
  );
}
