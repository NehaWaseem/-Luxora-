import React from 'react';
import { useLocation } from 'react-router-dom';

function Booking() {
  const location = useLocation();
  const room = location.state;

  return (
    <div className="booking-page">
      <h1>Booking Page</h1>
      {room ? (
        <div className="room-details">
          <h2>Room No: {room.roomNo}</h2>
          <p>{room.description}</p>
          <img src={room.image} alt={`Room ${room.roomNo}`} />
          <p>Status: {room.status}</p>
          {/* Add booking form here */}
        </div>
      ) : (
        <p>No room selected.</p>
      )}
    </div>
  );
}

export default Booking;
