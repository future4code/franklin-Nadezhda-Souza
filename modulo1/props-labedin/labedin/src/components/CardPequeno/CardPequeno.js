import React from 'react';
import './CardPequeno.css';
import styled from 'styled-components';

const CardPequenoDiv = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 75px;

`
const CardPequenoImg = styled.img`
    width: 45px;
    margin-right: 10px;
    border-radius: 50%;
`

const CardPequenoH4 = styled.h4`
    margin-bottom: 15px;
    margin-right: 1rem;
`

const CardPequenoTexto = styled.div`
    display: flex;
    flex-direction:row;
    justify-items: flex-start;
`

function CardPequeno(props) {
    return (
        <CardPequenoDiv>
            <CardPequenoImg src={ props.imagem } />
            <CardPequenoTexto>
                <CardPequenoH4>{ props.nome }</CardPequenoH4>
                <p>{ props.descricao }</p>
            </CardPequenoTexto>
        </CardPequenoDiv>
    )
}

export default CardPequeno;