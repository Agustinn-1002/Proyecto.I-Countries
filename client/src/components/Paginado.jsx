import React from 'react'

const paginado = ({paginaAnterior,paginaSiguiente,currentElements}) => {
  const margen = {
    margin: '4px'
  }
  return (
    // VALIDAR CUANDO EL ARRAY ESTA VACIO PARA DESABILITAR LOS BOTONES
    <div>
      <ul>
        <a style={margen} href='#' onClick={()=>paginaAnterior()}>Anterior</a>
        <a style={margen} href='#' onClick={()=>paginaSiguiente()}>Siguiente</a>
      </ul>
    </div>
  )
}

export default paginado
