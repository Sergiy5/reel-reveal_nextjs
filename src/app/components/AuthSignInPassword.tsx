"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import { SharedInput } from "./ui/SharedInput";
import { validatePassword } from "@/utils";
import { toast } from "react-toastify";
import { userEmailSignal } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { doCredentialLogin } from "../actions/socialLogin";
import { useForm } from "react-hook-form";

interface SignInProps {
  setIsLoading: (isLoading: boolean) => void;
}

export const AuthSignInPassword: React.FC<SignInProps> = ({ setIsLoading }) => {
  const [userPassword, setUserPassword] = useState("");
  const [redirectTo, setRedirectTo] = useState("/"); // Default redirect
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<{ password: string }>({
    mode: "onChange",
  });

  const onSubmit = (data: { password: string }) => {

    const { password } = data;

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
console.log("response-on-login-password", response);
        if (!response) return toast.error(`Wrong password`); // NEED to FIX!!!

        toast.success(`User logged in successfully`);
        router.replace("/home");

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
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col gap-6 w-full pb-6 `}
      >
        <SharedInput
          id="password"
          label="Password"
          name="password"
          type="password"
          register={register}
          validation={{ required: true, validate: validatePassword }}
          errors={errors}
        />
        <ButtonOrLink type="submit" disabled={!isValid} className={`w-full`}>
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
