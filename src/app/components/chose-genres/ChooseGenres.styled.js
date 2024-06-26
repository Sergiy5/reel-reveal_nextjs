import styled from 'styled-components';
import { getAspectRatio } from 'utils';

export const WrapperChoseGenre = styled.div`
/* position: relative;
display: flex;
flex-direction: column;
align-items: center;
gap: 48px; */
`;

export const WrapperIconsGenres = styled.div`
  /* position: relative;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-around;

  gap: 64px;

  @media (min-width: 481px) {
    justify-content: space-between;
  } */
`;
export const SvgGanreWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  width: 95px;
  height: 85px;
  gap: 8px; */
`;

export const SvgGenreStyled = styled.svg`
  /* width: 48px;
  height: 48px;
  color: currentColor; */
`;

export const SpanStyled = styled.span`
  /* font-weight: 300;
  font-size: 20px;
  line-height: 150%; */
`;

export const SvgBgEllips = styled.svg`
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  aspect-ratio: 1440/720;
  /* height: calc(100vw / ${getAspectRatio(1440, 720)}); */

  filter: blur(97px);
  mix-blend-mode: normal;

  @media (min-width: 1440px) {
    width: 1440px;
    height: 720px;
  }
`;
