"use client";

import { Modal } from "./ui/Modal";
import { Loader } from "./ui/Loader";
import { isLoadingSignal } from "@/context/CommonContext";
import { useEffect, useState } from "react";
import { Register } from "./Register";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const AuthForms: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusUser, setStatusUser] = useState<
    "signin" | "register" | "signup"
  >("signin");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (statusUser === "signin") setTitle("Please enter email");
    if (statusUser === "signup") setTitle("Please enter password");
    if (statusUser === "register") setTitle("Please enter name, email, password");
  }, [statusUser]);
    
    
  return (
    <div className={`flex flex-col items-center justify-center  gap-12 z-10`}>
      <h3>{title}</h3>
      <div
        className={`flex flex-col items-center justify-center gap-6 w-[372px] `}
      >
        {statusUser === "signin" ? (
          <SignUp setIsLoading={setIsLoading} setStatusUser={setStatusUser} />
        ) : statusUser === "register" ? (
          <Register setIsLoading={setIsLoading} />
        ) : (
          <SignIn setIsLoading={setIsLoading} />
        )}
      </div>
      <p className={`text-lg`}>
        By signing in or creating an account, you agree with our Terms &
        Conditions and Privacy Policy
      </p>
      <Modal isOpen={isLoading}>
        <Loader />
      </Modal>
    </div>
  );
};
