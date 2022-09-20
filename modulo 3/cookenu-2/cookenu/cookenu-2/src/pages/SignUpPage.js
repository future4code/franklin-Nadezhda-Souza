import React, { useState } from "react";
import axios from "axios";

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
        <div>
            <h1>Tela de Cadastro</h1>
            <input placeholder="Nome" onChange={(e) => setName(e.target.value)}/>
            <input type='password' placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
            <input placeholder="e-mail" onChange={(e) => setEmail(e.target.value)}/>
            <button onClick={() => cadastrar(name, email, password)}>Cadastrar</button>
        </div>
    )
}