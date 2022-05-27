import React from 'react';
import styled from 'styled-components';

 const InputContainer = styled.div`
    margin: auto;
    width: 80vw;
    height: 20vh;
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
      width: 20vw;
    height: 5vh;
  `

  const InputMessege = styled.input`
      width: 45vw;
    height: 5vh;
  `

  const Button = styled.button`
      height: 5vh;
    width: 10vw;
  `
function sendMessage(){
    const janela = document.querySelector(".baloesDeMensagem");
    const usuario = document.querySelector("#input-user").value;
    const mensagem = document.querySelector("#input-message").value;

    if(!usuario || !mensagem){
      alert("insira uma mensagem");
    }else{
      let historico = janela.innerHTML;
      historico += `<li>${usuario} : ${mensagem}</li>`;
      janela.innerHTML = historico;
    }
/*     document.querySelector("#input-user").value = null ;
    document.querySelector("#input-message").value = null; */
  }


export function InputContainer(props){
    return(
        <InputContainer>
            <InputUser type="text" id="input-user" placeholder="usuário"/>
            <InputMessege type="text" id="input-message" placeholder="mensagem"/>
            <Button onClick={sendMessage} type="submit">Enviar</Button>
        </InputContainer>
    )
}