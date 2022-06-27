import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from '../components/nav';
import HomePage from '../pages/HomePage';
import ApplicationFormPage from '../pages/ApplicationFormPage';
import LoginPage from '../pages/Loginpage';
import AdminHomePage from '../pages/AdminHomePage';
import CreateTripPage from '../pages/CreateTripPage';
import { ErrorPage } from  '../pages/ErrorPage'

export const Router = () => {
   return (
      <BrowserRouter>
         <Nav/>
         <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path="/application" element={<ApplicationFormPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/admin" element={<AdminHomePage/>}/>
            <Route path="/create" element={<CreateTripPage />}/>
            <Route element={<ErrorPage/>}></Route> 
         </Routes>
      </BrowserRouter>
   )
}