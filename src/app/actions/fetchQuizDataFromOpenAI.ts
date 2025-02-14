import { OpenAiResponse } from "@/typification";

const Back_END_URL = "/api/openAI";

export const fetchQuizDataFromOpenAI = async (
  requestArray: string[]
): Promise<OpenAiResponse> => {
  const releaseDate = requestArray[3];
  const ageLimit = requestArray[6];

  const prompt = `You are a connoisseur of films. Provide exactly **8** lesser-known movies based on the following conditions:

- Use the United States age rating: ${ageLimit}.  
- If the age limit is PG-13, exactly **4 of the 8** must be animated films.  
- All movies must strictly have a release date of ${releaseDate}.  
- Ensure that all movie selections are **unique** across multiple requests. Do not repeat titles.  

Return the result strictly in JSON format with exactly **8 movie titles**, no more, no less:  
["title", "title", "title", "title", "title", "title", "title", "title"]  
Do not include any additional text or explanation.`;

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

// `
//   You are a connoisseur of films. Provide 8 lesser-known movies, use age limit United States certificate: ${ageLimit} if age limit is PG-13 half results must include cartoons and release date: ${releaseDate} for all results that is very important! One for each element in the array: ${requestArray}, Try do not repeat movies on on next request.
//  The result in JSON format like this: ""["title", "title", "title", "title", "title", "title", "title", "title"]"" without any additional text.
//   `;