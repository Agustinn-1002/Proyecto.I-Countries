import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { getCountriesById } from '../redux/actions'

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
    const data = useSelector(e=>e.getAllCountriesData)
    const dataSearch = useSelector(e=>e.countriesSearch)

    const dispatch = useDispatch()

    return (
        <div style={cards}>
          {
            (data.length && dataSearch.length === 0)?
              data.map((e,index)=>
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
    )
 }
 
 export default Cards