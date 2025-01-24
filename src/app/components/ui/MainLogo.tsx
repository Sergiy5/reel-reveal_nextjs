import Link from "next/link";
import { Icon } from "./Icon";

export const MainLogo: React.FC = () => {
  return (
    <Link
      href={"/home"}
      className="flex items-center justify-center"
      aria-label="Go to ReelReveal home page"
    >
      <span>
        <Icon
          id="main-logo"
          width={40}
          height={40}
          className="fill-textColor"
        />
      </span>

      <span className="hidden font-bold text-xl text-textColor lg:flex">
        ReelReveal
      </span>
    </Link>
  );
};
