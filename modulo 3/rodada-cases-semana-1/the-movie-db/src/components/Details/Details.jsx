import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ContextMovies } from "../../services/context";
import axios from "axios";
import { useEffect } from "react";
import './Details.css'

export const Details = () => {
    const globalMovies = useContext(ContextMovies);
    const [ movieDetails, setMovieDetails] = useState({});
    const [ releaseDate, setReleaseDate] = useState([]);
    const [ genres, setGenres] = useState([]);

    const getMovieDetails = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${globalMovies.id}?api_key=${globalMovies.apiKey}&language=${globalMovies.language}`)
        .then(resp => {
            setMovieDetails(resp.data);
            setGenres(resp.data.genres);
        });
        axios.get(`https://api.themoviedb.org/3/movie/${globalMovies.id}/release_dates?api_key=${globalMovies.apiKey}`)
        .then(resp => {
            setReleaseDate(resp.data.results);
        });
    }

    useEffect(() => {
        getMovieDetails();
    }, [globalMovies.id])

    return (
        <div className="details">
            <img id="movieImage" src={`https://image.tmdb.org/t/p/w500/${globalMovies.image}`}/>
            <div className="text__details">
                <h3 id="title">{movieDetails.title}</h3>
                <ul className="info">
                    <li id="age-group">
                        {releaseDate.map((result) =>{
                            if(result.iso_3166_1 === 'BR'){
                                return(result.release_dates[0].certification)
                            }
                        })} anos
                    </li> 
                    <li>
                        {releaseDate.map((result) =>{
                            if(result.iso_3166_1 === 'BR'){
                                return(result.release_dates[0].release_date.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1'))
                            }
                        })} BR
                    </li>
                    <li>
                        {genres.map((g, i) => {
                            if(i < genres.length - 1){
                                return g.name + ', '
                            } else{
                                return g.name
                            }
                        })}
                    </li>
                    <li>
                        {Math.floor(movieDetails.runtime / 60)}h {movieDetails.runtime % 60}min
                    </li>
                </ul>
                <div className="rating">
                    <p>{Math.round(movieDetails.vote_average * 10)}%</p>
                    <p className="rating-text">Avaliação dos usuários</p>
                </div>
                <div className="overview">
                    <h4>Sinopse</h4>
                    <p>{movieDetails.overview}</p>
                </div>
                <div className="credits">
                    <div className="credits-card">
                        <h5>Rob Liefeld</h5>
                        <p>Characters</p>
                    </div>  
                    <div className="credits-card">
                        <h5>Rob Liefeld</h5>
                        <p>Characters</p>
                    </div> 
                    <div className="credits-card">
                        <h5>Rob Liefeld</h5>
                        <p>Characters</p>
                    </div> 
                    <div className="credits-card">
                        <h5>Rob Liefeld</h5>
                        <p>Characters</p>
                    </div>  
                </div>
            </div>
        </div>
    )
}