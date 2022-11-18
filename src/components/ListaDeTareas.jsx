import React, { useState } from 'react'
import '../stylesheets/ListaDeTareas.css'
import TareaFormulario from './TareaFormulario'
import Tarea from './Tarea'

const ListaDeTareas = () => {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    setTareas([tarea,...tareas])
  }

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id===id){
        tarea.completada = !tarea.completada
      }
      return tarea
    })
    setTareas(tareasActualizadas)
    
  }

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !==id)
    setTareas(tareasActualizadas)
  }

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {tareas.map( tarea => 
          <Tarea 
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto} 
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        )}
      </div>
    </>
  )
}

export default ListaDeTareas
