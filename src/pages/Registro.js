import React from 'react'
import "../css/Login.css"
import "bootstrap/dist/css/bootstrap.min.css"


export const Registro = () => {

  
     const itemNuevo = () =>{
       let Nombre = document.getElementById("nombre").value;
       let Apellido = document.getElementById("apellido").value;
       let Cedula = document.getElementById("cedula").value;
       let Edad = document.getElementById("edad").value;
       let Usuario = document.getElementById("usuario").value;
       let Contraseña = document.getElementById("contraseña").value;

       localStorage.setItem("Nombre",Nombre);
       localStorage.setItem("Apellido",Apellido);
       localStorage.setItem("Cédula",Cedula);
       localStorage.setItem("Edad",Edad);
       localStorage.setItem("Usuario",Usuario);
       localStorage.setItem("Contraseña",Contraseña);

       alert("Has guardado los datos exitosamente",
       window.location.href="./Login");
       
    }

    
  
    return (
    <div>

      <form onSubmit={itemNuevo}>
        <div className='containerPrincipal'>
            <h1 id='h1login'>Registro</h1>
          <div className='containerSecundario'>
            <div className='form-group'>

              <label>Nombre: </label>
              <br />
              <input
                required=" "
                type="text"
                className='form-control'
                id="nombre" />
              <br />

              <label>Apellido: </label>
              <br />
              <input
                required=" "
                type="text"
                className='form-control'
                id="apellido" />
              <br />

              <label>Cédula: </label>
              <br />
              <input
                required=" "
                type='text'
                className='form-control'
                id="cedula" />
              <br />

              <label>Edad: </label>
              <br />
              <input
                required=" "
                type='number'
                className='form-control'
                id="edad" />
              <br />

              <label>Usuario: </label>
              <br />
              <input
                required=" "
                type="text"
                className='form-control'
                id="usuario" />
              <br />

              <label>Contraseña: </label>
              <br />
              <input
                required=" "
                type="password"
                className='form-control'
                id="contraseña" />
              <br />

              <input
                className='boton-login'
                type='submit'
                id="registrar"
                value="Registrar" />

            </div>
          </div>
        </div>
      </form>  
    </div>
    )
}

