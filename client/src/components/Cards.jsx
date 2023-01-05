import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { getCountriesById } from '../redux/actions'
import Paginado from '../components/Paginado'
import { useEffect } from 'react'

const cards = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4,20%)',
  justifyContent: 'space-around',
  
}

const card = {
  border: '1px solid black',
}


const img = {
  width: '100%',
}


const Cards = () => {
    const dispatch = useDispatch()

    const data = useSelector(e=>e.getAllCountriesData)
    const dataSearch = useSelector(e=>e.countriesSearch)

    const [pages , setPages] = useState(1)
    const [elemetosPorPagina , setElementosPorPaginas] = useState(9)
    
    useEffect(()=>{
      if (pages!==1) {
        setElementosPorPaginas(10)
      }else{
        setElementosPorPaginas(9)
      }
    },[pages])


    const indexLastElement = pages * elemetosPorPagina;
    const indexFirstElement = indexLastElement - elemetosPorPagina;
    const currentElements = data.slice(indexFirstElement,indexLastElement)
    
    const paginaSiguiente = () => {
      setPages(pages+1)
      console.log(currentElements);
    } 
    const paginaAnterior = () => {
      setPages(pages-1)
    } 
    
    return (
      <div>
        <Paginado paginaAnterior={paginaAnterior} paginaSiguiente={paginaSiguiente} currentElements={currentElements} />
        <div style={cards}>
          {
            (currentElements.length && dataSearch.length === 0)?
              currentElements.map((e,index)=>
                <Link to={`/home/details/${e.id}`} key={index} style={card} onClick={()=>dispatch(getCountriesById(e.id))}>
                  <h3>{e.nombre}</h3>
                  <img src={e.flagImage} alt="" style={img}/>
                  <p>{e.continente}</p>
                  <p>{e.capital}</p>
                </Link>
              )
            : dataSearch.length > 0 ? 
              dataSearch.map((e,index)=>
                <Link to={`/home/details/${e.id}`} key={index} style={card} onClick={()=>dispatch(getCountriesById(e.id))}>
                  <h3>{e.nombre}</h3>
                  <img src={e.flagImage} alt="" style={img}/>
                  <p>{e.continente}</p>
                  <p>{e.capital}</p>
                </Link>
              )
              :
              <h3>{dataSearch.message}</h3>
          }
        </div>
      </div>
    )
 }
 
 export default Cards