import React, { useContext, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { useProtectedPage } from "../hooks/useProtectedPage";
import axios from "axios";
import { ContextRecipes } from "../services/context";
import { goToRecipeDetailPage } from "../routes/coordinator";
import { Card } from "../components/card";
import styled from 'styled-components'

const RecipesListPageS = styled.div`
    text-align: center;
`

const RecipesListComponent = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: auto;
    list-style: none;
    box-sizing: border-box;
    padding: 0;
    text-align: center;
`

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
        <RecipesListPageS>
            <h1>Lista de Receitas</h1>
            <RecipesListComponent>
                {recipes.state.map((recipe) => {
                    return (
                        <li key={recipe.id} onClick={() => goToRecipeDetailPage(navigate, recipe.id)}>
                            <Card title={recipe.title} description={recipe.description}/>
                        </li>
                    )
                })}
            </RecipesListComponent>
        </RecipesListPageS>
        
    )
}