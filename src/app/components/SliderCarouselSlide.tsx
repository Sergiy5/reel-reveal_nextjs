import { getFilNameFromPath } from "@/lib";
import FrameShot from "../../../public/icons/frame-shot.svg";
import Image from "next/image";
import { SliderCarouselSlideProps } from "@/types";

export const SliderCarouselSlide: React.FC<SliderCarouselSlideProps> = ({
  item,
}) => {
  const isDev = process.env.NODE_ENV;
  const regExp = isDev === "development" ? "\\" : "/";

  const pathName = getFilNameFromPath(item, regExp);
  const title = pathName.replaceAll("-", " ");

  return (
    <div className={` relative cursor-pointer`}>
      <FrameShot className={`w-[288px] h-auto`} />
      <div className={` rounded-[3px]`}>
        <Image
          src={`/carousel-images/${pathName}.webp`}
          width={288}
          height={275}
          data-title={title}
          alt={title}
          className={`absolute w-[276px] mt-[1.5px] rounded-xl h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
        />
      </div>
    </div>
  );
};