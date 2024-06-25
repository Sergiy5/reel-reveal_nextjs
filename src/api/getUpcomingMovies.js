import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

const AUTH_TOKEN = process.env.NEXT_PUBLIC_TMDB_API_KEY;

axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/';
axios.defaults.headers.common["Authorization"] = `Bearer &{AUTH_TOKEN}`;

export const getUpcomingMovies = async page => {
    try {
        const res = await axios.get(`upcoming?language=en-US&page=${page}`);
        
        return res.data.results;
    } catch (error) {
        console.log('getUpcomingMovies error', error.message);
    }
};
