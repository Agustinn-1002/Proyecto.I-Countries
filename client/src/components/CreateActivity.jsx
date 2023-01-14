import React from 'react'
import Navbar from './Navbar'

const CreateActivity = () => {
  return (
    <div>
        <Navbar/>

        <form>
            <label>Nombre de la Actividad</label>
            <input type="text"  name='nombre'/>
            <label>Dificultad de la Actividad</label>
            <input type="text" name='Dificultad'/>
            <label>Duracion de la Actividad</label>
            <input type="text"  name='Duracion'/>
            <label>Nombre de la Actividad</label>
            <input type="text"  name='Temporada'/>
        </form>
    </div>
  )
}

export default CreateActivity
