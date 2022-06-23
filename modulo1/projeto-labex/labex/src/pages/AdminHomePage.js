//Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from 'axios';

const AdminHomePage__travels = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

const AdminHomePage__travel = styled.div`
    margin: auto;
    margin-bottom: 2rem;
    width: 50%;
    border: solid;
    border-width: 1px;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
    padding: 1rem;

`

const AdminHomePage__btn = styled.button`
    height: 2rem;
    width: 7rem;
    margin: 1rem;
    background-color: transparent;
    border-radius: 1rem;
`;

const AdminHomePage__buttons = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    margin: auto;
    margin-top: 2rem;
`

export default function AdminHomePage() {
    const [viagens, setViagens] = useState([]);

    const getTrips = () => {
        axios.get(   //requisição que retorna todas as viagens
            'https://us-central1-labenu-apis.cloudfunctions.net/labeX/:nadezhda-souza-franklin/trips' //alterar para o meu nome depois
        ).then((response) => {
            setViagens(response.data.trips)
        }).catch((error) => {
            console.log(error.response.data)
        });
    }
    
    useEffect(getTrips, []);

    return(
        <div>
            <h1>Lista de Viagens</h1>
            <AdminHomePage__travels>
                {viagens.map((viagem) => {
                    return (
                        <AdminHomePage__travel>
                            <li key={viagem.id}>{viagem.name}</li>
                            <button>X</button>
                        </AdminHomePage__travel>
                        
                    )   
                })}
            </AdminHomePage__travels>
            <AdminHomePage__buttons>
                <AdminHomePage__btn>Voltar</AdminHomePage__btn>
                <AdminHomePage__btn>Criar Viagem</AdminHomePage__btn>
            </AdminHomePage__buttons>
        </div>
    )
}