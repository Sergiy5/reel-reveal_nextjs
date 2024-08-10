import { AuthForms } from "@/app/components/AuthForms";
import { SignIn } from "@/app/components/SignIn";


export default async function LoginPage() {

    return (
      <main>
        <AuthForms title={"Please enter your password."}>
          <SignIn />
        </AuthForms>
      </main>
    );
}
