import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import  CartContext  from './allcontext/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContext>
       <BrowserRouter>
       <App />
    </BrowserRouter>
    </CartContext>
  </StrictMode>,
)
