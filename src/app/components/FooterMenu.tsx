import Link from "next/link";

export const FooterMenu:React.FC = () => {
  return (
    <ul
      className={`flex flex-col gap-6 font-[20px] leading-4 text-xl`}
    >
      <li>
        <Link href={`#`} className={`link`}>
          How it works
        </Link>
      </li>
      <li>
        <Link href={`#`} className={`link`}>
          Take a quiz
        </Link>
      </li>
      <li>
        <Link href={`#`} className={`link`}>
          Movie search
        </Link>
      </li>
      <li>
        <Link href={`#`} className={`link`}>
          Login
        </Link>
      </li>
    </ul>
  );
};