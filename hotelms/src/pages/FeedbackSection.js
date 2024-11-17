
import React, { useState, useEffect } from 'react';
import './home.css';

function FeedbackSection() {
  const [feedbackIndex, setFeedbackIndex] = useState(0);
  const reviews = [
    '"Amazing experience! Highly recommend!" - Jane Doe',
    '"Great service and beautiful rooms!" - John Smith',
    '"Best hotel experience ever!" - Alice Cooper',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFeedbackIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section id="feedback" className="feedback-section">
      <h3>Customer Feedback</h3>
      <div className="feedback-box">
        <p>{reviews[feedbackIndex]}</p>
        <button>Give Feedback</button>
      </div>
    </section>
  );
}

export default FeedbackSection;
