import { OpenAiResponse } from "@/typification";

const Back_END_URL = "/api/openAI";

export const fetchQuizDataFromOpenAI = async (
  requestArray: string[]
): Promise<OpenAiResponse> => {
  const releaseDate = requestArray[3];
  const ageLimit = requestArray[6];

  const prompt = `
  You are a connoisseur of films. Provide 8 lesser-known movies, use age limit United States certificate: ${ageLimit} if age limit is PG-13 half results must include cartoons and release date: ${releaseDate} for all results that is very important! One for each element in the array: ${requestArray}.
 The result in JSON format like this: ""["title", "title", "title", "title", "title", "title", "title", "title"]"" without any additional text.
  `;

  try {
    const { response } = await fetch(Back_END_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    }).then((res) => res.json());
      console.log("OPEN_AI+++++++++++++++++++++++++", response);

    return JSON.parse(response);
  } catch (error: any) {
    console.log("Error fetching data from OpenAI API:", error.message);
    throw new Error("Failed to fetch quiz data from OpenAI");
  }
};