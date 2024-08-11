import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter] = useState(0);
  const increaseClick = ()=>
    {
      counter < 20? counter++: counter = 20;
      setCounter(counter);
    }
  const decreaseClick = ()=>
    {
      counter > 0? counter--: counter = 0;
      setCounter(counter);
    }
  return (
    <>
     <h1>Abhishek React Developer </h1>
     <p >Total Votes: {counter}</p>
     <button  onClick = {increaseClick}  style={{margin:'20px',backgroundColor:'green'}} >Increase ⏫</button>
     <button  onClick = {decreaseClick}  style={{backgroundColor:'red'}}>Decrease ⏬</button>
    </>
  )
}

export default App
