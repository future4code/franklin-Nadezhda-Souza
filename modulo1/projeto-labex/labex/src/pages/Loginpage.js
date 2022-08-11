//Para fazermos login como administrador
import styled from "styled-components" 
import { useNavigate } from "react-router-dom"
import { goToLastPage } from "../routes/coordinator"

const LoginPageContainer = styled.div`
    text-align: center;
    margin: auto;
`

const LoginPageInputs = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    align-items: center;
`

const LoginPageInput = styled.input`
    width: 100%;
    height: 2rem;
    margin: 1rem 0;
    border-radius: 1rem;
    text-align: center;
    box-sizing: border-box;
`
const LoginPageButtons = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    margin: auto;
    margin-top: 2rem;
`

const LoginPageBtn = styled.button`
    background-color: transparent;
    height: 2rem;
    width: 7rem;
    border-radius: 1rem;
`


export default function LoginPage (){
    const navigate = useNavigate();
    return(
        <LoginPageContainer>
            <h1>Login</h1>
            <LoginPageInputs>
                <LoginPageInput placeholder="Nome"/>
                <LoginPageInput placeholder="Email"/>
            </LoginPageInputs>
            
            <LoginPageButtons>
                <LoginPageBtn onClick={() => {goToLastPage(navigate)}}>Voltar</LoginPageBtn>
                <LoginPageBtn>Entrar</LoginPageBtn>
            </LoginPageButtons>
        </LoginPageContainer>
    )
}