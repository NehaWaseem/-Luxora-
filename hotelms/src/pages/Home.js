import React from 'react';
import './Home.css'; // Import the CSS for styling
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import RefreshmentsSection from './RefreshmentsSection';
import SearchRoomsSection from './SearchRoomsSection';
import FeaturedRoomsSection from './FeaturedRoomsSection';
import FeedbackSection from './FeedbackSection';
import Footer from './Footer';


function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <HeroSection />


      {/* About Section */}
      <AboutSection />


      {/* Refreshments Section */}
      <RefreshmentsSection />


      {/* Search for Rooms Section */}
      <SearchRoomsSection />


      {/* Featured Rooms Section */}
      <FeaturedRoomsSection />


      {/* Feedback Section */}
      <FeedbackSection />


      {/* Footer */}
      <Footer/>
      
    </div>
  );
}


export default Home;