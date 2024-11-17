import React from 'react';
import './SignupForm.css';

const SignupForm = () => {
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
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
      <p className="login-link">
        Already have an account? <a href="/login">Sign In</a>
      </p>
    </div>
  );
};

export default SignupForm;
