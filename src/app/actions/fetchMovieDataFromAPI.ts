export const fetchMovieDataFromAPI = async (routeURL: string, requestData: any) => { 
    const query = new URLSearchParams(requestData as any);
    // console.log("===================================================================")
    // console.log("QUERY", query)
    console.log(`${routeURL}?${query.toString()}`);
    const response = await fetch(`${routeURL}?${query.toString()}`);
    return response.json();
}