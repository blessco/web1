import React, {useState} from 'react'
import "../css/Login.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Perfil from './Perfil';


 
export const Login = () => {

const [userlog, setUserlog] = useState("");
const [passlog, setPasslog] = useState("");
const [flag, setFlag] = useState(false);
const [flag2, setFlag2] = useState(false);
const [perfil, setPerfil] = useState(true);

function handleLogin (e){
  e.preventDefault();
  let user = localStorage.getItem("Usuario").replace(/"/g,"");
  let pass = localStorage.getItem("Contraseña").replace(/"/g,"");

  if(!userlog || !passlog){
    setFlag(true);
    console.log("vacio");
  }else if(userlog !== user || passlog !== pass){
    setFlag2(true);
  }else{
    setPerfil(!perfil);
    setFlag(false);
  }

}
      
    return (

    <div>
      {perfil ? (
      <form onSubmit={handleLogin}
      className='containerPrincipal'>
        <h1 id='h1login'>Iniciar Sesión</h1>
        <div className='containerSecundario'>
          <div className='form-group'>
            <label>Usuario: </label>
            <br/>
            <input
              name="usuario"
              // required=" "
              type="text"
              className='form-control'
              onChange={(event) => setUserlog(event.target.value)}
            />
            <br/>
            <label>Contraseña: </label>
            <br/>
            <input
              name="contraseña"
              minLength='4'
              // required=" "
              type="password"
              className='form-control' 
              onChange={(event) => setPasslog(event.target.value)}           
            />
            <br/>
            <button
            className='boton-login'>
              Iniciar Sesión 
            </button>
          </div>

          {flag && (  
          <div className="alertlog" role="alert">
              ¡Ingresa los datos!
          </div>
          )}

          {flag2 && (  
          <div className="alertlog" role="alert">
              ¡Ingresa los datos correctos!
          </div>
          )}

        </div>
        
      </form>
      ):(

        <Perfil/>
      )}
     
    </div>
    )

    
}

