export const saveUserMail = async (mail: {}) => {
  try {
    const res = await fetch("/api/save-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mail }),
    });
      
    return res;
  } catch (error) {
    console.log(error);
  }
};
