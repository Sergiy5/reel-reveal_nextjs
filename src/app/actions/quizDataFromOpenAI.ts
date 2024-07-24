import { OpenAiResponse } from "@/typification";

const Back_END_URL = "/api/postOpenAI";

export const quizDataFromOpenAI = async (
  requestArray: string[]
): Promise<OpenAiResponse> => {
  const releaseDate = requestArray[3]
  const prompt = `
  You are a connoisseur of films. Provide 8 lesser-known movies, use release date ${releaseDate} one for each element in the array: ${requestArray}.
 The result in JSON format like this: ""["title", "title", "title", "title", "title", "title", "title", "title"]"" without any additional text.
  `;

  try {
    const {response} = await fetch(Back_END_URL, {
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

//**An old promt */

  // const prompt = `
  // - You are a connoisseur of films and everything related to them, music, actors, genres, the year the film was released, what film genres the actor is associated with.
  // - Find 8 movies, one for each element from the array ${requestArray}.
  // - Search for lesser-known films.
  // - Temperature 2
  // - Return structured valid JSON with eight titles of movies.
  // - First offer with the highest rating, in the next similar request gradually lower the rating
  // - The result in JSON format like this: ""["title", "title", "title", "title", "title", "title", "title", "title"]"" without any additional text
  // `;
