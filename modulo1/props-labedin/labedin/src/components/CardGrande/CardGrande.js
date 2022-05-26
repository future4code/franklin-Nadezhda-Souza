import React from 'react';
import './CardGrande.css'
import styled from 'styled-components';

const CardGrandeDiv = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;

`
const CardGrabdeImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const CardGrandeH4 = styled.h4`
    margin-bottom: 15px;
`

const CardGrandeTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <CardGrandeDiv>
            <CardGrabdeImg src={ props.imagem } />
            <CardGrandeTexto>
                <CardGrandeH4>{ props.nome }</CardGrandeH4>
                <p>{ props.descricao }</p>
            </CardGrandeTexto>
        </CardGrandeDiv>
    )
}

export default CardGrande;