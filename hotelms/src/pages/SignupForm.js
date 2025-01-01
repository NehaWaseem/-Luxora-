import React from 'react';
import './SignupForm.css';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {

  const navigate = useNavigate();

  // handling function 
  const handleSignup = (e) =>{

    e.preventDefault();
    alert('Account created successfully ! ');
    navigate('/home');
  };


  return (
    <div className="signup-form">
      <h2>Create Account</h2>
    
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email or Phone no." required />
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <div className="terms">
          <input type="checkbox" />
          <label>Accept the terms & privacy policy</label>
        </div>
        <button type="submit" className="submit-button" onClick={handleSignup}>Sign Up</button>
      </form>
     
      <p className="login-link">
        Already have an account?{' '}
        <a
          href="/login"
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            navigate('/login'); 
          }}
        >
          Sign In
        </a>
      </p>

    </div>
  );
};

export default SignupForm;
