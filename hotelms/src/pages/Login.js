// Login.js
import React from 'react';
import './Login.css';  // Import the CSS for styling
import Loginform from './LoginForm';  // Default import (no curly braces)

function Login() {
  return (
    <div className="login-container">
      {/* Left side - Image */}
      <div className="login-image">
        <img
          src="https://static-new.lhw.com/HotelImages/Final/LW0430/lw0430_177729896_720x450.jpg"  // Update with your actual image path
          alt="Luxora Hotel"
          className="login-img"
        />
      </div>

      {/* Login Form */}
      <Loginform />  {/* Use the Loginform component here */}
    </div>
  );
}

export default Login;  // Ensure this is a default export
