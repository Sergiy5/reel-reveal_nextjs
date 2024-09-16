"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import { SharedInput } from "./ui/SharedInput";
import { validatePassword } from "@/utils";
import { toast } from "react-toastify";
import { statusUserSignal, userEmailSignal } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { doCredentialLogin } from "../actions/socialLogin";
import { useForm } from "react-hook-form";

interface SignInProps {
  setIsLoading: (isLoading: boolean) => void;
}

export const AuthLoginPassword: React.FC<SignInProps> = ({ setIsLoading }) => {
  // useRouter ===========================================
  const router = useRouter();
  // useForm ===============================================
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<{ password: string }>({
    mode: "onChange",
  });
  // Submit form ============================================
  const onSubmit = async (data: { password: string }) => {
    setIsLoading(true);
    const { password } = data;
    const email = userEmailSignal.value;
    try {
      const response = await doCredentialLogin({ email, password });

      // console.log("response-on-login-password", response);

      if (!response) return toast.error(`Wrong password`); // NEED to FIX!!!

      statusUserSignal.value = true;
      toast.success(`User logged in successfully`);
      router.replace("/home");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col gap-6 w-full pb-6 `}
      >
        <SharedInput
          id="password"
          label="Password"
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
