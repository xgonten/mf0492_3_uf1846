import { useState } from 'react'
import ProppTypes from 'prop-types'



function Tarea({ key, textoTarea = 'aquí tu tarea' }) {
  const [done, setDone] = useState(false)
  return (
    <div onClick={() => setDone(!done)}>
      {done ? (
        <>
          <li key={key}>✔️<span className='text-slate-500 tex line-through'>{textoTarea}</span></li>
        </>
      ) : (
        <>
          <li key={key}>🔘{textoTarea}</li>
        </>
      )}
    </div>
  );
}
Tarea.propTypes = {
  textoTarea: ProppTypes.string,
  key: ProppTypes.number
}

export function TasksApp() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const handleAñadeTarea = () => {
    setTareas([...tareas, nuevaTarea]);
    setNuevaTarea('');
  };

  return (
    <div className='container flex flex-col items-center justify-center h-screen gap-2 absolute -inset-1'>
      <input
        className='w-1/5 h-10 px-2 border border-black rounded'
        type="text"
        value={nuevaTarea}
        onChange={e => setNuevaTarea(e.target.value)}
      />
      <button className='px-2 rounded bg-white hover:text-white bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:border-none' onClick={handleAñadeTarea}>Añadir Tarea</button>
      <fieldset className='border rounded-2xl shadow-xl bg-white m-12 p-8 w-4/6'>
<legend className='text-center from-stone-700 text-2xl'>Mi lista de tareas</legend>
        <ul>
          {tareas.map((tarea, index) => (
            <Tarea key={index} textoTarea={tarea} />
          ))}
        </ul>
      </fieldset>
    </div>
  );
}
