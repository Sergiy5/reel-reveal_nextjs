export const registerUser = async (userData: any) => {

  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userData }),
  });
  
  return res.json();
};
