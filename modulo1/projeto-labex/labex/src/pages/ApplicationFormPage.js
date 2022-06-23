//Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
import styled from "styled-components" 
import axios from "axios"
import { useState } from "react"

const ApplicationForm = styled.div`
    text-align: center;
    margin: auto;
`

const ApplicationForm__container = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    align-items: center;
`

const ApplicationForm__input = styled.input`
    width: 100%;
    height: 2rem;
    margin: 1rem 0;
    border-radius: 1rem;
    text-align: center;
    box-sizing: border-box;
`
const ApplicationForm__buttons = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    margin: auto;
    margin-top: 2rem;
`

const ApplicationForm__btn = styled.button`
    background-color: transparent;
    height: 2rem;
    width: 7rem;
    border-radius: 1rem;
`


export default function ApplicationFormPage (){
    const [nameValue, setNameValue] = useState('');
    const [ageValue, setAgeValue] = useState('');
    const [messageValue, setMessageValue] = useState('');
    const [professionValue, setProfessionValue] = useState('');
    const [countryValue, setCountryValue] = useState('');

    const applyToTrip = () => {
        const body = {
            "name": nameValue,
            "age": ageValue,
            "applicationText": messageValue,
            "profession": professionValue,
            "country": countryValue,
        }
        
        axios.post( 
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/:id/apply', body,
        ).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error.response.data)
        });
    }

    return(
        <ApplicationForm>
            <h1>Inscreva-se</h1>
            <ApplicationForm__container>
                <ApplicationForm__input 
                value={nameValue} 
                onChange={(e) => {setNameValue(e.target.value)}}
                placeholder="Nome"
                />
                <ApplicationForm__input 
                value={ageValue} 
                onChange={(e) => {setAgeValue(e.target.value)}}
                placeholder="Idade
                "/>
                <ApplicationForm__input 
                value={messageValue} 
                onChange={(e) => {setMessageValue(e.target.value)}}
                placeholder="Mensagem"
                />
                <ApplicationForm__input 
                value={professionValue} 
                onChange={(e) => {setProfessionValue(e.target.value)}}
                placeholder="Profissão"
                />
                <ApplicationForm__input 
                value={countryValue}
                onChange={(e) => {setCountryValue(e.target.value)}}
                placeholder="País"
                />
            </ApplicationForm__container>
            
            <ApplicationForm__buttons>
                <ApplicationForm__btn>Voltar</ApplicationForm__btn>
                <ApplicationForm__btn onClick={applyToTrip}>Enviar</ApplicationForm__btn>
            </ApplicationForm__buttons>
        </ApplicationForm>
    )
}