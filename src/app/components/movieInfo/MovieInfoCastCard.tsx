import Image from "next/image";
import { generateUrlImage } from "@/utils";
import { Actor } from "@/typification";

interface MovieInfoCastCardProps {
  movie: Actor;
}
export const MovieInfoCastCard: React.FC<MovieInfoCastCardProps> = ({
  movie,
}) => {
  const { profile_path, name, character, original_name } = movie;

  return (
    <div className={`flex flex-col p-1 sm:p-3 lg:p-2 xl:p-3 gap-6`}>
      <Image
        src={`${generateUrlImage(profile_path, "w200")}`}
        alt={`Foto ${name ?? original_name}`}
        width={183}
        height={183}
        className={`object-cover w-72 lg:w-[183px] aspect-square  rounded-xl`}
      />
      <ul className={`flex flex-col justify-center gap-2`}>
        <li>
          <h4 className={`font-medium text-xl`}>{name ?? original_name}</h4>
        </li>
        <li>
          <p >{character}</p>
        </li>
      </ul>
    </div>
  );
};
