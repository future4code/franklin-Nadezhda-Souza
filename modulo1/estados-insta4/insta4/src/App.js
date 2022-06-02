import React, { useState } from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  align-items: center;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  justify-content: space-around;
  margin: 10px;
  padding:1rem;
  box-sizing: border-box;

  input{
    width: 200px;
    height: 30px;
    box-sizing: border-box;
    text-align: center;
  }
  button{
    width: 80px;
    height: 20px;
    box-sizing: border-box;
    background-color: white;
    margin-top: 10px;
  }
`

function App() {
    const [posts, setposts] = useState([
          {
            nome:"paulinha",
            foto:"https://picsum.photos/50/50",
            fotoDoPost:"https://picsum.photos/200/150",
          },
          {
            nome:"João",
            foto:"https://picsum.photos/49/50",
            fotoDoPost:"https://picsum.photos/201/150",
          },
          {
            nome:"Carlos",
            foto:"https://picsum.photos/51/50",
            fotoDoPost:"https://picsum.photos/202/150",
          }
        ]);
      
      const listaDePosts = posts.map((post) => {
        return(
            <Post 
                nomeUsuario={post.nome}
                fotoUsuario={post.foto}
                fotoPost={post.fotoDoPost} 
            />
        );
    })

  const [valorInputNome, setvalorInputNome] = useState("");
  const [valorInputFotoPerfil, setvalorInputFotoPerfil] = useState("");
  const [valorInputPost, setvalorInputPost] = useState("");

  const adicionaPost = () => {
    const novoPost = {
      nome: valorInputNome,
      foto: valorInputFotoPerfil,
      fotoDoPost: valorInputPost
    };
    const novosPosts = [...posts, novoPost];
    console.log(novosPosts);
    setposts(novosPosts);     //problema bem aqui
  };

  const onChangeInputNome = (event) => {
    setvalorInputNome(event.target.value);
  };

  const onChangeInputFotoPerfil = (event) => {
    setvalorInputFotoPerfil(event.target.value);
  };

  const onChangeInputPost = (event) => {
    setvalorInputPost(event.target.value);
  };


return(
  <MainContainer>
    <Formulario>
      <h1>Insta4</h1>
      <p>Crie um novo post:</p>
      <input
        value={valorInputNome}
        onChange={onChangeInputNome}
        placeholder={"Seu nome"}
      />
      <input
        value={valorInputFotoPerfil}
        onChange={onChangeInputFotoPerfil}
        placeholder={"Link da foto de perfil"}
      />
      <input
        value={valorInputPost}
        onChange={onChangeInputPost}
        placeholder={"Link da imagem do post"}
      />
      <button onClick={adicionaPost}>Adicionar</button>
    </Formulario>
    <div>{listaDePosts}</div>
  </MainContainer>
)
}


export default App;
