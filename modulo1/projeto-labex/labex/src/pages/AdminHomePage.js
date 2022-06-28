//Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";
import { goToCreate } from "../routes/coordinator";

const AdminHomePageTravels = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

const AdminHomePageTravel = styled.div`
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

const AdminHomePageBtn = styled.button`
    height: 2rem;
    width: 7rem;
    margin: 1rem;
    background-color: transparent;
    border-radius: 1rem;
`;

const AdminHomePageButtons = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    margin: auto;
    margin-top: 2rem;
`

export default function AdminHomePage() {
    const [viagens, setViagens] = useState([]);
    const navigate = useNavigate();

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
            <AdminHomePageTravels>
                {viagens.map((viagem) => {
                    return (
                        <AdminHomePageTravel>
                            <li key={viagem.id}>{viagem.name}</li>
                            <button>X</button>
                        </AdminHomePageTravel>
                        
                    )   
                })}
            </AdminHomePageTravels>
            <AdminHomePageButtons>
                <AdminHomePageBtn onClick={() => {goToLastPage(navigate)}}>Voltar</AdminHomePageBtn>
                <AdminHomePageBtn onClick={()=> {goToCreate(navigate)}}>Criar Viagem</AdminHomePageBtn>
            </AdminHomePageButtons>
        </div>
    )
}