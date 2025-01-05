
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function FeedbackSection() {
  const [feedbackIndex, setFeedbackIndex] = useState(0);
  const reviews = [
    '"Amazing experience! Highly recommend!" - Jane Doe',
    '"Great service and beautiful rooms!" - John Smith',
    '"Best hotel experience ever!" - Alice Cooper',
  ];

  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const interval = setInterval(() => {
      setFeedbackIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleFeedbackClick = () => {
    navigate('/contact'); // Navigate to the Feedback page
  };

  return (
    <section id="feedback" className="feedback-section">
      <h3>Customer Feedback</h3>
      <div className="feedback-box">
        <p>{reviews[feedbackIndex]}</p>
        <button  onClick={handleFeedbackClick} >Give Feedback</button>
      </div>
    </section>
  );
}

export default FeedbackSection;
