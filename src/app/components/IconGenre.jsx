import sprite from '../../assets/images/svg-sprite/sprite-genres.svg';
import { SharedNavLink } from 'components/shared-nav_link/SharedNavLink';
import { SpanStyled, SvgGanreWrapper, SvgGenreStyled } from './ChooseGenres.styled';
import Link from 'next/link';

export const IconGenre = ({ name }) => {

    const capitalizeFirstLetter = str =>
      `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

  return (
    <Link href={"#"} className={`link-btn`}>
      <div className={`flex flex-col items-center w-[95px] h-[85px] gap-2`}>
        <svg className={` w-12 h-12`}>
          <use xlinkHref={`${sprite}#${name}`} />
        </svg>
        <span className={` font-light text-xl leading-4`}>
          {capitalizeFirstLetter(name)}
        </span>
      </div>
    </Link>
  );
};
