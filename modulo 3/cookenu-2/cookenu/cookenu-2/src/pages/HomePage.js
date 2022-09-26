import React from "react";
import {useNavigate} from 'react-router-dom'
import { goToLogin, goToSignUp} from "../routes/coordinator";

export const HomePage = () => {
    /* const navigate = useNavigate(); */
    return (
        <div>
            {/* <button onClick={() => goToLogin(navigate)}>LoginPage</button>
            <button onClick={() => goToSignUp(navigate)}>SignUpPage</button> */}
            <h1>HomePage</h1>
        </div>
    )
}