import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieCard } from "../movieCard/movieCard";
import { Pages } from "../Pages/pages";
import './movieList.css'

export const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const apiKey = 'd081d773005fd2cf3c72b3e5ac20847d'
    const language = 'pt-BR'
    const sortBy = 'popularity.desc'

    const getMoviesList = () => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=${language}&sort_by=${sortBy}&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`)
        .then(resp => {
            console.log(resp.data);
            setMovies(resp.data.results);
            console.log(movies);
        });
    }

    useEffect(getMoviesList, []);

    return(
        <div className="moviesListContainer">
            <ul className='moviesList'>
                {movies.map((movie) => {
                    return(
                        <MovieCard 
                            id={movie.id}
                            image={movie.poster_path}
                            title={movie.title}
                            releaseDate={movie.release_date}
                        />
                    )
                })}
            </ul>
            <Pages/>
        </div>
    )
}