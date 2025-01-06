import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import './LoginForm.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';  // Import axios for making HTTP requests

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');  // To display errors if any

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if username and password are not empty
    if (!username || !password) {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    try {
      // Send the username and password to the backend for authentication
      const response = await axios.post('http://localhost:3000/login', { username, password });

      // Handle the response if login is successful
      if (response.status === 200) {
        const { userId } = response.data; // Extract userId from the response
        alert('Authentication successful! LOGGED IN!');

        // Save the userId to localStorage
        localStorage.setItem('userId', userId);
        console.log('User ID saved to localStorage:', userId);

        // Navigate to the dashboard
        navigate('/home');
      }
    } catch (err) {
      // Log the error to get more details
      console.error('Login failed:', err.response ? err.response.data : err);
      setErrorMessage(err.response ? err.response.data.message : 'Unknown error occurred. Please try again.');
    }
  };

  // Navigate to the sign-up page
  const registerClick = () => {
    navigate('/signUp');
  };

  return (
    <div className="login-form-container">
      <form className="login-form">
        <h1>Login</h1>

        {/* Display error message if login fails */}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="button" onClick={handleLogin}>
          Login
        </button>

        <div className="register-link">
          <p>
            Don't have an account?{' '}
            <Link to="/signUp">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
