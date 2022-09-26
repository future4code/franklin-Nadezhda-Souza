import React from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button/button'
import { goToLogin, goToHomePage } from '../../routes/coordinator'
import styled from 'styled-components'

const ButtonS = styled.button`
    border-radius: 1rem;
    min-height: 2rem;
    min-width: 5rem;
    background-color: white;
    border-color: #00a9d4;
    color: #1c3166;
    border-style: none;
    box-shadow: 0px 2px #1c3166;

`

export const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const buttonHandler = (token) => {
        if(!token){
            goToLogin(navigate)
        } else {
            localStorage.removeItem('token');
            goToHomePage(navigate);
        }
    }

    return (
        <div className='header'>
            <h1 onClick={() => goToHomePage(navigate)} className='title'>Cookenu</h1>
            <ButtonS onClick={() => buttonHandler(token)}>{(!token) ? 'Login' : 'Logout'}</ButtonS>
        </div>
    )
}