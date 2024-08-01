import Link from "next/link";
import LogoMain from "../../../../public/icons/main-logo.svg";

export const MainLogo: React.FC = () => {
  return (
    <Link
      href={"/home"}
      className="flex items-center"
      aria-label="Go to ReelReveal home page"
    >
      <LogoMain alt="logo" width={48} height={48} />

      <span className="hidden font-bold text-3xl text-textColor lg:flex">
        ReelReveal
      </span>
    </Link>
  );
};
