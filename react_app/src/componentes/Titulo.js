import React from 'react';
const Titulo = ({nombre, color}) => {
    return ( 
    <>
        <h1 style={{color:color}}>¡Hola {nombre}!</h1>
    </>
    );
}
export {Titulo};