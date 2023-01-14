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
    cursor:'default',
    display:'inline',
  }
  let datos = data && data.map(e=>e.nombre)
  let elementosPorPagina = currentElements.length && currentElements.map(e=>e.nombre)

  let datosSearch = dataSearch.length && dataSearch.map(e=>e.nombre)
  let elementosSearchPorPagina = currentElementsSearch  && currentElementsSearch.map(e=>e.nombre)

  return (
    <div>
      <ul>  
        {
          datos[0] === elementosPorPagina[0] ? <div style={disable}>Anterior</div> : <a style={margen} href='#' onClick={()=>paginaAnterior()}>Anterior</a>
        } 
        { 
          (dataSearch.length > 0)?       
            (datosSearch[datosSearch.length-1] === elementosSearchPorPagina[currentElementsSearch.length-1]) ? <div style={disable}>Siguiente</div> : <a style={margen} href='#' onClick={()=>paginaSiguiente()}>Siguiente</a> 
          :
            (elementosSearchPorPagina === undefined) ||  (datos[data.length-1] === elementosPorPagina[currentElements.length-1]) ? <div style={disable}>Siguiente</div> : <a style={margen} href='#' onClick={()=>paginaSiguiente()}>Siguiente</a>
        }
      </ul>
    </div>
  )
}

export default paginado
