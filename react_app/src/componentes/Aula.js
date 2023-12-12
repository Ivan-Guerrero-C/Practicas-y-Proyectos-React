import React from 'react';
import {Titulo} from './Titulo';
import styled from 'styled-components';

const Aula = () =>{
    const clase = "Diplomado de Programación";
    const instructores = ["Pedro", "Maru", "Vidermid", "Gabriel"];
  return(
    <>
      <Titulo nombre="Gabriel" color="blue"/>
      {/*<Titulo nombre="Alejandro" color="orange"/>*/}
      <Parrafo>Te doy la Bienvenida a esta Experiencia de Aprendizaje</Parrafo>
      {clase && <Parrafo>Estamos en clase del {clase}</Parrafo>}
      {/*<h4>Estos son los profesores:</h4>
      <ul>
        {instructores.map((instructor,index) => {
            return <li key={index}>{instructor}</li>
        })}
      </ul>*/}
    </>
  )
};

const Parrafo = styled.p`
  margin: 10px 0;
`;

export default Aula;