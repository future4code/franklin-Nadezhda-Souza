import React, { useState } from "react";
import axios from "axios";

export const SignUpPage = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');

    const cadastrar = (name, nickname, email) => {
        const body = {
            name: name,
            nickname: nickname,
            email: email,
        }

        axios.post(`http://localhost:3003/user`, body)
        .then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error.response.data)
        })
    };
    
    return (
        <div>
            <h1>Tela de Cadastro</h1>
            <input placeholder="Nome" onChange={(e) => setName(e.target.value)}/>
            <input placeholder="Nickname" onChange={(e) => setNickname(e.target.value)}/>
            <input placeholder="e-mail" onChange={(e) => setEmail(e.target.value)}/>
            <button onClick={() => cadastrar(name, nickname, email)}>Cadastrar</button>
        </div>
    )
}