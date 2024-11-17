import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  
import logoImage from './luxora.png'

const Navbar = () => {
  return (
    <nav className="main-navbar">
      <div className="navbar-holder">
      <div className="logo">
          <Link to="/">
            <img src={logoImage} alt="" className="logo-img" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="nav-link">Signup</Link>
          </li>
          <li>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Feedback</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
