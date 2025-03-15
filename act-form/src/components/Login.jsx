import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useLocation, useNavigate } from "react-router-dom"; // Para recibir informacion del otro componente

import './../Login.css'


export default function Login() {
    const navigate = useNavigate();
    const { data } = useLocation(); // Se recibe la informacion del otro componente

    const numIntentos = useRef(0)

    const schema = yup.object().shape({ // Se hace una declaracion de que es lo que se quiere
        email: yup.string().required("Ingrese su correo").email("Formato de email incorrecto"),
        pass: yup.string().required("La contraseña es requerida")
            .min(4, "Debe de tener al menos 4 caracteres")
            .max(10, "Maximo 10 caracteres"),
    })
    
    const { register, handleSubmit, formState: {errors}} = useForm({ // formState es para mostrar los errores
        resolver: yupResolver(schema)
    })

    function onSubmit(sigIn){
        if( sigIn.email === data.email && sigIn.pass === data.pass && numIntentos.current < 3){
            navigate("/", { data });
            numIntentos.current = 0
        }
        else{
            numIntentos.current++
            alert("Contraseña o correo incorrecto, intento: " + numIntentos.current)
        }
    }


    return (
        <div>
            <div>
                <h1>Login</h1>
                <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="">Correo eletronico: </label>
                        <input type="text" placeholder="loreuwu@gmail.com" />
                        { errors.email && <p className='error'>{errors.email?.message}</p> }
                    </div>
                    <div>
                        <label htmlFor="">Contraseña</label>
                        <input type="password" placeholder="Password" />
                        { errors.email && <p className='error'>{errors.pass?.message}</p> }
                    </div>
                    <input type="submit" value="Ingresar" />
                </form>
            </div>
        </div>
    )
}

