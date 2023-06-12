
import { useState } from 'react'


export function CounterApp () {
  const [counter, setCounter] = useState(0)

  const handleDecrease = () => {
    setCounter(counter - 1)
  }
  
  
  const handleIncrease = () => {
    setCounter(counter + 1)
    
  }
  
  const handleReset = () => {
    setCounter(0)
  }
  
 
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <h1 className='font-bold text-purple-900 uppercase text-7xl'>{counter}</h1>
      <div className='flex gap-2'>

      <button 
      className='px-3 py-1 text-white transition ease-in-out bg-blue-500 rounded duration-2000 hover:bg-yellow-700'
      onClick={handleDecrease}>
      -
      </button>
      <button 
      className='px-3 py-1 text-white transition ease-in-out bg-blue-500 rounded duration-2000 hover:bg-yellow-700'
      onClick={handleReset}
     >
      Reinicio
      </button>
       <button 
      className='px-3 py-1 text-white transition ease-in-out bg-blue-500 rounded duration-2000 hover:bg-yellow-700'
      onClick={handleIncrease}
     >
      +
     </button>
     </div>
     </div>
  )
  }