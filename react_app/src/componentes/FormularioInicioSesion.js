import React, {useState} from 'react';
import "./FormularioInicioSesion.css";
const FormularioInicioSesion = (props) => {
    const [usuario, cambiarUsuario] = useState('');
    const [clave, cambiarClave] = useState('');
    const CambiarEstado = (evento) =>{
        if(evento.target.name === "usuario"){
            cambiarUsuario(evento.target.value)
        }else if(evento.target.name === "clave"){
            cambiarClave(evento.target.value)
        }
    }
    const validar = (evento) => {
        evento.preventDefault();
        if(usuario === "clase" && clave === "clase"){
            props.cambiarEstadoSesion(true);
        }else{
            alert("Datos Incorrectos");
            cambiarUsuario("");
            cambiarClave("");
        }
    }
    return (
        <form className="formulario" onSubmit={validar}>
            <div>
                <label className="label" htmlFor="usuario">Usuario</label>
                <input
                className="input"
                type="text"
                name="usuario"
                id="usuario"
                value={usuario}
                onChange={(evento) => {
                    cambiarUsuario(evento.target.value)
                }}
                />
            </div>
            <div>
                <label className="label" htmlFor="clave">Clave</label>
                <input
                className="input"
                type="password"
                name="clave"
                id="clave"
                value={clave}
                onChange={(evento) => {
                    cambiarClave(evento.target.value)
                }}
                />
            </div>
            <button className="boton" type="submit">Iniciar Sesión</button>
        </form>
    );
}
export default FormularioInicioSesion;