import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Reactflow from './components/Reactflow.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Reactflow />
  </StrictMode>,
)
