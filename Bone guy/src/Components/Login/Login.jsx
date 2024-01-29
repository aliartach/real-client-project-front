import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import instance from '../../api';

const Login = () => {
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await instance.post('/api/admin/login', login);
      const { token } = response.data;
      if (token) {
        sessionStorage.setItem('jwt', token)
        navigate('/'); // To change it to admin dashboard once done.
      }
    } catch (error) {
      const errorMessage = error.response.data.error || 'Login failed. Please try again.'
      toast.error(errorMessage);
    }
  }
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar />
      <div className='login-wrapper'>
        <div className="login-body">
          <h1>Log In</h1>
          <form className='login-form' onSubmit={handleLogin}>
            <label htmlFor="username">Username</label>
            <input 
            type="text" 
            id='username'
            name="username"
            value={login.username}
            onChange={handleInputChange}
            required 
            />
            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                id='password'
                name="password"
                value={login.password}
                onChange={handleInputChange}
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
      <ToastContainer />
    </>
  );
};

export default Login;
