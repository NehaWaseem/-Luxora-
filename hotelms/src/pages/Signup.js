import React from 'react';
import './Signup.css';
import SignupForm from './SignupForm';
import SideComponent from './SideComponent';

const Signup = () => {
  return (
    <div className="signup-page">
      <SideComponent/>
      <SignupForm />
    </div>
  );
};

export default Signup;
