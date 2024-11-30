import React from 'react';
import './Login.css'; 
import Loginform from './LoginForm';  

function Login() {
  return (
    <div className="login-container">
     
      <div className="login-image">
        <img
          src="https://static-new.lhw.com/HotelImages/Final/LW0430/lw0430_177729896_720x450.jpg"
          alt="Luxora Hotel"
          className="login-img"
        />
      </div>

      {}
      <Loginform />  {}
    </div>
  );
}

export default Login;  
