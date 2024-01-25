// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'
import Featured from './Components/Featured-section/featured-products/featured-products'
import AdminProducts from './Pages/Admin/Admin-products/admin-products'

const App = () => {

  return (
    <>
      <AdminProducts />
    </>
  );
};

export default App;
