import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToSignUp, goToTasksPage } from "../routes/coordinator";

export const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => goToLogin(navigate)}>LoginPage</button>
            <button onClick={() => goToTasksPage(navigate)}>Tasks</button>
            <button onClick={() => goToSignUp(navigate)}>SignUpPage</button>
        </div>
    )
}