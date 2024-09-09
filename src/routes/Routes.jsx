import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../template/header/Header"
import Home from "../pages/home/Home"
import Tarefas from "../pages/tarefas/Tarefas"
import Calendario from "../pages/calendario/Calendario"
import Contatos from "../pages/contatos/Contatos"


export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/tarefas" element={<Tarefas/>}/>
            <Route path="/calendario" element={<Calendario/>}/>
            <Route path="/contatos" element={<Contatos/>}/>   
          </Routes>
        </main>
    </BrowserRouter>
  )
}