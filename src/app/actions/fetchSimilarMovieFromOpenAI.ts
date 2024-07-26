import { OpenAiResponse } from "@/typification";

const Back_END_URL = "/api/postOpenAI";

export const fetchSimilarMovieFromOpenAI = async (
  title: string
): Promise<OpenAiResponse> => {
  const prompt = `
 You are a connoisseur of films. Find 20 similar movies like ${title}.
 The result in JSON format like this: ""["title", "title", "title"]"" without any additional text.
  `;

  try {
    const { response } = await fetch(Back_END_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    }).then((res) => res.json());

    return JSON.parse(response);
  } catch (error: any) {
    console.log("Error fetching data from OpenAI API:", error.message);
    throw new Error("Failed to fetch quiz data from OpenAI");
  }
};
