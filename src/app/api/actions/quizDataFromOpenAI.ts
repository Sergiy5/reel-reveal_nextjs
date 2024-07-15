import { OpenAiResponse } from '@/types';

const Back_END_URL = '/api/postOpenAI';

export const quizDataFromOpenAI = async (
  requestArray: string[],
  existedMovies: string[]
): Promise<OpenAiResponse> => {
  const prompt = `
  - You are a connoisseur of films and everything related to them, music, actors, genres, the year the film was released, what film genres the actor is associated with.
  - Find 7 movies, one for each element form the array ${requestArray}.
  - Search for lesser-known films.
  - Temperature 2
  - Return structured valid JSON with seven titles of movies.
  - First offer with the highest rating, in the next similar request gradually lower the rating
  - As a result, there should be no such films ${existedMovies}.
  - The result in JSON format like this: ""["title", "title", "title", "title", "title", "title", "title"]"" without any additional text
    `;

  try {
    const {response} = await fetch(Back_END_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify({ prompt }), 
    }).then(( res ) => res.json());

    return JSON.parse(response);
  } catch (error: any) {
    console.log("getOpenAiAPI error", error.message);
  }
};