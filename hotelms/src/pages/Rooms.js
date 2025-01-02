import React from 'react';
import './Rooms.css';
import { useNavigate } from 'react-router-dom';

const flashcards = [
  {
    roomId: 1,
    image: '/luxury.webp',
    rtype: 'luxury suite',
    roomcapacity: 2,
    detail: 'Luxurious suite with a king-sized bed and jacuzzi.',
    priceperday: 200.000,
    roomstatus: 'available',
  },
  {
    roomId: 2,
    image: '/luxury.webp',
    rtype: 'regular room',
    roomcapacity: 4,
    detail: 'Spacious room with modern amenities and a private balcony.',
    priceperday: 150.000,
    roomstatus: 'booked',
  },
  {
    roomId: 3,
    image: '/luxury.webp',
    rtype: 'luxury suite',
    roomcapacity: 3,
    detail: 'Suite with excellent ambiance and a great view.',
    priceperday: 250.000,
    roomstatus: 'inuse',
  },
];

function Rooms() {
  const navigate = useNavigate();

  const handleBookingClick = (room) => {
    navigate('/booking', { state: room });
  };

   // Filter only available rooms
   const availableRooms = flashcards.filter((room) => room.roomstatus === 'available');


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
        {availableRooms.map((card) => (
          <div key={card.roomId} className="flashcard">
            <div className="flashcard-content">
              <img
                src="/luxury.webp"
                alt={`Room ${card.roomId}`}
                className="flashcard-image"
              />
              <p className="flashcard-description">{card.detail}</p>
              <div className="flashcard-info">
                <span className="room-no">Room Type: {card.rtype}</span>
                <span className="room-capacity">
                  Capacity: {card.roomcapacity} {card.roomcapacity > 1 ? 'people' : 'person'}
                </span>
                <span className="price-per-day">
                  Price per Day: ${card.priceperday.toFixed(2)}
                </span>
                <span className="status">Status: {card.roomstatus}</span>
              </div>
            </div>
            <button
              className="booking-button"
              onClick={() => handleBookingClick(card)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
