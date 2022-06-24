import React, {useState} from "react";
import { useEffect } from "react";
import axios from "axios";

export function TelaLista(){
    const [listaDeUsuarios, setListaDeUsuarios] = useState();

    const PegaUsuarios = () => {
        axios.get(
            'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
            {
                headers: {
                    Authorization: 'nadezhda-souza-franklin'
                }
            }
        ).then((resposta) => {
            setListaDeUsuarios(resposta.data.result.list)
        }).catch((erro) => { console.log(erro.code)})
    };

    useEffect(PegaUsuarios, []);

    return(
        <div>
            {listaDeUsuarios.map((usuario) => {
                return (<li key={usuario.id}>{usuario.name}</li>)
            })};
        </div>
    );
}
