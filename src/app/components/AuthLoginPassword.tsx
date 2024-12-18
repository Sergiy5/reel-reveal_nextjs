"use client";

import Link from "next/link";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import { SharedInput } from "./ui/SharedInput";
import { validatePassword } from "@/utils";
import { toast } from "react-toastify";
import {
  isAuthUserSignal,
  sessionUserSignal,
  userEmailSignal,
} from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { doCredentialLogin } from "../actions/socialLogin";
import { useForm } from "react-hook-form";
import { getSession } from "next-auth/react";
import { userStatuses } from "@/variables";

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

      if (!response) return toast.error(`Wrong password`); // NEED to change more information!!!

      isAuthUserSignal.value = true;
      
      const session = await getSession();
      toast.success(`${session?.user?.name} logged in successfully`);

      sessionUserSignal.value = {
        userId: session?.user?.id,
        userName: session?.user?.name,
        email: session?.user?.email,
        userStatus: userStatuses.Authenticated,
      };
      router.refresh();
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
