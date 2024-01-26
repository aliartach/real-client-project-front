import './App.css'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import FAQ from './Pages/FAQs'
import Policy from './Pages/policy/policy'
import ContactUs from './Pages/Contactus/ContactUs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<AboutUs />} />
        <Route path="/" element={<FAQ />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="/ContactUs" element={<ContactUs />} />


      </Routes>
    </Router>
  )
}

export default App;
