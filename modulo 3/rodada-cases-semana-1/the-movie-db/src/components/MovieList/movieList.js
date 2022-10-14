
import React, { useContext } from "react";
import { MovieCard } from "../movieCard/movieCard";
import { Pages } from "../Pages/pages";
import './movieList.css'
import { ContextMovies } from "../../services/context";

export const MoviesList = () => {
    const globalMovies = useContext(ContextMovies);

    return(
        <div className="moviesListContainer">
            <ul className='moviesList'>
                {globalMovies.movies.map((movie) => {
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