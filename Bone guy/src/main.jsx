import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { CartProvider } from './context/cart.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <CartProvider>
    <App />
  </CartProvider>
</React.StrictMode>,
)
