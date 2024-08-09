"use client";

import Link from "next/link";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import { SharedInput } from "./ui/SharedInput";
import { useEffect, useState } from "react";
import { Modal } from "./ui/Modal";
import { Loader } from "./ui/Loader";
import { userEmailSignal } from "@/context/UserContext";
import { registerUser } from "../actions/registerUser";

export interface UserData {
  name: string;
  email: string;
  password: string;
}

export const Register: React.FC = () => {
  const [userData, setUserData] = useState<UserData | {}>();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    console.log("Register data:", data);

    setUserData(data);
  };

  useEffect(() => {
    if (!userData) return;
    const regUser = async (userData: UserData | {}) => {
      setIsLoading(true);
      try {
        const response = await registerUser(userData);

        if (response) {
          return console.log("Register response:", response);
        }
      } catch (error) {
        // console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    regUser(userData);
  }, [userData]);

  return (
    <div className={`flex flex-col items-center justify-center  gap-12 z-20`}>
      <h3>Please enter: name, email, and password.</h3>
      <div
        className={`flex flex-col items-center justify-center gap-6 w-[372px] `}
      >
        <form onSubmit={handleSubmit} className={`flex flex-col gap-8 w-full`}>
          <SharedInput label="Name" type="text" name="name" id="name" />
          <SharedInput
            label="Email"
            type="text"
            name="email"
            id="email"
            defaultValue={`${userEmailSignal.value ?? ""}`}
          />
          <SharedInput
            label="Password"
            type="text"
            name="password"
            id="password"
          />
          <SharedInput
            label="Confirm password"
            type="text"
            name="password"
            id="Confirm password"
          />

          <ButtonOrLink type="submit" onClick={() => null} className={`w-full`}>
            create account
          </ButtonOrLink>
        </form>
        <Link href={`/register`} className={`link`}>
          <p>Forgot password?</p>
        </Link>
        <div className={`w-full h-[1px] bg-gray-500`}></div>
      </div>
      <p className={`text-lg`}>
        By signing in or creating an account, you agree with our Terms &
        Conditions and Privacy Policy
      </p>
      <Modal isOpen={isLoading}>
        <Loader />{" "}
      </Modal>
    </div>
  );
};
