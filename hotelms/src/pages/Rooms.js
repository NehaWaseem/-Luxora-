import React, { useEffect, useState } from 'react';
import './Rooms.css';
import { useNavigate } from 'react-router-dom';

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  // Fetch available rooms from the API when component mounts
  useEffect(() => {
    const fetchAvailableRooms = async () => {
      try {
        const response = await fetch('http://localhost:3000/available-rooms');
        const data = await response.json();

        if (response.ok) {
          setRooms(data);
        } else {
          console.error('Failed to fetch rooms:', data.message);
        }
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchAvailableRooms();
  }, []); // Empty dependency array to fetch only once on mount

  // Handle the booking button click
  const handleBookingClick = (room) => {
    navigate('/booking', { state: room });
  };

  // Function to determine the default image based on room type
  const getDefaultImage = (rtype) => {
    if (rtype === 'luxury suite') {
      return '/luxury.webp'; // Image for luxury suite
    }
    return '/regular.webp'; // Image for regular room
  };

  return (
    <div className="rooms-page">
      {/* Background Image */}
      <div
        className="background-image"
        style={{
          backgroundImage: `url('/rooms.jpg')`,
        }}
      ></div>

      {/* Flashcards Section */}
      <div className="flashcards-container">
        {rooms.length === 0 ? (
          <p>No available rooms at the moment.</p>
        ) : (
          rooms.map((card) => (
            <div key={card.roomId} className="flashcard">
              <div className="flashcard-content">
                {/* Room Image - Default image handling based on room type */}
                <img
                  src={getDefaultImage(card.rtype)} // Use the function to get the correct image
                  alt={`Room ${card.roomId}`}
                  className="flashcard-image"
                />
                <p className="flashcard-description">{card.detail}</p>
                <div className="flashcard-info">
                  <span className="room-no">Room Type: {card.rtype}</span>
                  <span className="room-capacity">
                    Capacity: {card.roomcapacity}{' '}
                    {card.roomcapacity > 1 ? 'people' : 'person'}
                  </span>
                  <span className="price-per-day">
                    Price per Day: ${card.priceperday.toFixed(2)}
                  </span>
                  <span className="status">
                    Status: {card.roomstatus === 'available' ? 'Available' : 'Unavailable'}
                  </span>
                </div>
              </div>
              <button
                className="booking-button"
                onClick={() => handleBookingClick(card)}
              >
                Book Now
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Rooms;
