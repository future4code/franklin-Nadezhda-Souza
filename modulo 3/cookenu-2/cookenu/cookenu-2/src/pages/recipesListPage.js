import React, { useContext, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { useProtectedPage } from "../hooks/useProtectedPage";
import axios from "axios";
import { ContextRecipes } from "../services/context";
import { goToRecipeDetailPage } from "../routes/coordinator";

export const RecipesListPage = () => {
    useProtectedPage();
    const navigate = useNavigate();
    const recipes = useContext(ContextRecipes)

    const getRecipesList = () => {
        const headers = {
            authorization: localStorage.getItem('token'),
        }

        axios.get(`http://localhost:3003/recipes`, {headers: headers})
        .then((response) => {
            recipes.setter(response.data);
        }).catch((error) => {
            console.log(error.response.data)
        })
    }
    
    useEffect(() => {
        getRecipesList();
    }, [recipes.state])

    return (
        <div>
            <h1>RecipesListPage</h1>
            <ul>
                {recipes.state.map((recipe) => {
                    return (
                        <li key={recipe.id} onClick={() => goToRecipeDetailPage(navigate, recipe.id)}>
                            <h3>{recipe.title}</h3>
                            <p>{recipe.description}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
        
    )
}