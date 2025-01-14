import Link from "next/link";
import { capitalizeFirstLetter } from "@/utils";

export interface IconGenreProps {
  iconName: string;
}

export const GenreLinkIcon: React.FC<IconGenreProps> = ({
  iconName,
}): React.JSX.Element => {
  return (
    <Link href={`/movies?genre=${iconName}`} className={`link`}>
      <div className={`flex flex-col items-center w-[95px] h-[85px] gap-2`}>
        <svg className={` w-12 h-12 text-current`}>
          <use xlinkHref={`/icons/genres-sprite.svg#${iconName}`} />
        </svg>
        <p>{capitalizeFirstLetter(iconName)}</p>
      </div>
    </Link>
  );
};
