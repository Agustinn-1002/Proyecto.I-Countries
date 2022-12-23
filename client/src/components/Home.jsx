import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import { getCountries } from '../redux/actions';
import Cards from './Cards';
import Navbar from './Navbar';

import {Routes,Route} from 'react-router-dom'
import Card from './Card';

const Home = () => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])
    

  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Cards/>}/>
            <Route path='/details/:id' element={<Card/>}/>
        </Routes>
        
    </div>
  )
}

export default Home