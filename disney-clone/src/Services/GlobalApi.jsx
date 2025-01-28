import axios from "axios";

const movieBasedURL="https://api.themoviedb.org/3";

const API_KEY="d9bc9cc276ae97ca2d6fedaa7a69e616";


const getTrendingVideos=axios.get(movieBasedURL+"/trending/all/day?api_key="+API_KEY);

const getMovieByGenreId=(id)=>axios.get(movieBasedURL+"/discover/movie?api_key="+API_KEY+"&with_genres="+id);

export default{
    getTrendingVideos,
    getMovieByGenreId,
}

