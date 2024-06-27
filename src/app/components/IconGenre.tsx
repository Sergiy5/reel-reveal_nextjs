import Link from 'next/link';
import { capitalizeFirstLetter } from '@/lib';


export interface IconGenreProps {
  iconID: string;
}

export const IconGenre: React.FC<IconGenreProps> = ({ iconID }): React.JSX.Element => {
  return (
    <Link href={"#"} className={`link`}>
      <div className={`flex flex-col items-center w-[95px] h-[85px] gap-2`}>
        <svg className={` w-12 h-12 text-current`}>
          <use xlinkHref={`/icons/genres-sprite.svg#${iconID}`} />
        </svg>
        <span className={` font-light text-xl leading-4`}>
          {capitalizeFirstLetter(iconID)}
        </span>
      </div>
    </Link>
  );
};
