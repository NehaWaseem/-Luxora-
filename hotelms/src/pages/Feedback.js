import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [userID, setUserID] = useState(""); // User ID input
  const [bookingID, setBookingID] = useState(""); // Booking ID input
  const [comments, setComments] = useState(""); // Comments input
  const [rating, setRating] = useState(3); // Star rating (default to 3)
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare feedback data
    const feedbackData = {
      userID,
      bookingID,
      comments,
      rating,
      createdDate: new Date().toISOString(),
    };

    console.log("Feedback Submitted:", feedbackData);

    // Reset the form after submission
    setSubmitted(true);
  };

  return (
    <div className="feedback-page">
      <div className="form">
        {!submitted ? (
          <form className="feedback-form" onSubmit={handleSubmit}>
            <h1>Submit Feedback</h1>

            {/* User ID Field */}
            <label htmlFor="userID">User ID</label>
            <input
              type="text"
              id="userID"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
              required
            />

            {/* Booking ID Field */}
            <label htmlFor="bookingID">Booking ID</label>
            <input
              type="text"
              id="bookingID"
              value={bookingID}
              onChange={(e) => setBookingID(e.target.value)}
              required
            />

            {/* Star Rating */}
            <label htmlFor="rating">Rating (1 to 5 stars)</label>
            <input
              type="range"
              id="rating"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            />
            <div className="star-rating-display">{rating} ★</div>

            {/* Feedback Text Area */}
            <label htmlFor="comments">Your Feedback</label>
            <textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              required
            />

            {/* Submit Button */}
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        ) : (
          <div className="thank-you-message">
            <h2>Thank you for your feedback!</h2>
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
