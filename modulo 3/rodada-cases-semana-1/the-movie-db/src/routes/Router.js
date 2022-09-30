import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage.js";
import { ErrorPage } from "../pages/ErrorPage";
import { MovieDetailsPage } from "../pages/MovieDetailsPage/MovieDetailsPage.js";
import { Header } from "../components/Header/header";

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/movie/:id" element={<MovieDetailsPage/>}></Route>
                <Route path='*' element={<ErrorPage/>}></Route> 
                {/* qualquer coisa que não cair nas pastas informadas vai cair na página de erro */}
            </Routes>
        </BrowserRouter>
    )
}
export default Router