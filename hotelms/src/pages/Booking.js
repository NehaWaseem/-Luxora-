import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Booking.css';

function Booking() {
  const location = useLocation();
  const room = location.state;

  const [checkOutDate, setCheckOutDate] = useState('');
  const [bookingDetails, setBookingDetails] = useState(null);
  const [nextBookingId, setNextBookingId] = useState(null);
  const [userId, setUserId] = useState(null); // Initialize userId as null
  const [roomId, setRoomId] = useState(room.roomId); // Default room ID
  const [checkInDate] = useState(new Date().toISOString().split('T')[0]); // Current date

  // Retrieve userId from localStorage and fetch maximum booking ID
  useEffect(() => {
    // Retrieve userId from localStorage
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId); // Set the retrieved userId
    } else {
      console.error('No userId found in localStorage.');
    }

    // Fetch maximum booking ID from the database
    const fetchMaxBookingId = async () => {
      try {
        const response = await fetch('http://localhost:3000/max-booking-id'); // Replace with your API endpoint
        const data = await response.json();
        if (response.ok) {
          setNextBookingId(data.maxBookingId + 1); // Increment maxBookingId by 1
        } else {
          console.error('Failed to fetch max booking ID:', data.message);
        }
      } catch (error) {
        console.error('Error fetching max booking ID:', error);
      }
    };

    fetchMaxBookingId();
  }, []);

  // Handle booking confirmation
  const handleConfirmBooking = async () => {
    const currentBookingDetails = {
      bookingId: nextBookingId,
      userId,
      roomId,
      bookingStatus: 'Booked',
      check_in_date: checkInDate,
      check_out_date: checkOutDate,
    };

    try {
      const response = await fetch('http://localhost:3000/create-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentBookingDetails),
      });

      if (response.ok) {
        setBookingDetails(currentBookingDetails);
        alert('Booking Confirmed!');
      } else {
        const errorData = await response.json();
        console.error('Failed to save booking:', errorData.message);
        alert('Failed to confirm booking. Please try again.');
      }
    } catch (error) {
      console.error('Error saving booking:', error);
      alert('An error occurred while confirming the booking.');
    }
  };

  return (
    <div className="booking-page">
      {/* New Image Container */}
      <div className="image-container">
        <h1 className="reservation-heading">Reservation</h1>
      </div>

      <div className="booking-content">
        {/* Booking Form (Left Side) */}
        <div className="booking-flashcard">
          <h2>Enter Booking Details</h2>
          <div className="form-group">
            <label htmlFor="bookingId">
              <strong>Booking ID:</strong>
            </label>
            <input type="text" id="bookingId" value={nextBookingId || ''} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="userId">
              <strong>User ID:</strong>
            </label>
            <input
              type="number"
              id="userId"
              value={userId || ''} // Display the userId retrieved from localStorage
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="roomId">
              <strong>Room ID:</strong>
            </label>
            <input type="text" id="roomId" value={roomId} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="checkInDate">
              <strong>Check-in Date:</strong>
            </label>
            <input type="text" id="checkInDate" value={checkInDate} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="checkOutDate">
              <strong>Check-out Date:</strong>
            </label>
            <input
              type="date"
              id="checkOutDate"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              min={checkInDate}
            />
          </div>
          <button
            className="confirm-booking-button"
            onClick={handleConfirmBooking}
            disabled={!checkOutDate || !nextBookingId}
          >
            Confirm Booking
          </button>
        </div>

        {/* Room Card Details (Right Side) */}
        <div className="room-details">
          <div className="room-card">
            <img
              src="/luxury.webp"
              alt={`Room ${room.roomId}`}
              className="room-image"
            />
            <div className="room-info">
              <h2>Room Details</h2>
              <p>
                <strong>Room ID:</strong> {room.roomId}
              </p>
              <p>
                <strong>Room Type:</strong> {room.rtype}
              </p>
              <p>
                <strong>Capacity:</strong> {room.roomcapacity}{' '}
                {room.roomcapacity > 1 ? 'people' : 'person'}
              </p>
              <p>
                <strong>Details:</strong> {room.detail}
              </p>
              <p>
                <strong>Price per Day:</strong> ${room.priceperday.toFixed(2)}
              </p>
              <p>
                <strong>Status:</strong> {room.roomstatus}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Display Confirmed Booking Details */}
      {bookingDetails && (
        <div className="confirmed-booking-details">
          <h2>Confirmed Booking</h2>
          <p>
            <strong>Booking ID:</strong> {bookingDetails.bookingId}
          </p>
          <p>
            <strong>User ID:</strong> {bookingDetails.userId}
          </p>
          <p>
            <strong>Room ID:</strong> {bookingDetails.roomId}
          </p>
          <p>
            <strong>Status:</strong> {bookingDetails.bookingStatus}
          </p>
          <p>
            <strong>Check-in Date:</strong> {bookingDetails.check_in_date}
          </p>
          <p>
            <strong>Check-out Date:</strong> {bookingDetails.check_out_date}
          </p>
        </div>
      )}
    </div>
  );
}

export default Booking;
