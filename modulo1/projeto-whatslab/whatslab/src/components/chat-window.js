import React from 'react';
import styled from 'styled-components';

const chatWindow = styled.div`
    margin: auto;
    width: 80vw;
    height: 80vh;
    border-color: black;
    border-style: solid;
    border-width: 1px;
    padding: 5vw;
    text-align: left;
    box-sizing: border-box;
    background-image: url(images/wallpaper.jpg);
    overflow: auto;
`

const BaloesDeMensagem = styled.ul`
    display: inline-block;
    background-color: white;
    font-size: 12px;
`

export function ChatWindow(props){
    return(
        <ChatWindow>
            <BaloesDeMensagem>
            </BaloesDeMensagem>
        </ChatWindow>
    )
}

/* export function BalaoDeMensagemContainer(props){
    return(
        <ul className="balaoDeMensagem">
        </ul>
    )
} */

/* export function BalaoDeMensagem(props){
    return(
        <li>
            <p>{props.user}</p>
            <p>{props.message}</p>
        </li>
    )
} */