//Formulário para o administrador criar uma nova viagem
import styled from "styled-components" 
import { useNavigate } from "react-router-dom"
import { goToLastPage } from "../routes/coordinator"
import { goToCreate } from "../routes/coordinator"

const CreateTrip = styled.div`
    text-align: center;
    margin: auto;
`

const CreateTripContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    align-items: center;
`

const CreateTripInput = styled.input`
    width: 100%;
    height: 2rem;
    margin: 1rem 0;
    border-radius: 1rem;
    text-align: center;
    box-sizing: border-box;
`
const CreateTripButtons = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    margin: auto;
    margin-top: 2rem;
`

const CreateTripBtn = styled.button`
    background-color: transparent;
    height: 2rem;
    width: 7rem;
    border-radius: 1rem;
`


export default function CreateTripPage (){
    const navigate = useNavigate();

    return(
        <CreateTrip>
            <h1>Criar Viagem</h1>
            <CreateTripContainer>
                <CreateTripInput placeholder="Nome"/>
                <CreateTripInput placeholder="Planeta"/>
                <CreateTripInput placeholder="Data"/>
                <CreateTripInput placeholder="Descrição"/>
                <CreateTripInput placeholder="Duração em dias"/>
            </CreateTripContainer>
            
            <CreateTripButtons>
                <CreateTripBtn onClick={() => goToLastPage(navigate)}>Voltar</CreateTripBtn>
                <CreateTripBtn onClick={() => {goToCreate(navigate)}}>Criar Viagem</CreateTripBtn>
            </CreateTripButtons>
        </CreateTrip>
    )
}