import Image from "next/image";

export const UserProfile: React.FC = () => {
  const srcImage = "";

  return (
    <div className="flex flex-col items-center z-20">
      <h2>User Profile</h2>
      <div className="flex items-center  gap-4">
        {" "}
        {srcImage ? (
          <Image
            src={""}
            alt={""}
            width={100}
            height={100}
            className={`rounded-full w-[183px] bg-bgLightColor`}
          />
        ) : (
          <div
            className={`flex items-center justify-center rounded-full w-[183px] aspect-square
             bg-bgLightColor text-7xl`}
          >
            {" "}
            JD
          </div>
        )}
        <ul className="flex flex-col gap-12">
          <li>
            <button className={`hover:cursor-pointer hover:text-accentColor`}>#  Edit pfile</button>
          </li>
          <li>
            <button className={`hover:cursor-pointer hover:text-accentColor`}>{`<=`}  Sign out</button>
          </li>
          <li>
            <button className={`hover:cursor-pointer hover:text-accentColor`}>X  Delete acount</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
