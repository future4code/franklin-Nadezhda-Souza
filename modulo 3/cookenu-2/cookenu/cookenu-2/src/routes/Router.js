import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { SignUpPage } from "../pages/SignUpPage"
import { ErrorPage } from "../pages/ErrorPage"
import { Header } from "../components/Header/header";
import { RecipesListPage } from "../pages/recipesListPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/signup" element={<SignUpPage/>}></Route>
                <Route path="/recipes" element={<RecipesListPage/>}></Route>
                <Route path="/" element={<HomePage/>}></Route>
                <Route element={<ErrorPage/>}></Route> 
                {/* qualquer coisa que não cair nas pastas informadas vai cair na página de erro */}
            </Routes>
        </BrowserRouter>
    )
}
export default Router