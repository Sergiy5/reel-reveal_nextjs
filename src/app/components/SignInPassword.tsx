"use client";

import { useState } from "react";
import Link from "next/link";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import { SharedInput } from "./ui/SharedInput";
import { validatePassword } from "@/utils";
import { toast } from "react-toastify";

interface SignInProps {
  setIsLoading: (isLoading: boolean) => void;
}

export const SignInPassword: React.FC<SignInProps> = ({ setIsLoading }) => {
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { password } = Object.fromEntries(new FormData(event.currentTarget));
    if(!validatePassword(password as string)) {
      toast.error("Password should be at least 8 characters long")
    }
      if (validatePassword(password as string)) {
      setUserPassword(password as string);
      }
    // setIsLoading(true);
  };


  return (
    <>
      <form onSubmit={handleSubmit} className={`flex flex-col gap-6 w-full`}>
        <SharedInput label="Password" type="teext" id="password" />

        <ButtonOrLink type="submit" onClick={() => null} className={`w-full`}>
          sign in
        </ButtonOrLink>
      </form>
      <div className={`w-full flex items-center justify-center gap-2`}>
        <Link href={`/register`} className={`link`}>
          <p>Forgot password?</p>
        </Link>
      </div>
    </>
  );
};
