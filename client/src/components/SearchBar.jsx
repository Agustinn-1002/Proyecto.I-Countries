import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCountriesByName } from '../redux/actions'


const SearchBar = () => {
    const navigate = useNavigate() 
    const dispatch = useDispatch()
    const [name , setName] = useState('')
    const [error , setError] = useState('')

    const submit = (e) => {
        e.preventDefault()
        if(name.length === 0) return setError('ingresa texto')
        dispatch(getCountriesByName(name))
        setError('')
        setName('')
        navigate('/home')
    }
  return (
    <form onSubmit={submit}>
        <input onChange={(e) => setName(e.target.value)} type="text" name="search" value={name}/>
        {error.length > 0?<p>{error}</p>:null}
        <input type="submit"/>
    </form>
  )
}

export default SearchBar