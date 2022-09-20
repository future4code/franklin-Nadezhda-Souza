import React, { useState } from "react";
import axios from "axios";
import styled from  'styled-components'

const SignUPContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    max-width: 600px;
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

export const SignUpPage = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const cadastrar = (name, email, password) => {
        const body = {
            name: name,
            password: password,
            email: email,
        }

  /*       axios.post(`http://localhost:3003/user`, body)
        .then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error.response.data)
        }) */
        console.log('cadastrado', name, password, email)
    };

    return (
        <SignUPContainer>
            <h1>Tela de Cadastro</h1>
            <InputComponent placeholder="Nome" onChange={(e) => setName(e.target.value)}/>
            <InputComponent type='password' placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
            <InputComponent placeholder="e-mail" onChange={(e) => setEmail(e.target.value)}/>
            <Button onClick={() => cadastrar(name, email, password)}>Cadastrar</Button>
        </SignUPContainer>
    )
}