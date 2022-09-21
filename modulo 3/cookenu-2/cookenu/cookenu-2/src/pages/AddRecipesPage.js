import React from "react";
import {useNavigate} from 'react-router-dom'
import { useProtectedPage } from "../hooks/useProtectedPage";

export const AddRecipesPage = () => {
    useProtectedPage();
    return (
        <div>
            <h1>AddRecipesPage</h1>
        </div>
    )
}