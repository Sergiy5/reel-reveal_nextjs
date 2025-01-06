import Link from "next/link";
import { Icon } from "./Icon";

export const MainLogo: React.FC = () => {
  return (
    <Link
      href={"/home"}
      className="flex items-center"
      aria-label="Go to ReelReveal home page"
    >
      <Icon id="main-logo" width={48} height={48} styles="fill-textColor" />

      <span className="hidden font-bold text-3xl text-textColor lg:flex">
        ReelReveal
      </span>
    </Link>
  );
};
