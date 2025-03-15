import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate, useParams } from 'react-router-dom'
<<<<<<< HEAD
=======
import './../Form.css'
>>>>>>> dev-pedro

export default function Form() {
    //funcion para redirigir
    let navigate=useNavigate();


    
//declaracion o dorma que debe de tener nuestro formulario
    const schema = yup.object().shape({
        name: yup.string("solo ingresar letras").required("El nombre es requerido"),
        lastName: yup.string("solo ingresar letras").required("El apellido materno es requerido"),
        surName: yup.string("solo ingresar letras").required("El apellido paterno es requerido"),
        email: yup.string().email("debe tener formato de email").required("El email es requerido"),
        age: yup.number("solo ingresar numeros")
        .min(18,"La edad minima debe de ser 18")
        .integer("Debes de ingresar un num entero")
        .required("La edad es requerida")
        .typeError("Error en el tipo de dato"),
<<<<<<< HEAD
=======
        telephone: yup.number("solo ingresar numeros")
        .integer("Debes de ingresar un num entero")
        .required("El telefono es requerido")
        .typeError("Error en el tipo de dato"),
>>>>>>> dev-pedro
        pass: yup.string().required("La contraseña es requerida").min(4,"La contraseña debe de al menos 4 chars").max(10,"Max 10 chars"),
        comfirmpass: yup.string().oneOf([yup.ref('pass'), null],"La contraseña no coincide")
    })      

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })
    function onSubmit(data) {
        //{ state: { userData: obj } }
        navigate("/login", {state: data } )
        console.log(data)
    }
    
    return (
    <div>
<<<<<<< HEAD
=======
        <h1>Formulario</h1>
>>>>>>> dev-pedro
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder=" your name" {...register("name")} />
            <p>{errors.name?.message}</p>
            <input type="text" placeholder=" your surName" {...register("surName")} />
            <p>{errors.name?.message}</p>
            <input type="text" placeholder=" your lastName" {...register("lastName")} />
            <p>{errors.name?.message}</p>
            <input type="text" placeholder=" your email" {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input type="number" placeholder=" your age" {...register("age")}/>
            <p>{errors.age?.message}</p>
<<<<<<< HEAD
=======
            <input type="number" placeholder=" your telephone" {...register("telephone")}/>
            <p>{errors.telephone?.message}</p>
>>>>>>> dev-pedro
            <input type="password" placeholder=" your password" {...register("pass")}/>
            <p>{errors.pass?.message}</p>
            <input type="password" placeholder=" your password again" {...register("comfirmpass")}/>
            <p>{errors.comfirmpass?.message}</p>
<<<<<<< HEAD
            <input type="submit" />
=======
            <input className='button' type="submit" />
>>>>>>> dev-pedro
        </form>
    </div>
  )
}
