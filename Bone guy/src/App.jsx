import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import SubCategories from './Components/SubCategories'
import FAQ from './Pages/FAQs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Featured from './Components/Featured-section/featured-products/featured-products'
import AdminContent from './Pages/Content-Admin/content'
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard'
function App() {
  return (

   
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
  </Routes>
      
      <Route path='/admin' element={<AdminDashboard/>}>
        {/* <Route path='/products' element={<AdminProducts/>}/> */}
        <Route path='/contents' element={<AdminContent/>}/>
      </Route>

    </Router>
  )
}

export default App;
