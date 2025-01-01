// LoginForm.js
import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import './LoginForm.css';
import { useNavigate , Link } from 'react-router-dom';
import { useState } from 'react';

const LoginForm = () => {


const navigate = useNavigate();
const [username,setUsername]= useState('');
const [password,setPassword]= useState('');

const handleLogin = (e)=>{

  e.preventDefault();

  //---> insert db authentication here (N)

  if(username === "LuxoraUser" && password ==="Luxora@5")
  {
    alert('Authentication successful  , LOGGED IN ! ');
    navigate('/');
  }
  else
  {
    alert('Invalid credentials entered !')
  }
};

const registerClick=()=>{

  navigate('/signUp');
}

  return (
    <div className="login-form-container">
      <form className="login-form">
        <h1>Login</h1>
        <div className="input-box">
          <input 
          type="text"
          placeholder="Username" 
          onChange={(e) => setUsername(e.target.value)}
          required/>
          <FaUser className="icon" />
        </div>

        <div className="input-box">
          <input 
          type="password" 
          placeholder="Password" 
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
            <Link to="/signup">Register</Link>
          </p>
        </div>

      </form>
    </div>
  );
};

export default LoginForm; 
