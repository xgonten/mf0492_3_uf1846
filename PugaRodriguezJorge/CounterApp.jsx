import { useState } from 'react'

export function CounterApp() {
  const [count, setCount] = useState(0)
  const [inputNumber, setInputNumber] = useState('')
  const [initialCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handleInputChange = (event) => {
    setInputNumber(event.target.value)
  }

  const handleSetCount = () => {
    const inputNumberValue = parseInt(inputNumber, 10) || 0;
    setCount(inputNumberValue)
  }

  const handleReset = () => {
    setCount(initialCount)
  }

  return (
    <div className="text-center my-8">
      <h1 className="text-4xl font-bold mb-4">{count}</h1>
      <button onClick={handleIncrement} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4">
        Incrementar
      </button>
      <button  onClick={handleDecrement} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4">
        Decrementar
      </button>
      <div className="mt-4">
        <input type="number" value={inputNumber} onChange={handleInputChange} className="mr-2" />
        <button onClick={handleSetCount} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
          Establecer
        </button>
        <button onClick={handleReset} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Reiniciar
        </button>
      </div>
    </div>
  );
}

