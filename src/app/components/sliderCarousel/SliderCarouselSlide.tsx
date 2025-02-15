"use client";

import { useRouter } from "next/navigation";

import { getFilNameFromPath } from "@/utils";
import Image from "next/image";
import { Icon } from "@/app/components/ui/Icon";

export interface SliderCarouselSlideProps {
  movie: string;
}

export const SliderCarouselSlide: React.FC<SliderCarouselSlideProps> = ({
  movie,
}) => {

const router = useRouter();

 const handleSubmit = (title: string) => {
   console.log(title.replace("_", " "));
   const preparedTitle = title.replace("_", " ");
    router.push(`/movies?title=${preparedTitle}`);
 };

  const isDev = process.env.NODE_ENV === "development";
  const regExp = isDev ? "\\" : "/";
  const pathName = getFilNameFromPath(movie, regExp) || "";

  const title = pathName.replaceAll("-", " ");

  return (
    <div className={` relative`}>
      <Icon id="icon-frame-shot" width={288} height={275} />
      <div className={` rounded-[3px]`} onClick={() => handleSubmit(title)} >
        <Image
          src={`/carousel-images/${pathName}.webp`}
          width={288}
          height={275}
          data-title={title}
          quality={75}
          alt={title}
          className={`absolute w-[276px] cursor-pointer aspect-auto mt-[1.5px] rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
        />
      </div>
    </div>
  );
};
