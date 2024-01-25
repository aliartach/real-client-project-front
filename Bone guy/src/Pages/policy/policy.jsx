import {useLocation} from "react-router-dom"
import './policy.css'
import Navbarpolicie from "../../Components/navbarpolicies/navbarpolicies"
import Footer from "../../Components/Footer/Footer"
import Logo from "../../../public/logo.png";


const Policy = () => {
  const location = useLocation();
  const data = location?.state || null;

    return (
    <div>
    <div className="policylogo"><a href="/"><img  alt="logo" src={Logo}/> </a></div>
    
      <Navbarpolicie data={data}/>
      <Footer/>
    </div>
  )
}

export default Policy
