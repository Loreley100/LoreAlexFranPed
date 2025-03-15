import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom' //Importar librerias para navegar con rutas
import './App.css'
import Login from './components/Login'
import Resumen from './components/Perfil'

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* Ruta default sera el registro */}
          <Route path='/' element={<Resumen/>}></Route> 
          {/* Ruta de pantalla login */}
          <Route path='/login' element={<Login/>}></Route>
          {/* Ruta de Pantalla del perfil */}
          <Route path='/perfil' element={<Resumen/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
