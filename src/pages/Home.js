import React from 'react'
import "../css/Login.css"
import "bootstrap/dist/css/bootstrap.min.css"


 
export const Home = () => {
      
    return (
      
      <div className='home'>
        <h2 id='h2login'>¡Bienvenido!</h2>

            <a href='./Registro'>
            <button
            className='boton-home'>
              Registrar
            </button>
            </a>

            <a href='./Login'>
            <button
            className='boton-home'>
              Iniciar Sesión 
            </button>
            </a>

      </div>

    )
}

