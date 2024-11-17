// src/pages/Contact.js
import React from 'react';
import './Home.css'; // Import the CSS for styling
import HeroSection from './HeroSection'; // Import HeroSection as a separate component
import AboutSection from './AboutSection'; // Import AboutSection as a separate component
import FeedbackSection from './FeedbackSection'; // Import FeedbackSection as a separate component
import Footer from './Footer'; // Import Footer as a separate component

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Feedback Section */}
      <FeedbackSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;

