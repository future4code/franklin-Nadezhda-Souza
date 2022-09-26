import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToRecipesListPage } from "../routes/coordinator";

export const useUnprotectedPage = () => {
    const navigate = useNavigate();
    useLayoutEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            goToRecipesListPage(navigate);
        }
    }, [navigate])
}