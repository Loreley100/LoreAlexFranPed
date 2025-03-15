import React from 'react'
import { useLocation, useNavigate } from "react-router-dom"; // Para recibir informacion del otro componente

export default function Perfil() {
  const location = useLocation();
  const userData = location.state || {}; // Se recibe la información

  return (
    <div>
      <p>Nombre: {userData.nombre}</p>
      <p>Apellidos: {userData.apellidoP} {userData.apellidoM}</p>
      <p>Edad: {userData.edad}</p>
      <p>Telefono: {userData.tel}</p>
      <p>Contraseña: {userData.pass}</p>
    </div>
  )
}
