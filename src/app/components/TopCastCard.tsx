import Image from "next/image";
import { generateUrlImage } from "@/lib";
import { Actor } from "@/types";

interface TopCastCardProps {
  item: Actor;
}
export const TopCastCard: React.FC<TopCastCardProps> = ({ item }) => {

    const { profile_path, name, character, original_name } = item;
    
  return (
    <div className={`flex flex-col pl-[5%] w-44 md:w-auto gap-6`}>
      <Image
        src={`${generateUrlImage(profile_path, "200")}`}
        alt={`Foto ${name ?? original_name}`}
        width={183}
        height={183}
        className={`size-44 object-cover aspect-square rounded-xl`}
      />
      <ul className={`flex flex-col gap-4`}>
        <li className={`text-textColor`}>{name ?? original_name}</li>
        <li className={`text-textColor`}>{character}</li>
      </ul>
    </div>
  );
};
