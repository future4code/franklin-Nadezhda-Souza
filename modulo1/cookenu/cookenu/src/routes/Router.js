import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddRecipesPage } from "../pages/AddRecipesPage/AddRecipesPage"
import { LoginPage } from "../pages/LoginPage/LoginPage"
import { RecipeDetailPage } from "../pages/RecipeDetailPage/RecipeDetailPage"
import { RecipesListPage } from "../pages/RecipesListPage/RecipesListPage"
import { SignUpPage } from "../pages/SignUpPage/SignUpPage"
import { ErrorPage } from "../pages/ErrorPage/ErrorPage"


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/cadastro" element={<SignUpPage/>}></Route>
                <Route path="/" element={<RecipesListPage/>}></Route>
                <Route path="/adicionar-receita" element={<AddRecipesPage/>}></Route>
                <Route path="/detalhe/:id" element={<RecipeDetailPage/>}></Route>
                <Route element={<ErrorPage/>}></Route> 
                {/* qualquer coisa que não cair nas pastas informadas vai cair na página de erro */}
            </Routes>
        </BrowserRouter>
    )
}