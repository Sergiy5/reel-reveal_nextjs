"use client";

import Image from "next/image";
import { doLogout } from "../actions/socialLogin";
import DeleteAccount from "../../../public/icons/delete-account.svg";
import Signout from "../../../public/icons/signout.svg";
import EditAccaount from "../../../public/icons/edit-account.svg";


export const UserProfile: React.FC = () => {
  const srcImage = "";

  const signOut = () => {
    doLogout()
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
              <EditAccaount
                width={21}
                height={21}
                className={`fill-textColor tranisition-all ease-in-out duration-300 group-hover:fill-accentColor`}
              />{" "}
              <span>Edit pfile</span>
            </button>
          </li>
          <li>
            <button
              onClick={signOut}
              className={`group flex items-center gap-2 hover:cursor-pointer tranisition-all ease-in-out duration-300 hover:text-accentColor`}
            >
              <Signout
                width={24}
                height={24}
                className={`fill-textColor tranisition-all ease-in-out duration-300 group-hover:fill-accentColor`}
              />{" "}
              <span>Sign out</span>
            </button>
          </li>
          <li>
            <button
              className={`group flex items-center gap-2 hover:cursor-pointer tranisition-all ease-in-out duration-300 hover:text-accentColor`}
            >
              <DeleteAccount
                width={20}
                height={18}
                className={`fill-textColor stroke-textColor tranisition-all ease-in-out duration-300 group-hover:stroke-accentColor group-hover:fill-accentColor`}
              />{" "}
              <span>Delete acount</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
