import React from 'react'
import './menu.css'
import { useContext } from 'react'
import { ContextMovies } from '../../services/context'

export const Menu = () => {
    const globalMovies = useContext(ContextMovies);

    return (
        <div className='menu'>
            <h4>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h4>
            <div className='filter'>
                <p>FILTRE POR:</p>
                <ul className='buttons'>
                    {globalMovies.genres.map((genre) => {
                        return (
                            <li>
                                <button onClick={() => globalMovies.addGenreFilter(genre.id)}>{genre.name}</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}