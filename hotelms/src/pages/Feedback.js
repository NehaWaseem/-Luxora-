import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [sentiment, setSentiment] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="feedback-page">
      <div className="form">
        {!submitted ? (
          <form className="feedback-form" onSubmit={handleSubmit}>
            <h1>Submit Feedback</h1>

            {/* Name Field */}
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            {/* Star Rating */}
            <label htmlFor="rating">Rating</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setRating(star)}
                  className={star <= rating ? "star filled" : "star"}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Sentiment Selection */}
            <label htmlFor="sentiment">How was your experience?</label>
            <div className="sentiment-options">
              {["happy", "neutral", "sad"].map((emotion) => (
                <span
                  key={emotion}
                  className={`sentiment ${sentiment === emotion ? "selected" : ""}`}
                  onClick={() => setSentiment(emotion)}
                >
                  {emotion === "happy" ? "😊" : emotion === "neutral" ? "😐" : "😞"}
                </span>
              ))}
            </div>

            {/* Feedback Text Area */}
            <label htmlFor="feedback">Your Feedback</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />

            {/* Submit Button */}
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        ) : (
          <div className="thank-you-message">
            <h2>Thank you for your feedback, {name}!</h2>
            <p>We appreciate your input and look forward to improving our services.</p>
          </div>
        )}
      </div>

      {/* Feedback Image */}
      <div className="image">
        <img
          className="feedback_img"
          src="feedbackimg.webp"
          alt="Feedback Illustration"
        />
      </div>
    </div>
  );
};

export default Feedback;
