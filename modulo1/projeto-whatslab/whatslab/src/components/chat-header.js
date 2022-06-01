import React from 'react';
import styled from 'styled-components';

const ChatHeader = styled.div`
    background-color:GhostWhite;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60vw;
    height: 10vh;
    margin: auto;
    padding: 1%;
    box-sizing: border-box;
`

const NomeConversa = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;


    img{
        width: 3rem;
        height: 3rem;
        margin-right: 2rem;
        border-radius: 1.5rem;
    }

    p{
        display: flexbox;
        align-items: center;
        width: 30vw;
        height: 5vh;
    }
`
const TresPontinhos = styled.button`
    margin-top: 0.5rem;
    background-image: url("https://cdn-icons-png.flaticon.com/512/61/61140.png");
    background-size: contain;
    width: 1.5rem;
    height: 1.5rem;
    background-color: transparent;
    border:none;
`


export function ChatHeaderContainer(props){
    return(
        <ChatHeader>
            <NomeConversa>
                <img src={props.image}/>
                <p>{props.nomeDaConversa}</p>
            </NomeConversa>
            <div>
                <TresPontinhos/>
            </div>
        </ChatHeader>
    )
} 
 