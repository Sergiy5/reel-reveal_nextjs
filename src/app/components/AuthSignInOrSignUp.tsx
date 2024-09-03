"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { userEmailSignal, userPasswordSignal } from "@/context/UserContext";
import { fetchUserByEmail } from "../actions/fetchUserByEmail";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import { SharedInput } from "./ui/SharedInput";
import { validateEmail } from "@/utils";
import Google from "../../../public/icons/google.svg";
import { fetchUserByEmailResponse } from "@/typification";
import { socialLogin } from "../actions/socialLogin";
// import FaceBook from "../../../public/icons/facebook.svg";

interface SignUpProps {
  setIsLoading: (isLoading: boolean) => void;
  setStatusUser: (statusUser: "signin" | "register" | "signup") => void;
}

export const AuthSignInOrSignUp: React.FC<SignUpProps> = ({
  setIsLoading,
  setStatusUser,
}) => {
  const [userEmail, setUserEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email } = Object.fromEntries(new FormData(event.currentTarget));

    if (validateEmail(email as string)) {
      setIsValidEmail(true);
      setUserEmail(email as string);
    }

    if (!validateEmail(email as string)) {
      toast.error("Invalid email");
      setIsValidEmail(false);
    }
  };

  useEffect(() => {
    if (!userEmail.length) return;
    const getUser = async (email: string) => {
      setIsLoading(true);
      try {
        const response = await fetchUserByEmail(email).then((res) =>
          res.json()
        );

        if (!response.user) {
          userEmailSignal.value = userEmail;

          return setStatusUser("register");
        }

        if (response.user) {
          setStatusUser("signup");
          userEmailSignal.value = response.user.email;
          userPasswordSignal.value = response.user.password;
        }
      } catch (error) {
        console.log(error);
      } finally {
        setUserEmail("");
        setIsLoading(false);
      }
    };
    getUser(userEmail);
  }, [setIsLoading, setStatusUser, userEmail]);

  return (
    <div className="flex flex-col items-center w-[387px] gap-6 justify-center">
      <form onSubmit={handleSubmit} className={`flex flex-col gap-6 w-full`}>
        <SharedInput
          label="Email"
          name="email"
          type="text"
          id="email"
          isValid={isValidEmail}
        />
        <ButtonOrLink type="submit" className={`w-full`}>
          continue with email
        </ButtonOrLink>
      </form>
      <div className={`w-full flex items-center justify-center gap-2`}>
        <div className={`w-10 h-[1px] bg-gray-400 `}></div>
        <p>or use Google </p>
        <div className={`w-10 h-[1px] bg-gray-400 `}></div>
      </div>
      <ul className={`flex items-center justify-center gap-5 `}>
        <li>
          <form action={socialLogin}>
            <button
              type="submit"
              name="action"
              value="google"
              className={`size-44 rounded-2xl font-normal text-2xl bg-bgLightColor`}
            >
              <Google
                className={`mx-auto size-12 stroke-textColor fill-none`}
              />
              Google
            </button>
          </form>
        </li>
      </ul>
    </div>
  );
};
