import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getCountriesByOrder, orderByContinent } from '../redux/actions'

const style = {
    cursor:'pointer',
    background:'white'
}
const style2 = {
  cursor:'pointer',
  background:'grey'
}
const Filters = () => {
  const dispatch = useDispatch()

  const name = useSelector(e=>e.nameFilter)
  const type = useSelector(e=>e.typeFilter)
  const countries = useSelector(e=>e.getAllCountriesDataRespaldo)
  const search = useSelector(e=>e.countriesSearchRespaldo)

  let continentes = ['All']
  let newContinentes = []

  let arrayCountriesContinent = countries.map(e=>e.continente)
  let arraySearchContinent = search.length && search.map(e=>e.continente)

  let newArrayContinent = []

  if (search.length > 0) {
    newArrayContinent = arraySearchContinent.filter((e,i)=>{
      return arraySearchContinent.indexOf(e) === i;
    })
  }else{
    newArrayContinent = arrayCountriesContinent.filter((e,i)=>{
      return arrayCountriesContinent.indexOf(e) === i;
    })
  }
  
  newContinentes = continentes.concat(newArrayContinent)
  const handleChange = (e) => {
    dispatch(orderByContinent(e.target.value))
  }

  return (
    <>
      <div>
          <li style={name==='nombre'&&type==='asc'?style2:style} onClick={()=>dispatch(getCountriesByOrder('nombre','asc'))}>A-Z</li>
          <li style={name==='nombre'&&type==='desc'?style2:style} onClick={()=>dispatch(getCountriesByOrder('nombre','desc'))}>Z-A</li>
          <li style={name==='poblacion'&&type==='asc'?style2:style} onClick={()=>dispatch(getCountriesByOrder('poblacion','asc'))}>Menor Poblacion</li>
          <li style={name==='poblacion'&&type==='desc'?style2:style} onClick={()=>dispatch(getCountriesByOrder('poblacion','desc'))}>Mayor Poblacion</li>
      </div>
      <label>Continente: </label>
      <select name="select" onChange={handleChange}>
        {
        newContinentes.map((e)=>
          <option value={e}>{e}</option>
          )
        }
      </select>
    </>
  )
}

export default Filters