import React, { useState } from 'react';
import "./checkoutForm.css";
import Navbar from './Navbar/Navbar';
const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    PhoneNumber: '',
 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form submitted:', formData);
    
  };

return (
    <div className='checkout container'>
    <Navbar/>
    <form className="checkout-form" onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Address:
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </label>

    
      <label>
         Phone Number:
        <input
          type="text"
          name="PhoneNumber"
          value={formData.PhoneNumber}
          onChange={handleChange}
          required
        />
      </label>

     

      <button type="submit" className="submit-button">
        Guest Checkout
      </button>
    </form>
    </div>
  );
};

export default CheckoutForm;