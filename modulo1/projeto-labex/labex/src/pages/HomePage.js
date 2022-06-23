//Para o usuário escolher entre Área Administrativa e Lista de Viagens
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from 'axios';

const HomePage__travels = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`
const HomePage__travel = styled.li`
    border: solid;
    border-width: 1px;
    margin: 1rem;
`

const HomePage__btn = styled.button`
    height: 2rem;
    margin: 1rem;
    background-color: transparent;
    border-radius: 1rem;
`;

export default function HomePage() {
    const [viagens, setViagens] = useState([]);

    const getTrips = () => {
        axios.get(   //requisição que retorna todas as viagens
            'https://us-central1-labenu-apis.cloudfunctions.net/labeX/:nadezhda-souza-franklin/trips' 
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
            <HomePage__travels>
                {viagens.map((viagem) => {
                    return (
                        <HomePage__travel key={viagem.id}>
                            <h2>{viagem.name}</h2>
                            <p> 
                                Planeta: {viagem.planet} <br/>
                                Descrição: {viagem.description} <br/>
                                Data: {viagem.date} <br/>
                                Duração (dias): {viagem.durationInDays}
                            </p>
                        </HomePage__travel>
                    )
                })}
            </HomePage__travels>
            <HomePage__btn>Inscrever-se</HomePage__btn>
        </div>
    )
}