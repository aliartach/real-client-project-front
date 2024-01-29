import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignUp.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import instance from '../../api';

const SignUp = () => {
  const [signUp, setSignUp] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await instance.post('/api/admin/register', signUp)
      console.log(response)
      setSignUp({
        username: '',
        password: '',
        confirmPassword: '',
      });
      toast.success('Sign up successful! Redirecting to login page...', {
        autoClose:2500,
      });
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      // console.error(error.response.data)
      const errorMessage = error.response.data.message || 'Sign up failed. Please try again.'
      toast.error(errorMessage);
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar />
      <div className="signup-wrapper">
        <div className="signup-body">
          <h1>Sign Up</h1>
          <form className='signup-form' onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id='username'
              name="username"
              value={signUp.username}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                id='password'
                name="password"
                value={signUp.password}
                onChange={handleInputChange}
                required
              />
              <span className="password-visibility-toggle" onClick={handleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                id='confirmPassword'
                name="confirmPassword"
                value={signUp.confirmPassword}
                onChange={handleInputChange}
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
      <ToastContainer />
    </>
  );
}

export default SignUp;