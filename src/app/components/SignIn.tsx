"use client";

import Link from "next/link";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import { SharedInput } from "./ui/SharedInput";
import { nanoid } from "nanoid";
import { Modal } from "./ui/Modal";
import { Loader } from "./ui/Loader";
import { useState } from "react";

export const SignIn: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={`flex flex-col gap-6 w-[372px] z-20`}>
      <form onSubmit={() => null} className={`flex flex-col gap-6 w-full`}>
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
      <Modal isOpen={isLoading}>
        <Loader />{" "}
      </Modal>
    </div>
  );
};
