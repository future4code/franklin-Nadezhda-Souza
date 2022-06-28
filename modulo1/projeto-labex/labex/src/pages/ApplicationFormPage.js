//Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
import styled from "styled-components" 
import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { goToLastPage } from "../routes/coordinator"

const ApplicationForm = styled.div`
    text-align: center;
    margin: auto;
`

const ApplicationFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    align-items: center;
`

const ApplicationFormInput = styled.input`
    width: 100%;
    height: 2rem;
    margin: 1rem 0;
    border-radius: 1rem;
    text-align: center;
    box-sizing: border-box;
`
const ApplicationFormButtons = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    margin: auto;
    margin-top: 2rem;
`

const ApplicationFormBtn = styled.button`
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
    const navigate = useNavigate();

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
            alert('Erro ao enviar! :(');
        });
    }

    return(
        <ApplicationForm>
            <h1>Inscreva-se</h1>
            <ApplicationFormContainer>
                <ApplicationFormInput 
                value={nameValue} 
                onChange={(e) => {setNameValue(e.target.value)}}
                placeholder="Nome"
                />
                <ApplicationFormInput 
                value={ageValue} 
                onChange={(e) => {setAgeValue(e.target.value)}}
                placeholder="Idade
                "/>
                <ApplicationFormInput 
                value={messageValue} 
                onChange={(e) => {setMessageValue(e.target.value)}}
                placeholder="Mensagem"
                />
                <ApplicationFormInput 
                value={professionValue} 
                onChange={(e) => {setProfessionValue(e.target.value)}}
                placeholder="Profissão"
                />
                <ApplicationFormInput 
                value={countryValue}
                onChange={(e) => {setCountryValue(e.target.value)}}
                placeholder="País"
                />
            </ApplicationFormContainer>
            
            <ApplicationFormButtons>
                <ApplicationFormBtn onClick={() => goToLastPage(navigate)}>Voltar</ApplicationFormBtn>
                <ApplicationFormBtn onClick={applyToTrip}>Enviar</ApplicationFormBtn>
            </ApplicationFormButtons>
        </ApplicationForm>
    )
}