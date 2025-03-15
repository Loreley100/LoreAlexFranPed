import React from 'react'
import { useLocation, useNavigate } from "react-router-dom"; // Para recibir informacion del otro componente


export default function Perfil() {
  let navigate = useNavigate() //Variable para navegar entre componentes
  const location = useLocation(); // declarar una variable par obtener la informacion
  const data = location.state || {}; // Se recibe la información

  return (
    <div>
      {/* Pantalla de perfil de usuario */}
      <h1>Perfil de Usuario</h1>
      {/* Mostrar el nombre */}
      <p>Nombre: {data.name}</p>
      {/* Mostrar ambos apellidos */}
      <p>Apellidos: {data.lastName} {data.surName}</p>
      {/* Mostrar la edad */}
      <p>Edad: {data.age}</p>
       {/* Mostrar el telefono */}
       <p>Telefono: {data.telephone}</p>
      {/* Mostrar el correo */}
      <p>Correo: {data.email}</p>
      {/* Mostrar la contraseña */}
      <p>Contraseña: {data.pass}</p>
      {/* Boton para regresar al formulario */}
      <button onClick={()=> navigate('/')}>Regresar a formulario</button>
    </div>
  )
}
