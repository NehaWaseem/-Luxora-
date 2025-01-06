import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Feedback.css";

const Feedback = () => {
  const location = useLocation();
  const room = location.state;

  const [userID, setUserID] = useState(""); // User ID input
  const [bookingID, setBookingID] = useState(""); // Booking ID input
  const [comments, setComments] = useState(""); // Comments input
  const [rating, setRating] = useState(1); // Star rating (default to 3)
  const [createdDate, setCreatedDate] = useState(""); // Current Date (Created Date)
  const [submitted, setSubmitted] = useState(false);

  // Retrieve userID from localStorage
  useEffect(() => {
    const storedUserID = localStorage.getItem("userId");
    if (storedUserID) {
      setUserID(storedUserID); // Set the retrieved userID
    } else {
      console.error("No userId found in localStorage.");
    }

    // Set the current date for the createdDate (in yyyy-mm-dd format)
    const currentDate = new Date().toISOString().split("T")[0];
    setCreatedDate(currentDate);
  }, []);

  // Handle feedback submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare feedback data
    const feedbackData = {
      userID,
      bookingID,
      comments,
      rating,
      createdDate, // Use current date
    };

    console.log("Feedback Submitted:", feedbackData);

    // Make a request to save the feedback to the backend
    try {
      const response = await fetch("http://localhost:3000/submit-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.status === 200) {
        setSubmitted(true);
      } else {
        alert("Error submitting feedback");
      }
    } catch (err) {
      console.error("Error during feedback submission:", err);
    }
  };

  return (
    <div className="feedback-page">
      <div className="form">
        {!submitted ? (
          <form className="feedback-form" onSubmit={handleSubmit}>
            <h1>Submit Feedback</h1>

            {/* User ID Field (with placeholder) */}
            <label htmlFor="userID">User ID</label>
            <input
              type="text"
              id="userID"
              value={userID || ""} // Display the userID retrieved from localStorage
              placeholder="User ID (auto-filled)"
              readOnly // Make the field read-only since the userID is auto-filled
            />

            {/* Booking ID Field */}
            <label htmlFor="bookingID">Booking ID</label>
            <input
              type="text"
              id="bookingID"
              value={bookingID || ""} // Set the bookingID entered by the user
              onChange={(e) => setBookingID(e.target.value)} // Allow the user to input booking ID
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

            {/* Created Date Field */}
            <label htmlFor="createdDate">Created Date</label>
            <input
              type="date"
              id="createdDate"
              value={createdDate} // Set the current date here
              readOnly // Make this field read-only
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
