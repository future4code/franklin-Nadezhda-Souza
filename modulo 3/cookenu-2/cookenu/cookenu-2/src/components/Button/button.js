import React from "react";
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

export const Button = (props) => {
    return <ButtonS>{props.label}</ButtonS>
}