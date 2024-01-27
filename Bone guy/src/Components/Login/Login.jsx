import React, { useState } from 'react';
import './Login.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar />
      <div className='login-wrapper'>
        <div className="login-body">
          <h1>Log In</h1>
          <form className='login-form'>
            <label>Email</label>
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
            <button type="submit">LOG IN</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
