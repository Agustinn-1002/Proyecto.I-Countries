import React from 'react'
import SearchBar from './SearchBar'

import {useDispatch} from 'react-redux'
import { getCountries } from '../redux/actions';
import { Link } from 'react-router-dom';

const styleDiv = {
    background: 'black',
    color: 'white',
}

const Navbar = () => {
  const dispatch = useDispatch()
  
  return (
    <div style={styleDiv}>
        <Link to='/home' onClick={()=> dispatch(getCountries())}>All Countries</Link>
        <SearchBar/>
    </div>
  )
}

export default Navbar