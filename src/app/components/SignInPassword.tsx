"use client";

import Link from "next/link";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import { SharedInput } from "./ui/SharedInput";
import { useState } from "react";
import { userEmailSignal } from "@/context/UserContext";

interface SignInProps {
  setIsLoading: (isLoading: boolean) => void;
}

export const SignInPassword: React.FC<SignInProps> = ({ setIsLoading }) => {
  const [dataUser, setDataUser] = useState(() => {
    userEmailSignal.value;
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
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
