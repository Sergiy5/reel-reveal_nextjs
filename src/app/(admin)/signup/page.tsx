import { AuthForms } from "@/app/components/AuthForms";
import { SignUp } from "@/app/components/SignUp";

export default async function LoginEmailPage() {

    return (
      <main>
        {" "}
        <AuthForms title={"Sing in or create account"}>
          <SignUp />
        </AuthForms>
      </main>
    );
}
