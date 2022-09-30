import React from "react";
import './Cast.css'
import { useContext } from "react";
import { ContextMovies } from "../../services/context";
import { CastCard } from "../CastCard/CastCard";

export const Cast = () => {
    const globalContext = useContext(ContextMovies);

    return (
        <div className="cast">
            <h4 className="title">Elenco original</h4>
            {/* <ul className="cast__list">
                { globalContext.credits.cast.map((actor) => {
                return  <CastCard
                        id={actor.id}
                        image={actor.profile_path}
                        name={actor.name}
                        character={actor.character}
                    />
                })}
            </ul> */}
            
        </div>
    )
}