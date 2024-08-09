export const fetchUserByEmail = async (email: string) => {

    const res = await fetch("/api/get-user_by-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    return res.json();
}
