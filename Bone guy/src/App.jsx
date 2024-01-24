import { useState } from 'react'
import './App.css'
// import Home from './Pages/Home'
// import AboutUs from './Pages/AboutUs'
// import FAQ from './Pages/FAQs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Featured from './Components/Featured-section/featured-products/featured-products'
import SubCategories from './Components/SubCategories/SubCategories'

function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<SubCategories />} />
        {/* <Route path="/" element={<AboutUs />} /> */}
        {/* <Route path="/" element={<FAQ />} /> */}
      </Routes>
    </Router>
  )
}

export default App
