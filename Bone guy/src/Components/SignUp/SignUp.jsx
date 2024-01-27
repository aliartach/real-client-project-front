import React, { useState } from 'react';
import './SignUp.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar />
      <div className="signup-wrapper">
        <div className="signup-body">
          <h1>Sign Up</h1>
          <form className='signup-form'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />

            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
              />
              <span className="password-visibility-toggle" onClick={handleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            
            <label htmlFor="Confirm Password">Confirm Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                name="Confirm Password"
                required
              />
              <span className="password-visibility-toggle" onClick={handleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            
            <button type="submit" >SIGN UP</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;