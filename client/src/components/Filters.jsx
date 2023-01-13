import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getCountriesByOrder } from '../redux/actions'

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
  
  return (
    <>
    <div>
        <li style={name==='nombre'&&type==='asc'?style2:style} onClick={()=>dispatch(getCountriesByOrder('nombre','asc'))}>A-Z</li>
        <li style={name==='nombre'&&type==='desc'?style2:style} onClick={()=>dispatch(getCountriesByOrder('nombre','desc'))}>Z-A</li>
        <li style={name==='poblacion'&&type==='asc'?style2:style} onClick={()=>dispatch(getCountriesByOrder('poblacion','asc'))}>Menor Poblacion</li>
        <li style={name==='poblacion'&&type==='desc'?style2:style} onClick={()=>dispatch(getCountriesByOrder('poblacion','desc'))}>Mayor Poblacion</li>
    </div>
    </>
  )
}

export default Filters