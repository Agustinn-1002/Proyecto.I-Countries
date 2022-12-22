import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getCountries } from '../redux/actions';

const Home = () => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])
    
    const data = useSelector(e=>e.getCountriesData)

  return (
    <div>
        {
            data.map(e=>
                <div key={e.id}>
                    <b>{e.nombre}</b>
                    <b>{e.continente}</b>
                    <b>{e.capital}</b>
                    <b>{e.subRegion}</b>
                    <hr></hr>
                </div>
            )
        }
    </div>
  )
}

export default Home