import { useState } from 'react';
import './App.css'

function App() {
  const [color,setColor] = useState('white');

  const colourChange = (e)=>
    {
      setColor(e.target.value);
    }
  return (
    <>
    <div className='min-h-screen w-full h-full' style={{backgroundColor:color}}>
      <div className='navbar text-base font-medium flex bg-slate-600 w-screen h-12 rounded-sm shadow-xl shadow-slate-700 items-center justify-center' > 
        <button onClick = {colourChange} value = "red" className='red mr-2 bg-red-600 w-20 h-8 rounded-xl border-black border-2'>Red</button>
        <button onClick = {colourChange} value = "yellow" className='red mr-2 bg-yellow-400 w-20 h-8 rounded-xl border-black border-2'>Yellow</button>
        <button onClick = {colourChange} value = "green"className='red mr-2 bg-green-600 w-20 h-8 rounded-xl border-black border-2'>Green</button>
        <button onClick = {colourChange} value = "skyblue"className='red mr-2 bg-blue-400 w-20 h-8 rounded-xl border-black border-2'>Blue</button>
        <button onClick = {colourChange} value = "pink"className='red mr-2 bg-pink-500 w-20 h-8 rounded-xl border-black border-2'>Pink</button>
        <button onClick = {colourChange} value = "purple"className='red mr-2 bg-purple-500 w-20 h-8 rounded-xl border-black border-2'>Purple</button>
        <button onClick = {colourChange} value = "orange"className='red mr-2 bg-orange-500 w-20 h-8 rounded-xl border-black border-2'>Orange</button>
        <button onClick = {colourChange} value = "white"className='red mr-2 bg-white w-20 h-8 rounded-xl border-black border-2'>White</button>
        </div>
        <h1 className='text-2xl font-bold text-black text-center mt-5'> Click Button to Change Colour </h1>
        </div>
    </>
  );
}

export default App
