import { useState, useEffect } from 'react';
import './SubCategories.css';
import Training from '../assets/training.svg';
import Snacks from '../assets/snacks.svg';
import DentalChew from '../assets/dentalChew.svg';
import Confort from '../assets/confort.svg';
import BrainStimulationChew from '../assets/brainStimulationChew.svg';
import instance from '../api';
import { Link } from 'react-router-dom';
import { HttpStatusCode } from 'axios';

const SubCategories = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const response = await instance.get('/api/subcategory')
        console.log(response)
        if (response && response.data.subCategories) {
          setSubCategories(response.data.subCategories)
        }
      } catch (error) {
        console.error('Error fetching subCategories', error.message)
      }
    }
    fetchSubCategories();
  }, [])

  return (
    <div className='subcategories-wrapper'>
      <div className='subcategories-container'>
        <h1>TREATS FOR EVERY MOMENT</h1>
        <div>
          <button onClick={togglePopup} >Cats & Dogs</button>
          {isPopupOpen && (
            <div className="popup" role="dialog" aria-modal="true" aria-labelledby="popup-title">
              <div className="subcategories-sections">
                <Link to="/" className="subcategories-sections-icon-box">
                  <div className="icon-box">
                    <img src={Training} alt="" />
                    <span className="text">TRAINING</span>
                  </div></Link>
                <Link to="/" className="subcategories-sections-icon-box">
                  <div className="icon-box">
                    <img src={Snacks} alt="" />
                    <span className="text">SNACKS</span>
                  </div></Link>
                {/* <button onClick={togglePopup}>Close Pop-up</button> */}
              </div>
            </div>
          )}
          <button>Dogs</button>
        </div>
      </div>
      <p>Whether you need to train or pamper your dog and cat, or just give them something to chew on to help them calm down, stimulate their brain, or promote their dental hygiene: “The bone guy offers you a wide range of tasty treats to keep every dog and cat begs for more”.</p>
      <div className="subcategories-sections">
        {subCategories.map((category) => (
          <Link to="/" className="subcategories-sections-icon-box">
            <div key={category._id} className="icon-box">
              <img src={`${instance.defaults.baseURL}/${category.icon}`} alt="icon" />
              <span className="text">{category.name}</span>
            </div></Link>
        ))}
      </div>
    </div>
  );
}

export default SubCategories;