import React from 'react';
import { Rating } from '@mui/material';

const About = () => {
  return (
    <div className="about-us-page" style={{width:"100%"}}>
      {/* Hero Section */}
      <section
        className="hero-section_about"
        

      >
        <div className="hero-overlay">
          <h1>Welcome to LUXORA Hotel</h1>
          <p>Providing excellent services and comfort to all our guests.</p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Welcome to LUXORA Hotel. Our hotel streamlines the experience with efficient room reservations,
          guest check-ins and check-outs, and room management. We provide real-time availability, room allocation,
          and billing management to ensure a seamless and memorable stay for every guest.
        </p>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <h2>What Our Guests Say</h2>
        <div className="reviews-container">
          {[
            { name: 'Ali Khan', review: 'Amazing experience! The staff was very friendly and accommodating.', rating: 5 },
            { name: 'Sana Ahmed', review: 'Loved the ambiance and services. Highly recommend it!', rating: 4.5 },
            { name: 'Zeeshan Malik', review: 'Great stay with excellent facilities and food.', rating: 4 },
            { name: 'Ayesha Sheikh', review: 'Perfect getaway destination! Will visit again.', rating: 5 },
            ,
            { name: 'Ali Sheikh', review: 'Perfect getaway destination! Must Visit.', rating: 5 }
            ,
            { name: 'Khawaja Ali', review: 'Perfect place! Will visit again.', rating: 5 }
            ,
            { name: 'Manan Ali', review: 'Perfect place! Will visit again.', rating: 5 }
            ,
            { name: 'Taimur Ali', review: 'Perfect place! Will visit again.', rating: 5 }
            ,
            { name: 'Raja Ali', review: 'Perfect place! Will visit again.', rating: 5 }
            ,
            { name: 'Hanan Ali', review: 'Perfect place! Will visit again.', rating: 5 }
          ].map((review, index) => (
            <div key={index} className="review-box">
              <h3>{review.name}</h3>
              <p>{review.review}</p>
              <Rating value={review.rating} precision={0.5} readOnly />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
