import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from  'styled-components'
import { goToLogin, goToRecipesListPage } from "../routes/coordinator";
import { useProtectedPage } from "../hooks/useProtectedPage";

const H1 = styled.h1`
    margin: 0;
`

const AddRecipeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    max-width: 400px;
    justify-content: center;
    margin: auto;
    text-align: center;
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    margin: auto;
    text-align: center;
`

const InputComponent = styled.input`
    border-radius: 1rem;
    min-height: 2rem;
    background-color: white;
    border-color: #1c3166;
    color: #1c3166;
    border-style: solid;
    border-width: 1px;
    margin-top: 1rem;
    text-align: center;
` 
const Button = styled.button`
    border-radius: 1rem;
    min-height: 2rem;
    min-width: 5rem;
    background-color: #00a9d4;
    border-color: #1c3166;
    color: white;
    border-style: solid;
    box-shadow: 0px 2px #1c3166;
    border-width: 1px;
    margin-top: 1rem;
`

export const AddRecipesPage = () => {
    useProtectedPage();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [creatorUserId, setCreatorUserId] = useState('');

    const login = (e, title, description, creatorUserId) => {
        e.preventDefault();

        const headers = {
            authorization: localStorage.getItem('token'),
        }

        const body = {
            title: title,
            description: description,
            creatorUserId: "45f25b41-3606-4989-848e-bd856fa3f8f3" //lembrar de alterar depois
        }

       axios.post(`http://localhost:3003/recipe`, body, {headers: headers})
        .then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error.response.data)
        }) 
        HTMLFormElement.reset();
    };

    return (
        <AddRecipeContainer>
            <H1>Nova receita</H1>
            <FormContainer onSubmit={(e) => login(e, title, description)}>
                <InputComponent placeholder="Titulo" onChange={(e) => setTitle(e.target.value)}/>
                <InputComponent placeholder="Descrição" onChange={(e) => setDescription(e.target.value)}/>
                <Button type='submit'>Adicionar receita</Button>
            </FormContainer>  
        </AddRecipeContainer>
    )
}