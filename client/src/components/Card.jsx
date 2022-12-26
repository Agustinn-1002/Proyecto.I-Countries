import { useEffect } from 'react'
import { Fragment } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCountriesById } from '../redux/actions'

const Card = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const countriId = useSelector(e=>e.getCountry)

    useEffect(()=>{
        dispatch(getCountriesById(id))
    },[id,dispatch])
  return (
    <div>
        {
            countriId.map((e,i)=>
                <Fragment key={i}>
                    <h2>{e.nombre}</h2>
                    <img src={e.flagImage} alt="" />
                    <p>{e.poblacion}</p>
                    <p>{e.capital}</p>
                    <p>{e.subRegion}</p>
                    <p>{e.area}</p>
                    <b>Actividades:</b>
                    {e.activities.map((e,i)=>
                        <Fragment key={i}>
                            <h3>{e.nombre}</h3>
                            <p>{e.dificultad}</p>
                            <p>{e.duracion}</p>
                            <p>{e.temporada}</p>
                        </Fragment>
                    )}
                </Fragment>
                )
        }    
    </div>
  )
}

export default Card