import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import SubCategories from './Components/SubCategories'
import FAQ from './Pages/FAQs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Featured from './Components/Featured-section/featured-products/featured-products'
import AdminDashboard from "./Pages/Sidebar/Sidebar";
import AdminContent from './Pages/Content-Admin/content.jsx';
function App() {
  return (

   
    <Router>        
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<Featured />} /> */}
        <Route path="/" element={<SubCategories />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/content" element={<AdminContent />} />
        {/* <Route path="/" element={<AboutUs />} /> */}
        {/* <Route path="/" element={<FAQ />} /> */}
      </Routes>
    </Router>
  )
}

export default App;
