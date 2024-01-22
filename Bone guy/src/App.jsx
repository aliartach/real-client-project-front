import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import {BrowserRouter as Router} from 'react-router-dom'
function App() {

  return (
    <Router>
      <Home/>
    </Router>
  )
}

export default App
