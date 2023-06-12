import { useState } from 'react';


export default function CounterApp () {

 return (
  <div>
   <Contador />
  </div>
 )
}

function Contador () {
 const [count, setCount] = useState(0);
 const [ajustarValor, valorEstablecido] = useState('');

 const incremento = () => {
  setCount(count + 1);
 }

 const reduccion = () => {
  setCount(count - 1);
 }

 const reinicio = () => {
  setCount(0);
 }

 const modificador = event => {
  valorEstablecido(event.target.value);
 };

 const establecerClick = () => {
  setCount(Number(ajustarValor));
  valorEstablecido('');
 };




 return (

  <div className="flex flex-col justify-center items-center">

   <div className="w-20 h-20 rounded-full border-gray-300 border flex justify-center items-center">
    <span className="text-red-500 text-4xl">{count}</span>
   </div>

   <fieldset className="mt-8 rounded-xl flex justify-around items-center px-4 py-2">

    <button
     onClick={incremento}
     className="bg-green-200 hover:bg-green-300 text-gray-700 font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
    >
     Aumentar
    </button>

    <button
     onClick={reduccion}
     className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
    >
     Reducir
    </button>

    <button
     onClick={reinicio}
     className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
    >
     Reiniciar
    </button>
    
    
   </fieldset>

    <div className="border-gray-300 border rounded-xl flex justify-around items-center px-4 py-2 mt-8">
        <input
          type="number"
          value={ajustarValor}
          onChange={modificador}
          className="border-gray-300 border rounded-lg px-4 py-2 focus:outline-none focus:shadow-outline"
        />
        <button 
        onClick={establecerClick}
        className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
          Establecer
        </button>
      </div>
  </div>

 );
}