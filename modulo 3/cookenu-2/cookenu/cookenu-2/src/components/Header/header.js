import React from 'react'
import './header.css'
import { Button } from '../Button/button'

export const Header = () => {
    return (
        <div className='header'>
            <h1 className='title'>Cookenu</h1>
            <Button label='Login'/>
        </div>
    )
}