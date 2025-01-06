import { getFilNameFromPath } from "@/utils";
import FrameShotIcon from "../../../../public/icons/frame-shot.svg";
import Image from "next/image";
import { Icon } from "./Icon";

export interface SliderCarouselSlideProps {
  movie: string;
}

export const SliderCarouselSlide: React.FC<SliderCarouselSlideProps> = ({
  movie,
}) => {

  const isDev = process.env.NODE_ENV === "development";
  const regExp = isDev ? "\\" : "/";
  const pathName = getFilNameFromPath(movie, regExp) || "";

  const title = pathName.replaceAll("-", " ");

  return (
    <div className={` relative cursor-pointer`}>
      <Icon id="icon-frame-shot" width={288} height={275} />
      <div className={` rounded-[3px]`}>
        <Image
          src={`/carousel-images/${pathName}.webp`}
          width={288}
          height={275}
          data-title={title}
          quality={75}
          alt={title}
          className={`absolute w-[276px] aspect-auto mt-[1.5px] rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
        />
      </div>
    </div>
  );
};
