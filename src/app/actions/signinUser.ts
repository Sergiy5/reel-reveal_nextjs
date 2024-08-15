import user from "@/db/models/user";
import { signToken } from "@/db/utils/signToken";

export const signInUser = async (
    email: string,
    password: string
) => {
    const user = await fetch("/api/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })

return user.json()
}