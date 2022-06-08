/* import React, {useState} from 'react';
import styled from 'styled-components';

const InputContainerDiv = styled.div`
margin: auto;
width: 60vw;
height: 10vh;
box-sizing: border-box;
display: flex;
justify-content: space-around;  
display: flex;
align-items:center; 
background-color: GhostWhite;
`

const InputUser = styled.input`
width: 15vw;
height: 5vh;
box-sizing: border-box;
border-radius: 0.5rem;
border: none;
text-align: center;
background-color: white;
`

const InputMessege = styled.input`
width: 40vw;
height: 5vh;
box-sizing: border-box;
border-radius: 0.5rem;
border: none;
text-align: center;
background-color: white;
`

const Button = styled.button`
height: 5vh;
min-width: 5vh; 
border: none;
background-image: url("https://icons.veryicon.com/png/o/miscellaneous/ui-basic-linear-icon/send-message-2-2.png");  
background-size: contain;
background-color: transparent;
`

export const InputContainer = () =>{
  const [valorInputUsuario, setValorInputUsuario] = useState("");
  const [valorInputMensagem, setValorInputMensagem] = useState("");

  const [historico, setHistorico] = useState([null]);
    
  const AdicionaMensagemAoHistorico = () => {
    if(!valorInputUsuario || !valorInputMensagem){
      alert("insira um username e uma mensagem");
    } else {
      const novaMensagem = {
        nome: valorInputUsuario,
        mensagem: valorInputMensagem,
      }
      const novoHistorico = [...historico, novaMensagem];
      setHistorico(novoHistorico);
      console.log(novoHistorico);
    };
  };

  const onChangeInputUsuario = (event) => {
    setValorInputUsuario(event.target.value);
  };

  const onChangeInputMensagem = (event) => {
    setValorInputMensagem(event.target.value);
  };

  const listaDeMensagens = historico.map((mensagem) => {
    const usuario = valorInputUsuario.toLowerCase();
    if( usuario === "eu" ){
      return(<li class='eu'>${valorInputMensagem}</li>)
    } else {
      return(
      <div class='fulano'>
        <li>${valorInputUsuario}</li> 
        <li>{valorInputMensagem}</li>
      </div>
      )
    }
  });

  return(
        <InputContainerDiv>
          <InputUser 
          value = {valorInputUsuario}
          onChange = {onChangeInputUsuario}
          placeholder="usuário"/>
          <InputMessege
          value = {valorInputMensagem}
          onChange = {onChangeInputMensagem}
          placeholder="mensagem"/>
          <Button onClick={AdicionaMensagemAoHistorico}></Button>
        </InputContainerDiv>
  );
};
 */




  