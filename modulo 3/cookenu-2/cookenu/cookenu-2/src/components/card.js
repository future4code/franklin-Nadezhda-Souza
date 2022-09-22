import React from "react";
import styled from 'styled-components'

const CardContainer = styled.div`
    text-align: center;
    border-style: solid;
    border-width: 1px;
    background-color: #00a9d4;
    color: white;
    width: 90%;
    margin: 1rem;
    border-radius: 1rem;
    padding: 2rem;
    box-sizing: border-box;

    h3{
        max-width: 15ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0 auto 1rem auto;
    }

    p {
        max-width: 15ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: auto;
    }
`

export const Card = ({title, description}) => {
    return (
        <CardContainer>
            <h3>Titulo: {title}</h3>
            <p>Descrição: {description}</p>
        </CardContainer>
    )
}