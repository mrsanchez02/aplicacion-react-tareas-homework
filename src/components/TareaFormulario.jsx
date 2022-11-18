import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import '../stylesheets/TareaFormulario.css'

const TareaFormulario = ({ onSubmit }) => {
  
  const [input, setInput] = useState('')

  const handleChange = evt => {
    setInput(evt.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    
    if(input.trim()==='') return;

    const nuevaTarea = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    onSubmit(nuevaTarea)
    setInput('')
  }

  return (
    <form className='tarea-formulario' onSubmit={handleSubmit}>
      <input 
        className='tarea-input'
        type='text'
        placeholder='Escribe una tarea'
        name='texto'
        onChange={handleChange}
        required
      />
      <button 
        type='submit'
        className='tarea-boton'
      >Agregar Tarea</button>
    </form>
  )
}

export default TareaFormulario
