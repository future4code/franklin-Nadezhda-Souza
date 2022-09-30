import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ContextMovies } from "../../services/context";
import './Trailer.css'

export const Trailer = () => {
    const globalMovies = useContext(ContextMovies);

    useEffect(() => {
        globalMovies.getTrailer();
        console.log(globalMovies.trailer)
    }, [globalMovies.trailer])

    return (
        <div className="trailer">
            <h3 className="trailer__title">Trailer</h3>
            <div className="video">
                <iframe width='100%' height='100%' src={`https://www.youtube.com/embed/${globalMovies.trailer}`}/>
            </div>
        </div>
    )
}