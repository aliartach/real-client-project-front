// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'
import Featured from './Components/Featured-section/featured-products/featured-products'
import AdminProducts from './Pages/Admin/Admin-products/admin-products'
import AdminProducts from './Pages/Admin/Admin-products/admin-products'

const App = () => {

  return (
    <BrowserRouter>
      <Route path='/admin' element={<AdminDashboard/>}>
        <Route path='/products' element={<AdminProducts/>}/>
      </Route>
    </BrowserRouter>
  );
};

export default App;
