import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { useProtectedPage } from "../hooks/useProtectedPage";
import axios from "axios";

export const RecipesListPage = () => {
    useProtectedPage();
    const [recipes, setRecipes] = useState([]);

    const getRecipesList = () => {
        axios.get(`http://localhost:3003/recipes`)
        .then((response) => {
            setRecipes(response.data);
        }).catch((error) => {
            console.log(error.response.data)
        })
    }
    
    useEffect(() => {
        getRecipesList();
    }, [])

    return (
        <div>
            <h1>RecipesListPage</h1>
            <ul>
                {recipes.map((recipe) => {
                    return (
                        <li key={recipe.id}>
                            <h3>{recipe.title}</h3>
                            <p>{recipe.description}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
        
    )
}