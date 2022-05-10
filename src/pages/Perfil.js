import React from 'react';
import foto from './foto.jpg'

export const Perfil = () => {

  let nombre = localStorage.getItem("Nombre");
  let apellido = localStorage.getItem("Apellido")
  let edad = localStorage.getItem("Edad");
  let cedula = localStorage.getItem("Cédula");
  let usuario = localStorage.getItem("Usuario")



  return(
    <form>
    <div className='perfil'>

      <h1 id='h2login'>¡Bienvenido/a!
        <br/><br/>
        {nombre}, este es tu perfil.
      </h1>

      <img id="profileimg" 
      src = {foto} 
      alt='Imagen de perfil'/>

      <div>
        <br/>
        <h3 id="h3login">{nombre} {apellido}</h3>
        <h3 id="h3login">Edad: {edad} </h3>
        <h3 id="h3login">Cédula: {cedula} </h3>
        <h3 id="h3login">Nombre de Usuario: "{usuario}" </h3>

      </div>  
      
      <button
            type="button"
            onClick={cerrarSesion}
            className='boton-logout'>
              Cerrar Sesión 
          </button> 

    </div>
    </form>
  );

  function cerrarSesion(){
    localStorage.clear();
    window.location.href="/"
}

}

export default Perfil;