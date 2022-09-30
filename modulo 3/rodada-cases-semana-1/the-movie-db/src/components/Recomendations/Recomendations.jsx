import React from "react";
import './Recomendations.css'
import { useContext } from "react";
import { ContextMovies } from "../../services/context";

export const Recomendations = () => {
    const globalContext = useContext(ContextMovies);

    return (
        <div className="recomendations">
            <h4 className="title">Recomendações</h4>
        </div>
    )
}