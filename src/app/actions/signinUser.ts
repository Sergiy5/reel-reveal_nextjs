export const signInUser = async (
    email: string,
    password: string
) => {
    const user = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })

return user.json()
}