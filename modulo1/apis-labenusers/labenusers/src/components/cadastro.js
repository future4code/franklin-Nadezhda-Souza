import React, {useState} from "react";
import axios from "axios";
import TelaLista from "./lista";

export function TelaCadastro(){
    const [nomeValue, setNomeValue] = useState('');
    const [emailValue, setEmailValue] = useState('');

    const CriaUsuario = () => {
        const body = {
            "name": nomeValue,
            "email": emailValue
        };

        axios.post(
            'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
            body,
            {
                headers: {
                    Authorization: 'nadezhda-souza-franklin'
                }
            }). then((response) => {
                console.log(response);
                alert('Usuário criado com sucesso!');
                setNomeValue('');
                /* PegaUsuarios(); */
            }).catch((err) => {
                console.log(err);
                alert(err);
            });
    };

    return(
        <div>
            <input 
            placeholder="nome"
            value={nomeValue}
            onChange={(e) => {setNomeValue(e.target.value)}}
            ></input>
            <input 
            placeholder="email"
            value={emailValue}
            onChange={(e) => {setEmailValue(e.target.value)}}></input>
            <button onClick={CriaUsuario}>Criar Usuário</button>
        </div>
    )
}