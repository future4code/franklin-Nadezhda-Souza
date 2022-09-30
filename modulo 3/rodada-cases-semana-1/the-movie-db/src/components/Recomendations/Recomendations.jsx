import React from "react";
import './Recomendations.css'
import { useContext } from "react";
import { ContextMovies } from "../../services/context";
import { MovieCard } from "../movieCard/movieCard";
import { useEffect } from "react";

export const Recomendations = () => {
    const globalContext = useContext(ContextMovies);

    return (
        <div className="recomendations">
            <h4 className="title">Recomendações</h4>
            <ul className="recomendation__list">
                {globalContext.recomendations.map((recomendation, i) => {
                    if(i < 5){
                        return(
                            <MovieCard
                            id={recomendation.id}
                            image={recomendation.poster_path}
                            title={recomendation.title}
                            releaseDate={recomendation.release_date}
                            />
                        )
                    }
                })}
            </ul>
            
        </div>
    )
}