export const fetchMovieDataFromAPI = async (routeURL: string, requestData: any) => { 
    const query = new URLSearchParams(requestData as any);
    // console.log("QUERY_=====================", requestData);
    // console.log(`${routeURL}?${query.toString()}`);
    const response = await fetch(`${routeURL}?${query.toString()}`);
    // console.log("RESPONS_>>>>>>>>>>>>>", await response.json());
    return response.json();
}