import React from "react";
import { Details } from "../../components/Details/Details.jsx";
import { Trailer } from "../../components/Trailer/Trailer.jsx";
import { Cast } from "../../components/Cast/Cast.jsx";
import { Recomendations } from "../../components/Recomendations/Recomendations.jsx";
import './MovieDetailsPage.css'
import { useContext, useEffect } from "react";
import { ContextMovies } from "../../services/context.js";
import { useParams } from "react-router";

export const MovieDetailsPage = () => {
    const globalContext = useContext(ContextMovies);
    const {id} = useParams();

    useEffect(() => {
        globalContext.setId(id);
        globalContext.getTrailer();
        globalContext.getRecomendations();
        globalContext.getCredits();
        window.scrollTo(0, 0);
    }, [globalContext.id, globalContext.buttonSelected2])

    return (
        <div className="movieDetailsPage">
            <Details/>
            <Cast/>
            <Trailer/> 
            <Recomendations/>
        </div>
    )
}