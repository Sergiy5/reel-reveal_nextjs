import React from 'react';
import { SvgBgEllips, WrapperChoseGenre, WrapperIconsGenres } from './chose-genres/ChooseGenres.styled';
import { IconGenre } from './IconGenre';
import sprite from '../../assets/images/svg-sprite/sprite-genres.svg'
 
export const ChoseGenre = () => {

  return (
    <div className={`relative flex flex-col items-center gap-12`}>
      <SvgBgEllips>
        <use xlinkHref={`${sprite}#genresEllips`} />
      </SvgBgEllips>
      <h2>Choose a movie by genre</h2>
      <div
        className={`relative flex items-start flex-wrap justify-around gap-16 sm:justify-between`}
      >
        <IconGenre name="comedy" />
        <IconGenre name="thriller" />
        <IconGenre name="detective" />
        <IconGenre name="drama" />
        <IconGenre name="romcom" />
        <IconGenre name="fantasy" />
        <IconGenre name="history" />
        <IconGenre name="sci-fi" />
        <IconGenre name="non-fic" />
        <IconGenre name="horror" />
        <IconGenre name="adventure" />
        <IconGenre name="cartoon" />
        <IconGenre name="musical" />
        <IconGenre name="anime" />
      </div>
    </div>
  );
};
