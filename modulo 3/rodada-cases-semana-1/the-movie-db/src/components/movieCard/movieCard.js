import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToMovieDetailsPage } from "../../routes/coordinator";
import './movieCard.css'
import { useContext } from "react";
import { ContextMovies } from "../../services/context";

export const MovieCard = ({id, image, title, releaseDate}) => {
    const navigate = useNavigate();
    const globalMovies = useContext(ContextMovies);
    
    const handle = (id, image) => {
        goToMovieDetailsPage(navigate, id);
        globalMovies.setId(id);
        globalMovies.setImage(image);
    }
    
    return (
        <li className='movieCard' key={id} onClick={() => handle(id, image)}>
            <img src={`https://image.tmdb.org/t/p/w500/${image}`}/>
            <p className='movie__title'>{title}</p>
            <p className='movie__date'>{releaseDate}</p>
        </li>
    )
}