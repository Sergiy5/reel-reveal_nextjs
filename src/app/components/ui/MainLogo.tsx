import Link from "next/link";
import { Icon } from "./Icon";

export const MainLogo: React.FC = () => {
  return (
    <Link
      href={"/home"}
      className="flex items-center"
      aria-label="Go to ReelReveal home page"
    >
      <Icon id="main-logo" width={35} height={35} className="fill-textColor" />

      <span className="hidden font-bold text-xl text-textColor lg:flex">
        ReelReveal
      </span>
    </Link>
  );
};
