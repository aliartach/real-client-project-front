import './App.css'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import FAQ from './Pages/FAQs'
import Product from './Pages/Product/Product'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />

        <Route path="/" element={<FAQ />} />
      </Routes>
    </Router>
  )
}

export default App;
