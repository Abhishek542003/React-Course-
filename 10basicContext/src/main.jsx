import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CountContextProvider from './context/CountContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountContextProvider>
    <App />
    </CountContextProvider>
  </StrictMode>,
)
