import { useEffect, useState } from "react"
import movieApi from "../api/movieApi";

export const useMovie = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [moviesList, setMoviesList] = useState({});
    
    const loadMovies = async () => {
        const response = await movieApi.get('movies/getMovies');
        setMoviesList(response.data.movies);
        setIsLoading(false);
    }

    useEffect(() => {
        loadMovies();
    }, [])

    return {
        isLoading,
        moviesList
    }

}
