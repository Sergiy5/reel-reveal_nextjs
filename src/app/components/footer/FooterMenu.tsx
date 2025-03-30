import Link from "next/link";

export const FooterMenu:React.FC = () => {
  return (
    <ul className={`flex flex-col justify-between font-[20px] leading-4 text-xl`}>
      <li>
        <Link href={`/home#how it work`} className={`link`}>
          How it works
        </Link>
      </li>
      <li>
        <Link href={`/quiz`} className={`link`}>
          Take a quiz
        </Link>
      </li>
      <li>
        <Link href={`/movies`} className={`link`}>
          Movie search
        </Link>
      </li>
      <li>
        <Link href={`/auth`} className={`link`}>
          Login
        </Link>
      </li>
    </ul>
  );
};