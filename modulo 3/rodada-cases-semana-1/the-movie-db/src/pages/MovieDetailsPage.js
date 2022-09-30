import React from "react";
import { Details } from "../components/Details/Details.jsx";
import { Trailer } from "../components/Trailer/Trailer.jsx";
import { Cast } from "../components/Cast/Cast.jsx";
import { Recomendations } from "../components/Recomendations/Recomendations.jsx";

export const MovieDetailsPage = () => {

    return (
        <div>
            <Details/>
            <Cast/>
            <Trailer/> 
            <Recomendations/>
        </div>
    )
}