import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import LoginPage from './pages/Loginpage';
import AdminHomePage from './pages/AdminHomePage';
import CreateTripPage from './pages/CreateTripPage';

//falta preencher o path | eu adicionei o que eu achei melhor
export const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<HomePage />} />
            <Route path="/application" element={<ApplicationFormPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminHomePage />} />
            <Route path="/create" element={<CreateTripPage />} />
         </Routes>
      </BrowserRouter>
   )
}