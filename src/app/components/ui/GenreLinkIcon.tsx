import Link from 'next/link';
import { capitalizeFirstLetter } from "@/utils";


export interface IconGenreProps {
  iconID: number;
  iconName: string;
  onClick?: (id:number) => void;
}

export const GenreLinkIcon: React.FC<IconGenreProps> = ({
  iconID,
  iconName,
  onClick,
}): React.JSX.Element => {


  return (
    <Link href={"/movie"} className={`link`}>
      <div
        className={`flex flex-col items-center w-[95px] h-[85px] gap-2`}
        onClick={() => onClick && onClick(iconID)}
      >
        <svg className={` w-12 h-12 text-current`}>
          <use
            xlinkHref={`/icons/genres-sprite.svg#${iconName}`}
          />
        </svg>
        <p>{capitalizeFirstLetter(iconName)}</p>
      </div>
    </Link>
  );
};
