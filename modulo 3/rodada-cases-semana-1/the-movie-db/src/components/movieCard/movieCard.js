import React, { useEffect, useState } from "react";
import './movieCard.css'

export const MovieCard = ({id, image, title, releaseDate}) => {
    return (
        <li className='movieCard' key={id}>
            <img src={`https://image.tmdb.org/t/p/w500/${image}`}/>
            <p className='movie__title'>{title}</p>
            <p className='movie__date'>{releaseDate}</p>
        </li>
    )
}