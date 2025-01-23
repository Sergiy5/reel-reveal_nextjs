"use client";

import Image from "next/image";
import { doLogout } from "../../actions/socialLogin";
import { isAuthUserSignal, sessionUserSignal } from "@/context/UserContext";
import { userStatuses } from "@/variables";
import { useRouter } from "next/navigation";
import { savedMoviesSignal } from "@/context/MoviesContext";
import { Icon } from "../ui/Icon";

export const UserProfile: React.FC = () => {
  const srcImage = "";

  const router = useRouter();

  const signOut = () => {
    doLogout();
    isAuthUserSignal.value = false;
    savedMoviesSignal.value = [];

    sessionUserSignal.value = {
      userId: "",
      email: "",
      userName: "",
      userStatus: userStatuses.Unauthenticated,
    };
    setTimeout(() => {
      window.location.reload();
      window.location.href = "/home";
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center gap-12 mr-auto z-20">
      <h2>User Profile</h2>
      <div className="flex items-center  gap-12">
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
            <button
              className={`group flex items-center gap-2 hover:cursor-pointer tranisition-all ease-in-out duration-300 hover:text-accentColor`}
            >
              <Icon
                id="icon-edit-profile"
                width={20}
                height={20}
                className={`text-textColor tranisition-all ease-in-out duration-300 group-hover:text-accentColor`}
              />

              <span>Edit pfile</span>
            </button>
          </li>
          <li>
            <button
              onClick={signOut}
              className={`group flex items-center gap-2 hover:cursor-pointer tranisition-all ease-in-out duration-300 hover:text-accentColor`}
            >
              <Icon
                id="icon-signout"
                width={24}
                height={24}
                className="fill-textColor tranisition-all ease-in-out duration-300 group-hover:fill-accentColor"
              />

              <span>Sign out</span>
            </button>
          </li>
          <li>
            <button
              className={`group flex items-center gap-2 hover:cursor-pointer tranisition-all ease-in-out duration-300 hover:text-accentColor`}
            >
              <Icon
                id="icon-remove-acount"
                width={20}
                height={18}
                className="fill-textColor stroke-textColor tranisition-all ease-in-out duration-300 group-hover:stroke-accentColor group-hover:fill-accentColor"
              />

              <span>Delete account</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
