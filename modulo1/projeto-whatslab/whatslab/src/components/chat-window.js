import React from 'react';
import styled from 'styled-components';

//---------------------PROBLEMAS COM STYLED COMPONENTS------------------------//

const JanelaDoChat = styled.div `
    margin: auto;
    width: 70vw;
    height: 90vh;
    border-color: black;
    border-style: solid;
    border-width: 1px;
    padding: 5vw;
    text-align: left;
    box-sizing: border-box;
    background-image: url("https://i.pinimg.com/564x/15/1f/a5/151fa57376e2212b8e7a642ed631a25e.jpg");
    background-size: cover;
    overflow: auto;
`

const BaloesDeMensagem = styled.ul`
    display: inline-block;
    font-size: 12px;

    .eu{
        list-style: none;
        width: 40vw;
        margin: 1rem;
        background-color: #DDF7C8;
    } 

    .fulano{
        list-style: none;
        width: 40vw;
        margin: 1rem;
        background-color: #ffffff;
    }

` 


export function ChatWindow(){
    return(
        <JanelaDoChat>
            <BaloesDeMensagem className='baloesDeMensagem'>
            </BaloesDeMensagem>
        </JanelaDoChat>
    )
} 
 