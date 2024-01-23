// NavBar.jsx
import  { useState,useEffect } from 'react';
import PrivacyPolicy from "../privacypolicy/privacypolicy";
import TermsAndConditions from "../termsandconditions/termsandconditions";
import ReturnPolicy from "../returnpolicy/returnpolicy";
import './navbarpolicies.css'

const NavBar = ({data}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect (()=>{
    console.log("data from navbar policy ",data)
    if( data !== null){
      handleItemClick(data)
    }
  },[data])



  return (
    <div>
      <nav>
        <ul className='navpolicies'>
          <li onClick={() => handleItemClick('privacy-policy')}>
            Privacy Policy
          </li>
          <li onClick={() => handleItemClick('terms-and-conditions')}>
            Terms and Conditions
          </li>
          <li onClick={() => handleItemClick('return-policy')}>
            Return Policy
          </li>
        </ul>
      </nav>
      {selectedItem === 'privacy-policy' && <PrivacyPolicy />}
      {selectedItem === 'terms-and-conditions' && <TermsAndConditions />}
      {selectedItem === 'return-policy' && <ReturnPolicy />}
    </div>
  );
};

export default NavBar;
