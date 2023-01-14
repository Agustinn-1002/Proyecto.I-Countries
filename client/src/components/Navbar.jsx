import React from 'react'
import SearchBar from './SearchBar'

import {useDispatch} from 'react-redux'
import { getCountries, getCountriesByOrder, pageNumber } from '../redux/actions';
import { Link } from 'react-router-dom';

const styleDiv = {
    background: 'black',
    color: 'white',
}

const Navbar = () => {
  const dispatch = useDispatch()
  
  return (
    <div style={styleDiv}>
        <Link to='/home' onClick={()=> {
          dispatch(getCountries())
          dispatch(pageNumber(1))
          dispatch(getCountriesByOrder('nombre','asc'))
          }}>Reset</Link>
        <SearchBar/>
        <Link to='/createActivity'>Crear Actividades</Link>
    </div>
  )
}

export default Navbar