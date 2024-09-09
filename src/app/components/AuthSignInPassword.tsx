"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import { SharedInput } from "./ui/SharedInput";
import { validatePassword } from "@/utils";
import { toast } from "react-toastify";
import { userEmailSignal } from "@/context/UserContext";
import { signInUser } from "../actions/signinUser";
import { useRouter, useSearchParams } from "next/navigation";
import { doCredentialLogin } from "../actions/socialLogin";

interface SignInProps {
  setIsLoading: (isLoading: boolean) => void;
}

export const AuthSignInPassword: React.FC<SignInProps> = ({ setIsLoading }) => {
  const [userPassword, setUserPassword] = useState("");
  const [redirectTo, setRedirectTo] = useState("/"); // Default redirect
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, key) => {
      formData.set(key, String(value).trim());
    });

    const { password } = Object.fromEntries(formData);

    if (!validatePassword(password as string)) {
      toast.error("Password should be at least 8 characters long");
    }
    if (validatePassword(password as string)) {
      setUserPassword(password as string);
    }
  };

  useEffect(() => {
    if (!userPassword.length) return;
    const signInUserPassword = async (email: string, password: string) => {
      try {
        const response = await doCredentialLogin({ email, password });
        console.log("RESPONSE_>>>>>>>>>>>", response)
        
        if (!response) return toast.error(`Wrong password`); // NEED to FIX!!!

        const from = new URLSearchParams(window.location.search).get("from");
        if (from) {
          const decodedFrom = decodeURIComponent(from);
          console.log("decodedFrom_>>>>>>>>>>>", decodedFrom);

          router.replace("/saved");
          // router.replace(`${decodedFrom}`);
          // router.push(decodedFrom); // Navigate to the "from" page after login
        }
      
        toast.success(`User logged in successfully`);
        router.back();
// router.push(redirectTo);
      } catch (error) {
        console.log(error);
      } finally {
        setUserPassword("");
      }
    };

    signInUserPassword(userEmailSignal.value, userPassword);
  }, [redirectTo, router, userPassword]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-6 w-full pb-6 `}
      >
        <SharedInput
          label="Password"
          name="password"
          type="text"
          id="password"
        />
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
