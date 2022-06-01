import React from 'react';
import styled from 'styled-components';

const JanelaDoChat = styled.div `
    margin: auto;
    width: 60vw;
    height: 80vh;
    text-align: left;
    box-sizing: border-box;
    background-image: url("https://i.pinimg.com/564x/15/1f/a5/151fa57376e2212b8e7a642ed631a25e.jpg");
    background-size: cover;
    overflow: auto;
`

const BaloesDeMensagem = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 12px;

    .eu{
        list-style: none;
        width: 40vw;
        min-height: 9vh;
        margin: 0.5rem;
        background-color: #DDF7C8;
        padding: 1rem;
        box-sizing: border-box;
        border-radius: 0.5rem;
        margin-left: 10vw;
    } 

    .fulano{
        list-style: none;
        width: 40vw;
        min-height: 4vh;
        margin: 0.5rem;
        background-color: #ffffff;
        padding: 1rem;
        box-sizing: border-box;
        border-radius: 0.5rem;
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
 