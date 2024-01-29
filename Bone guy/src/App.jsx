import './App.css'
import Home from './Pages/Home'
// import AboutUs from './Pages/AboutUs'
// import FAQ from './Pages/FAQs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Featured from './Components/Featured-section/featured-products/featured-products'
// import SubCategories from './Components/SubCategories/SubCategories'
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard'
import AdminContent from './Pages/Content-Admin/content'
import AdminSubCategories from './subCategories-Admin/subCategories'
function App() {
  return (

   
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<SubCategories />} /> */}
        {/* <Route path="/" element={<AboutUs />} /> */}
        {/* <Route path="/" element={<FAQ />} /> */}
     
      <Route path='/admin' element={<AdminDashboard/>}>
        {/* <Route path='/products' element={<AdminProducts/>}/> */}
        <Route path='admin/content/' element={<AdminContent/>}/>
        <Route path='admin/subcategories/' element={<AdminSubCategories/>}/>
      </Route>
 
      </Routes>
    </Router>
  )
}

export default App;
