import React from "react";
import { Details } from "../../components/Details/Details.jsx";
import { Trailer } from "../../components/Trailer/Trailer.jsx";
import { Cast } from "../../components/Cast/Cast.jsx";
import { Recomendations } from "../../components/Recomendations/Recomendations.jsx";
import './MovieDetailsPage.css'

export const MovieDetailsPage = () => {

    return (
        <div className="movieDetailsPage">
            <Details/>
            <Cast/>
            <Trailer/> 
            <Recomendations/>
        </div>
    )
}