import './App.css';
import { ChatHeaderContainer } from './components/chat-header';
import React, {useState} from 'react';
import styled from 'styled-components';

/*-------------------------STYLED COMPONENTS--------------------------*/
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
const JanelaDoChat = styled.div `
    margin: auto;
    width: 60vw;
    height: 80vh;
    text-align: left;
    box-sizing: border-box;
    background-image: url("https://www.securynet.com.br/wp-content/uploads/2021/07/WhatsApp.png");
    background-size: cover;
    overflow: auto;
`

const BaloesDeMensagem = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    padding: 1rem;
    margin: 0;

    .triangulo-fulano{
      width: 0; 
      height: 0; 
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-top: 15px solid #ffffff;
      position: relative;
      left: -30px;
      bottom: -15px;
    }

    .triangulo-eu{
      width: 0; 
      height: 0; 
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-top: 15px solid #DDF7C8;
      position: relative;
      left: 470px;
      bottom: -15px;
    }

    .eu{
      list-style: none;
      width: 500px;
      min-height: 50px;
      margin: 0.5rem;
      background-color: #DDF7C8;
      padding: 1rem;
      padding-top: 0;
      box-sizing: border-box;
      border-radius: 0.5rem;
      align-self: flex-end;
      word-wrap: break-word;
      line-height: 1.5;
      font-weight: 450;
      box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
      font-size:0.9rem;
    } 

    .fulano{
      list-style: none;
      width: 500px;
      min-height: 25px;
      margin: 0.5rem;
      background-color: #ffffff;
      padding: 1rem;
      padding-top: 0;
      box-sizing: border-box;
      border-radius: 1rem;
      align-self: flex-start;
      word-wrap: break-word;
      line-height: 1.5;
      font-weight: 450;
      box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
      font-size:0.9rem;
    }
    .nome{
      color: #9AAC8C;
    }

` 
/*-------------------------------------FUNCTION APP--------------------------------------*/

 function App() {
    const [valorInputUsuario, setValorInputUsuario] = useState("");
    const [valorInputMensagem, setValorInputMensagem] = useState("");
    const [historico, setHistorico] = useState([]);
      
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
        setValorInputMensagem('');
        setValorInputUsuario('');
      };
    };
  
    const onChangeInputUsuario = (event) => {
      setValorInputUsuario(event.target.value);
    };
  
    const onChangeInputMensagem = (event) => {
      setValorInputMensagem(event.target.value);
    };
  
    const listaDeMensagens = historico.map((message) => {
      const usuario = message.nome.toLowerCase();
      if( usuario === "eu" ){
        return(
        <div class='eu'>
          <span class='triangulo-eu'/>
          <li >{message.mensagem}</li>
        </div>
        )
      } else {
        return(
        <div class='fulano'>
          <span class='triangulo-fulano'/>
          <li class='nome'><b>{message.nome}:</b></li> 
          <li>{message.mensagem}</li>
        </div>
        )
      }
    });

  return (
    <div className="App">
      <ChatHeaderContainer 
      image="https://d1fdloi71mui9q.cloudfront.net/b6TXwI3TguktiUYKx5cw_p0XoT5v9gMkTJLeB" 
      nomeDaConversa={'WhatsLab'}/>

      <JanelaDoChat>
        <BaloesDeMensagem className='baloesDeMensagem'>
          {listaDeMensagens}
        </BaloesDeMensagem>
      </JanelaDoChat>

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
    </div>
  );
}

export default App; 

















/*-------------------------------Antes da edição-------------------------------------*/ 
/* function App() {
  return (
    <div className="App">
      <ChatHeaderContainer 
      image="https://d1fdloi71mui9q.cloudfront.net/b6TXwI3TguktiUYKx5cw_p0XoT5v9gMkTJLeB" 
      nomeDaConversa={'WhatsLab'}/>
      <ChatWindow/>
      <InputContainer/>
    </div>
  );
}

export default App; */
