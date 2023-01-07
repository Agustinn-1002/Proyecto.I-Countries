import React from 'react'

const paginado = ({paginaAnterior,paginaSiguiente,dataSearch,data,currentElements,currentElementsSearch}) => {
  const margen = {
    margin: '4px',
    padding:'4px',
    background:'#000',
    color:'#fff'
  }
  const disable={
    margin: '4px',
    padding:'4px',
    background:'#2c2c2c81',
    color:'#fff',
    cursor:'default'
  }
  let datos = data && data.map(e=>e.nombre)
  let elementosPorPagina = currentElements && currentElements.map(e=>e.nombre)

  let datosSearch = dataSearch.length && dataSearch.map(e=>e.nombre)
  let elementosSearch = currentElementsSearch.length  && currentElementsSearch.map(e=>e.nombre)

  
  return (
    // VALIDAR CUANDO EL ARRAY del search ESTA VACIO PARA DESABILITAR LOS BOTONES
    <div>
      <ul>
        { 
          datos[0] === elementosPorPagina[0] ? <a style={disable} href='#'>Anterior</a> : <a style={margen} href='#' onClick={()=>paginaAnterior()}>Anterior</a>
        }
        {
          datos[data.length-1] === elementosPorPagina[currentElements.length-1] ? <a style={disable} href='#'>Siguiente</a> : <a style={margen} href='#' onClick={()=>paginaSiguiente()}>Siguiente</a>
        }
      </ul>
    </div>
  )
}

export default paginado
