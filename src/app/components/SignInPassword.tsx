"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import { SharedInput } from "./ui/SharedInput";
import { validatePassword } from "@/utils";
import { toast } from "react-toastify";
import { userEmailSignal, userPasswordSignal } from "@/context/UserContext";
import user from "@/db/models/user";
import { signInUser } from "../actions/signinUser";

interface SignInProps {
  setIsLoading: (isLoading: boolean) => void;
}

export const SignInPassword: React.FC<SignInProps> = ({ setIsLoading }) => {
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

     const formData = new FormData(event.currentTarget);
     formData.forEach((value, key) => {
       formData.set(key, String(value).trim());
     });

     const { password } = Object.fromEntries(formData);

    if(!validatePassword(password as string)) {
      toast.error("Password should be at least 8 characters long")
    }
      if (validatePassword(password as string)) {
      setUserPassword(password as string);
      }
  };

  useEffect(() => {
    if (!userPassword.length) return;
    const validPassword = async (email: string, password: string) => { 
      try {
        const user = await signInUser(email, password);
        console.log("USER_SIGNED_IN", user);
      } catch (error) {
        console.log(error) 
      } finally {
        setUserPassword("");
      }
    }
  
  validPassword(userEmailSignal.value, userPassword);

  }, [userPassword])
  


  return (
    <>
      <form onSubmit={handleSubmit} className={`flex flex-col gap-6 w-full`}>
        <SharedInput label="Password" name="password" type="text" id="password" />
        
        <ButtonOrLink type="submit" className={`w-full`}>
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
