import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Components/Header'
import './App.css'
import AddNewExpense from './Components/AddNewExoense'
import ExpenseList from './Components/ExpenseList'
createRoot(document.getElementById('root')).render(

  
  <StrictMode>
    <Header/>
    <AddNewExpense/>
    <ExpenseList/>
  </StrictMode>

  
)
