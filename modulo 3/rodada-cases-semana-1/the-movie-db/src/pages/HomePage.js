import React from "react";
import { Menu } from "../components/Menu/menu";
import { MoviesList } from "../components/MovieList/movieList";

export const HomePage = () => {
    /* const navigate = useNavigate(); */
    return (
        <div>
            <Menu/>
            <MoviesList/>
        </div>
    )
}