// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Feedback from './pages/Feedback';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Rooms from './pages/Rooms'
import Booking from './pages/Booking';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
         {/* Default route to Login */}
         <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Feedback />} />
        <Route path="/dashboard" element ={<Dashboard />} />
        <Route path="/rooms" element={<Rooms/>}/>
        <Route path="/booking" element={<Booking/>}/>
      </Routes>
    </Router>
  );
};

export default App;
