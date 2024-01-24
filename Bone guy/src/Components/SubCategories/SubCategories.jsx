import { useState, useEffect } from 'react';
import './SubCategories.css';
import instance from '../../api';
import { Link } from 'react-router-dom';

const SubCategories = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const closePopup = () => {
    setPopupVisible(false);
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
          <button onClick={togglePopup}>Cats & Dogs</button>
          <button onClick={togglePopup}>Dogs</button>
          {isPopupVisible && (
            <div className="overlay" onClick={closePopup}>
              <div className="popup">
                <div className="subcategories-sections">
                  {subCategories.map((category, _id) => (
                    <Link key={category._id} to={`/product/${category._id}`} className='subcategories-sections-icon-box' target='_blank'>
                      <div className="icon-box">
                        <img src={`${instance.defaults.baseURL}/${category.icon}`} alt="icon" />
                        <span className="text">{category.name}</span>
                      </div></Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <p>Whether you need to train or pamper your dog and cat, or just give them something to chew on to help them calm down, stimulate their brain, or promote their dental hygiene: “The bone guy offers you a wide range of tasty treats to keep every dog and cat begs for more”.</p>
      <div className="subcategories-sections">
        {subCategories.map((category, _id) => (
          <Link key={category._id} to={`/product/${category._id}`} className='subcategories-sections-icon-box' target='_blank'>
            <div className="icon-box">
              <img src={`${instance.defaults.baseURL}/${category.icon}`} alt="icon" />
              <span className="text">{category.name}</span>
            </div></Link>
        ))}
      </div>
    </div>
  );
}

export default SubCategories;