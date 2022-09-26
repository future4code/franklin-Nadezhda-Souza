import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from  'styled-components'
import { goToRecipesListPage, goToSignup } from "../routes/coordinator";
import { useUnprotectedPage } from "../hooks/useUnprotectedPage";

const ImgDiv = styled.div`
    margin: 0;
    img{
        width: 150px;
    }
`

const H1 = styled.h1`
    margin: 0;
`

const LoginContainer = styled.div`
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
/*     background-image: linear-gradient(101deg, #00d3d4, #00a9d4); */
    border-color: #1c3166;
    color: white;
    border-style: solid;
    box-shadow: 0px 2px #1c3166;
    border-width: 1px;
    margin-top: 1rem;
`

const Link = styled.a`
    color: #00a9d4;
`


export const LoginPage = () => {
    useUnprotectedPage();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate(); 

    const login = (e, email, password) => {
        e.preventDefault();

        const body = {
            password: password,
            email: email,
        }

       axios.post(`http://localhost:3003/users/login`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            goToRecipesListPage(navigate);
        }).catch((error) => {
            console.log(error.response.data)
        })
        HTMLFormElement.reset(); 
    };

    return (
        <LoginContainer>
            <ImgDiv>
                <img src="https://st4.depositphotos.com/11574170/41085/v/450/depositphotos_410855094-stock-illustration-cook-circle-shadow-flat-icon.jpg"/>
            </ImgDiv>
            <H1>Login</H1>
            <FormContainer onSubmit={(e) => login(e, email, password)}>
                <InputComponent placeholder="e-mail" onChange={(e) => setEmail(e.target.value)}/>
                <InputComponent type='password' placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
                <Button type="submit">Login</Button>
                <p>Ainda não possui cadastro? <Link onClick={() => goToSignup(navigate)}>Cadastre-se aqui</Link></p>
            </FormContainer>
        </LoginContainer>
    )
}