//Formulário para o administrador criar uma nova viagem
import styled from "styled-components" 

const CreateTrip = styled.div`
    text-align: center;
    margin: auto;
`

const CreateTrip__container = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    align-items: center;
`

const CreateTrip__input = styled.input`
    width: 100%;
    height: 2rem;
    margin: 1rem 0;
    border-radius: 1rem;
    text-align: center;
    box-sizing: border-box;
`
const CreateTrip__buttons = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    margin: auto;
    margin-top: 2rem;
`

const CreateTrip__btn = styled.button`
    background-color: transparent;
    height: 2rem;
    width: 7rem;
    border-radius: 1rem;
`


export default function CreateTripPage (){
    return(
        <CreateTrip>
            <h1>Criar Viagem</h1>
            <CreateTrip__container>
                <CreateTrip__input placeholder="Nome"/>
                <CreateTrip__input placeholder="Planeta"/>
                <CreateTrip__input placeholder="Data"/>
                <CreateTrip__input placeholder="Descrição"/>
                <CreateTrip__input placeholder="Duração em dias"/>
            </CreateTrip__container>
            
            <CreateTrip__buttons>
                <CreateTrip__btn>Voltar</CreateTrip__btn>
                <CreateTrip__btn>Criar Viagem</CreateTrip__btn>
            </CreateTrip__buttons>
        </CreateTrip>
    )
}