import React from "react";
import {useNavigate} from 'react-router-dom'
import { useProtectedPage } from "../hooks/useProtectedPage";

export const RecipeDetailtPage = () => {
    useProtectedPage();
    return (
        <div>
            <h1>RecipeDetailPage</h1>
        </div>
    )
}