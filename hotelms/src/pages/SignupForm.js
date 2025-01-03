import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css';

const SignupForm = () => {
  const navigate = useNavigate();

  // Stating hooks for form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [upassword, setUpassword] = useState('');
  const [uaddress, setUaddress] = useState('');
  const [phonenum, setPhonenum] = useState('');
  const dateofreg = new Date().toISOString().split('T')[0]; // Current date
  const [usertype] = useState('Guest'); // Fixed as 'Guest'

  // Handling form submission
  const handleSignup = async (e) => {
    e.preventDefault();

    if (!username || !email || !upassword) {
      alert('Please fill in all required fields.');
      return;
    }

    // Preparing data for backend
    const userData = {
      username,
      email,
      upassword,
      uaddress,
      phonenum,
      dateofreg,
      usertype,
    };

    try {
      // Sending data to backend
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Account created successfully! Your User ID is ${data.userId}`);
        navigate('/home'); 
      } else if (response.status === 404) {
        alert('Signup route not found. Please check your backend configuration.');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to connect to the server. Please ensure the backend is running and try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create an Account</h2>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={upassword}
            onChange={(e) => setUpassword(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={uaddress}
            onChange={(e) => setUaddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phonenum}
            onChange={(e) => setPhonenum(e.target.value)}
          />

          {/* Date of Registration (disabled, auto-generated) */}
          <input
            type="date"
            value={dateofreg}
            disabled
          />

          {/* User Type (fixed as 'Guest') */}
          <input
            type="text"
            value={usertype}
            disabled
          />

          <div className="terms">
            <input type="checkbox" required />
            <label>Accept the terms & privacy policy</label>
          </div>

          <button type="submit" className="submit-button">Sign Up</button>
        </form>

        <p className="login-link">
          Already have an account?{' '}
          <a
            href="/login"
            onClick={(e) => {
              e.preventDefault();
              navigate('/login');
            }}
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
