import React, {useEffect, useState} from 'react';
const useObtenerNoticias = () => {
    const [noticias, establecerNoticias] = useState([]);
    const [cargando, establecerCargando] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            establecerNoticias([
                {
                    id: 1,
                    titulo: "Titulo de la Primera Noticia"
                },
                {
                    id: 2,
                    titulo: "Titulo de la Segunda Noticia"
                },
                {
                    id: 3,
                    titulo: "Titulo de la Tercera Noticia"
                }
            ]);
            establecerCargando(false);
        }, 4000)
    }, [])
    return [noticias, cargando];
}
export default useObtenerNoticias;