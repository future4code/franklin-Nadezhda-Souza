import React from "react";
import {useNavigate} from 'react-router-dom'
import { useProtectedPage } from "../hooks/useProtectedPage";

export const RecipesListPage = () => {
    useProtectedPage();
    return (
        <div>
            <h1>RecipesListPage</h1>
        </div>
    )
}