import './App.css'
import Home from './Pages/Home'
import FAQs from './Pages/FAQs/FAQs'
import AboutUs from './Pages/AboutUs/AboutUs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (

   
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  )
}

export default App;