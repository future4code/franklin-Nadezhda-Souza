import React from "react";
import './Cast.css'
import { useContext } from "react";
import { ContextMovies } from "../../services/context";

export const Cast = () => {
    const globalContext = useContext(ContextMovies);

    return (
        <div className="cast">
            <h4 className="title">Elenco original</h4>
        </div>
    )
}