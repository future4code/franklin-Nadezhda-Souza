//Para fazermos login como administrador
import styled from "styled-components" 

const LoginPageContainer = styled.div`
    text-align: center;
    margin: auto;
`

const LoginPage__inputs = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    align-items: center;
`

const LoginPage__input = styled.input`
    width: 100%;
    height: 2rem;
    margin: 1rem 0;
    border-radius: 1rem;
    text-align: center;
    box-sizing: border-box;
`
const LoginPage__buttons = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    margin: auto;
    margin-top: 2rem;
`

const LoginPage__btn = styled.button`
    background-color: transparent;
    height: 2rem;
    width: 7rem;
    border-radius: 1rem;
`


export default function LoginPage (){
    return(
        <LoginPageContainer>
            <h1>Login</h1>
            <LoginPage__inputs>
                <LoginPage__input placeholder="Nome"/>
                <LoginPage__input placeholder="Email"/>
            </LoginPage__inputs>
            
            <LoginPage__buttons>
                <LoginPage__btn>Voltar</LoginPage__btn>
                <LoginPage__btn>Entrar</LoginPage__btn>
            </LoginPage__buttons>
        </LoginPageContainer>
    )
}