import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Aula from './componentes/Aula';
import './index.css';
import Boton from './elementos/Boton';
import FormularioInicioSesion from './componentes/FormularioInicioSesion';
import ContadorClass from "./componentes/ContadorClass";
import ContadorFuncional from "./componentes/ContadorFuncional";
import ContadorUseReducer from "./componentes/ContadorUseReducer";
import Blog from "./componentes/Blog";

const App = () =>{
  const [sesion, cambiarEstadoSesion] = useState(true);
  return(
    <div className="contenedor">
      {sesion === true ? 
      <>
        <Aula/>
        <Blog/>
        <ContadorUseReducer/>
        {/* <ContadorClass incrementar={1} disminuir={1}/> */}
        {/* <ContadorFuncional incrementar={1} disminuir={1}/> */}
        <Boton rojo anchocompleto onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesión</Boton>
      </>
      :
      <>
        <h2 className="titulo">No has iniciado sesión</h2>
        <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion}/>
        {/*<Boton verde anchocompleto onClick={() => cambiarEstadoSesion(true)}>Iniciar Sesión</Boton>*/}
      </>
      }
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);