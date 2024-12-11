export const fetcher = async ([url, body]: [string, any]) => {
  
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch from ${url}`);
  }

  return res.json();
};
