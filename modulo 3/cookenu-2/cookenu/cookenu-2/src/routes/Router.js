import React, { BrowserRouter, Routes, Route } from "react";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { SignUpPage } from "../pages/SignUpPage"
import { ErrorPage } from "../pages/ErrorPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/cadastro" element={<SignUpPage/>}></Route>
                <Route path="/" element={<HomePage/>}></Route>
                <Route element={<ErrorPage/>}></Route> 
                {/* qualquer coisa que não cair nas pastas informadas vai cair na página de erro */}
            </Routes>
        </BrowserRouter>
    )
}
export default Router