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
    <div className={`flex flex-col p-1 sm:p-2.5 w-auto gap-6`}>
      <Image
        src={`${generateUrlImage(profile_path, "200")}`}
        alt={`Foto ${name ?? original_name}`}
        width={183}
        height={183}
        className={`object-cover aspect-square rounded-xl`}
      />
      <ul className={`flex flex-col justify-center gap-4`}>
        <li>
          <p className={`font-medium`}>{name ?? original_name}</p>
        </li>
        <li>
          <p className="text-base">{character}</p>
        </li>
      </ul>
    </div>
  );
};
