/* 
export function ChatWindow(props){
    return(
        <ChatWindowDiv>
            <BaloesDeMensagem>
            </BaloesDeMensagem>
        </ChatWindowDiv>
    )
} */


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

/* export function InputContainer(props){
    return(
        <div className='input-container'>
            <input type="text" id="input-user" placeholder="usuário"/>
            <input type="text" id="input-message" placeholder="mensagem"/>
            <button onClick={sendMessage} type="submit">Enviar</button>
        </div>
    )
} */

/*     else{
      let historico = janela.innerHTML;
      historico += `<li>${usuario} : ${mensagem}</li>`;
      janela.innerHTML = historico;
    } */


    /* export function ChatWindow(props){
    return(
        <div className='chat-window'>
            <ul  className="baloesDeMensagem">
            </ul>
        </div>
    )
} 
 */



/*----------input container --------------*/
/* function sendMessage(){
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
/*   }

  export function InputContainer(props){
    return(
        <InputContainerDiv>
          <InputUser type="text" id="input-user" placeholder="usuário"/>
          <InputMessege type="text" id="input-message" placeholder="mensagem"/>
          <Button onClick={sendMessage} type="submit"></Button>
        </InputContainerDiv>
    )
  } */ 