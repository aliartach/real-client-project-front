import React, { useState } from 'react';
import "./CheckoutForm.css";
import Navbar from './Navbar/Navbar';
const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    // email: '',
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
      Customer Name:
        <input
          type="text"
          name="CustomerName"
          value={formData.CustomerName}
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
      {/* <label>
        Payment method:
        <input
          type="radio"
          name="PaymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          required
        />
      </label> */}
     

      <button type="submit" className="submit-button">
        Guest Checkout
      </button>
    </form>
    </div>
  );
};

export default CheckoutForm;