import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Featured from './Components/Featured-section/featured-products/featured-products'

const App = () => {

  return (
    <>
      <Home/>
      <Featured />
    </>
  );
};

export default App;
