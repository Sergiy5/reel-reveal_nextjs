import { OpenAiResponse } from "@/typification";

const Back_END_URL = "/api/openAI";

export const fetchQuizDataFromOpenAI = async (
  requestArray: string[]
): Promise<OpenAiResponse> => {
  const mood = requestArray[0];
  const watchingWith = requestArray[1];
  const genre = requestArray[2];
  const era = requestArray[3];
  const movieSong = requestArray[4];
  const actorGenre = requestArray[5];
  const ageRating = requestArray[6];
  const snack = requestArray[7];

  console.log("requestArray++++++", requestArray);

  const prompt = `You are a movie recommendation assistant. Based on the user's quiz answers, suggest exactly 8 movie titles that match their preferences.  

  User Preferences:
- Mood: ${mood}  
- Watching with: ${watchingWith}  
- Preferred genre: ${genre}, ${actorGenre}
- Era: ${era}  
- Iconic movie song choice: ${movieSong} or similar  
- Age rating: ${ageRating}  
- Movie snack (for mood influence): ${snack}  

### Rules for Selection:  
1. Genre Matching: If the user picked a genre, recommend 4 exact matches and 4 complementary genres for variety.  
2. Group Watching: If "Friends" was selected, ensure diverse recommendations across multiple genres.  
3. Age Rating: Ensure all movies respect the chosen age rating (e.g., PG films must exclude R-rated movies).  
4. Era-Specific Recommendations: If a specific period was chosen (e.g., 'Classic' or 'Modern'), all recommendations must be from that time frame.  
5. Actor Influence: If an actor was chosen, prioritize movies featuring that actor in relevant genres.  
6. IMDb Rating Filter: Recommend only movies with a rating higher then 6.0 on IMDb.  
7. Avoid Repetitions: Ensure unique recommendations per quiz attempt and prevent duplicate results for the same IP address.  

### Output Format:  
 Return the result strictly in JSON format with exactly **8 movie titles**:  
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


//  const prompt = `You are a connoisseur of films. Provide exactly **8** movies based on the following conditions:

// - Use the United States age rating: ${ageLimit}. 
// - All movies must have rating Imdb more then 6.  
// - If the age limit is PG-13 or PG, exactly **4 of the 8** must be animated films.  
// - All movies must strictly have a release date of ${releaseDate}.  
// - Ensure that all movie selections are **unique** across multiple requests. Do not repeat titles.  

// Return the result strictly in JSON format with exactly **8 movie titles**:  
// ["title", "title", "title", "title", "title", "title", "title", "title"]  
// Do not include any additional text or explanation.`;
// `
//   You are a connoisseur of films. Provide 8 lesser-known movies, use age limit United States certificate: ${ageLimit} if age limit is PG-13 half results must include cartoons and release date: ${releaseDate} for all results that is very important! One for each element in the array: ${requestArray}, Try do not repeat movies on on next request.
//  The result in JSON format like this: ""["title", "title", "title", "title", "title", "title", "title", "title"]"" without any additional text.
//   `;
