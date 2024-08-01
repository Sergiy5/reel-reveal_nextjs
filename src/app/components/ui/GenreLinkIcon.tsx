import Link from 'next/link';
import { capitalizeFirstLetter } from '@/lib';


export interface IconGenreProps {
  iconID: string;
}

export const GenreLinkIcon: React.FC<IconGenreProps> = ({
  iconID,
}): React.JSX.Element => {
  return (
    <Link href={"/movie"} className={`link`}>
      <div className={`flex flex-col items-center w-[95px] h-[85px] gap-2`}>
        <svg className={` w-12 h-12 text-current`}>
          <use xlinkHref={`/icons/genres-sprite.svg#${iconID}`} />
        </svg>
        <h5>{capitalizeFirstLetter(iconID)}</h5>
      </div>
    </Link>
  );
};
