import { useState } from 'react';
import Card from './components/Card';
import './App.css';

function App() {

  return (
    <>
      <h1 className='bg-color bg-green-500 text-black rounded-xl p-4 border-black'>Abhishek Pandey</h1>
      <Card username = "Abhishek" />
    </>
  );
}

export default App;
