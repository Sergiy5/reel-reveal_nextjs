export const fetchMovieDataFromAPI = async (routeURL: string, requestData: unknown) => { 
  const query = new URLSearchParams(requestData as any);

    // console.log("QUERY_=====================", requestData);
  // console.log(`${routeURL}?${query.toString()}`);
  
    const response = await fetch(`${routeURL}?${query.toString()}`);
     if (!response.ok) {
       throw new Error(`HTTP error! status: ${response.status}`);
     }

     const data = await response.json();
    //  console.log("RESPONS_>>>>>>>>>>>>>", data);
     return data;
}