import { useState } from 'react'
import PropTypes from 'prop-types'

export function TasksApp() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Hacer la compra', completed: false },
    { id: 2, title: 'Pasear al perro', completed: true },
  ])
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), title: newTodo, completed: false }]);
      setNewTodo('');
    }
  }

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className='p-4'>
      <h1 className='text-4xl font-bold mb-4'>Lista de tareas</h1>
      <div className='mb-4'>
        <input
          type='text'
          className='border p-2 mr-2'
          placeholder='Nueva tarea'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={handleAddTodo}
        >
          Agregar tarea
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TaskItem key={todo.id} todo={todo} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
        ))}
      </ul>
    </div>
  )
}

function TaskItem({ todo, onToggle, onDelete }) {
  const handleDeleteTodo = () => {
    if (todo.completed) {
      onDelete(todo.id);
    }
  }
  return (
    <li className='flex items-center mb-2'>
      <input
        type='checkbox'
        className='mr-2'
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <p className={todo.completed ? 'line-through' : ''}>{todo.title}</p>
      <button
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 ml-2 rounded'
        onClick={handleDeleteTodo}
      >
        Eliminar tarea
      </button>
    </li>
  )


}

TaskItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

