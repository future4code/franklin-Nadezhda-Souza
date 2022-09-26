import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom'
import { useProtectedPage } from "../hooks/useProtectedPage";
import axios from "axios";

export const RecipeDetailtPage = () => {
    useProtectedPage();
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});

    const getRecipeDetails = () => {
        const headers = {
            authorization: localStorage.getItem('token'),
        }

        axios.get(`http://localhost:3003/recipe/${id}`, {headers: headers})
        .then((response) => {
            setRecipe(response.data);
        }).catch((error) => {
            console.log(error.response.data)
        })
    }

    useEffect(() => {
        getRecipeDetails();
    }, [recipe]);

    return (
        <div>
            <h1>RecipeDetailPage</h1>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <p>{recipe.createdAt}</p>
        </div>
    )
}