import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Components/Header'
import './App.css'
import Container from './Components/Container'

createRoot(document.getElementById('root')).render(

  
  <StrictMode>
    <Header/>
    <Container/>
  </StrictMode>

  
)
