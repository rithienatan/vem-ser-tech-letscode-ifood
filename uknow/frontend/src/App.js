//--------- Import libs ---------
import React from "react";
import { Routes, Route } from "react-router-dom";


//--------- Import custom components ---------
import Homepage from "./pages/homepage/homepage";
import Loginpage from "./pages/login/login";
import Cadastro from "./pages/cadastro/cadastro";
import AlunoDashboard from "./Components/aluno-dashboard";
import Perfil from "./pages/perfil/perfil";
import Videopage from "./pages/video-aula/video-aula";


//--------- Import styles ---------
import './App.css';


//---------- App ---------
/**
 * Root App
 * 
 * @returns {JSX}
 */
export default function App() 
{
  return(
    <Routes>
      <Route element={<Homepage />} path="/" exact />
      <Route element={<Loginpage />} path="/login" />
      <Route element={<Cadastro />} path="/cadastro" />
      <Route element={<AlunoDashboard />} path="/dashboard" />
      <Route element={<Perfil />} path="/perfilUsuario" />
      <Route element={<Videopage />} path="/videoAula" />
    </Routes>
  );
}//end App()