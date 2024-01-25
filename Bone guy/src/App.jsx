import './App.css'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import FAQ from './Pages/FAQs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<AboutUs />} />
        <Route path="/" element={<FAQ />} />
      </Routes>
    </Router>
  )
}

export default App;
