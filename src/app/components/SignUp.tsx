"use client";

import { userEmailSignal } from "@/context/UserContext";
import { fetchUserByEmail } from "../actions/fetchUserByEmail";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SharedInput } from "./ui/SharedInput";
import { Loader } from "./ui/Loader";
import { Modal } from "./ui/Modal";
import { nanoid } from "nanoid";

export const SignUp: React.FC = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email } = Object.fromEntries(new FormData(event.currentTarget));
    setUserEmail(email as string);
  };

  useEffect(() => {
    if (!userEmail.length) return;
    const getUser = async (email: string) => {
      setIsLoading(true);
      try {
        const data = await fetchUserByEmail(email);

        if (!data.user) {
          userEmailSignal.value = userEmail;
          return router.push(`/register`);
        }

        if (data) {
          router.push(`/signin`);
          userEmailSignal.value = data.email;
        }
      } catch (error) {
        console.log(error);
      } finally {
        setUserEmail("");
        setIsLoading(false);
      }
    };
    getUser(userEmail);
  }, [router, userEmail]);

  return (
    <div className={`flex flex-col gap-6 w-[372px] z-20`}>
      <form onSubmit={handleSubmit} className={`flex flex-col gap-6 w-full`}>
        <SharedInput label="Email" name="email" type="text" id="email" />
        <ButtonOrLink type="submit" onClick={() => null} className={`w-full`}>
          continue with email
        </ButtonOrLink>
      </form>
      <div className={`w-full flex items-center justify-center gap-2`}>
        <div className={`w-10 h-[1px] bg-gray-400 `}></div>
        <p>or use one of these services </p>
        <div className={`w-10 h-[1px] bg-gray-400 `}></div>
      </div>
      <ul className={`flex items-center justify-center gap-5 `}>
        <li>
          <button className={`size-44 rounded-2xl bg-bgLightColor`}>
            {/* <svg width={32} height={32}>
              <use xlinkHref={`${Sprite}#icon-google-sign_in`} />
            </svg> */}
          </button>
        </li>
        <li>
          <button className={`size-44 rounded-2xl bg-bgLightColor`}>
            {/* <svg width={32} height={32}>
              <use xlinkHref={`${Sprite}#icon-google-sign_in`} />
            </svg> */}
          </button>
        </li>
      </ul>
      <Modal isOpen={isLoading}>
        <Loader />{" "}
      </Modal>
    </div>
  );
};
