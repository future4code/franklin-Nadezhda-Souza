import React from 'react';
import styled from 'styled-components';

 const InputContainerDiv = styled.div`
    margin: auto;
    width: 70vw;
    height: 10vh;
    border-color: black;
    border-style: solid;
    border-width: 1px;
    text-align: left;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    padding-top: 7.5vh;    
 `

  const InputUser = styled.input`
    width: 15vw;
    height: 5vh;
    box-sizing: border-box;
  `

  const InputMessege = styled.input`
    width: 40vw;
    height: 5vh;
    box-sizing: border-box;
  `
 
  const Button = styled.button`
      height: 5vh;
      min-width: 5vh; 
      border: none;
      background-image: url("https://icons.veryicon.com/png/o/miscellaneous/ui-basic-linear-icon/send-message-2-2.png");  
      background-size: contain;
      background-color: transparent;
      `

  function sendMessage(){
    const janela = document.querySelector(".baloesDeMensagem");
    const usuario = document.querySelector("#input-user").value;
    const mensagem = document.querySelector("#input-message").value;
    const nome = usuario.toLowerCase();

    if(!usuario || !mensagem){
      alert("insira uma mensagem");
    } else if( nome === "eu" ){
      let historico = janela.innerHTML;
      historico += `<li class='eu'>${mensagem}</li>`;
      janela.innerHTML = historico;
    } else {
      let historico = janela.innerHTML;
      historico += `<div class='fulano'><li>${usuario}</li> <li> ${mensagem}</li></div>`;
      janela.innerHTML = historico;
    }

    /*document.querySelector("#input-user").value = null ;
    document.querySelector("#input-message").value = null; */
  }

  export function InputContainer(props){
    return(
        <InputContainerDiv>
          <InputUser type="text" id="input-user" placeholder="usuário"/>
          <InputMessege type="text" id="input-message" placeholder="mensagem"/>
          <Button onClick={sendMessage} type="submit"></Button>
        </InputContainerDiv>
    )
  }