import Link from 'next/link';
// import sprite from '/icons/genres-sprite.svg';

export const IconGenre = ({ name }) => {

    const capitalizeFirstLetter = str =>
      `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

  return (
    <Link href={"#"} className={`link`}>
      <div className={`flex flex-col items-center w-[95px] h-[85px] gap-2`}>
        <svg className={` w-12 h-12 text-current`}>
          <use xlinkHref={`/icons/genres-sprite.svg#${name}`} />
        </svg>
        <span className={` font-light text-xl leading-4`}>
          {capitalizeFirstLetter(name)}
        </span>
      </div>
    </Link>
  );
};
