import { useState } from 'react'

export function CounterApp() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSetCount = () => {
    const value = parseInt(inputValue);
    if (isNaN(value)) {
      alert('Por favor, ingrese un número válido.');
    } else {
      setCount(value);
      setInputValue('');
    }
  }

  const handleResetCount = () => {
    setCount(0);
  }

  return (
    <div className='p-4 mx-auto'>
      <h1 className='text-4xl font-bold mb-4'>{count}</h1>
      <div className='flex gap-2 mb-4'>
        <input
          type='number'
          value={inputValue}
          onChange={handleInputChange}
          className='border p-2 flex-1'
        />
        <button
          className='bg-green-500 hover:bg-green-700 text-white font-bold p-2 rounded'
          onClick={handleSetCount}
        >
          Ajustar
        </button>
        <button
          className='bg-pink-500 hover:bg-pink-700 text-white font-bold p-2 rounded'
          onClick={handleResetCount}
        >
          Reiniciar
        </button>
      </div>
      <div>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded'
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </div>
  )
}