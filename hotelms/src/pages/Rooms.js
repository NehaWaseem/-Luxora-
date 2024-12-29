import React from 'react';
import './Rooms.css';

const flashcards = [
  {
    id: 1,
    roomNo: '101',
    image: '/luxury.webp',
    description: 'A cozy room with a queen-sized bed and a beautiful view.',
    status: 'Available',
  },
  {
    id: 2,
    roomNo: '102',
    image: '/luxury.webp',
    description: 'Spacious room with modern amenities and a private balcony.',
    status: 'Booked',
  },
  {
    id: 3,
    roomNo: '103',
    image: '/luxury.webp',
    description: 'Luxurious suite with a king-sized bed and a jacuzzi and great ambiance',
    status: 'Available',
  },
  // Add more room data as needed
  {
    id: 1,
    roomNo: '101',
    image: '/luxury.webp',
    description: 'A cozy room with a queen-sized bed and a beautiful view.',
    status: 'Available',
  },
  {
    id: 2,
    roomNo: '102',
    image: '/luxury.webp',
    description: 'Spacious room with modern amenities and a private balcony.',
    status: 'Booked',
  },
  {
    id: 3,
    roomNo: '103',
    image: '/luxury.webp',
    description: 'Luxurious suite with a king-sized bed and a jacuzzi and great ambiance',
    status: 'Available',
  },
];

function Rooms() {
  return (
    <div className="rooms-page">
      {/* Background Image */}
      <div
        className="background-image"
        style={{
          backgroundImage: `url('/rooms.jpg')`, // Ensure the image is in the 'public' folder
        }}
      ></div>

      {/* Flashcards Section */}
      <div className="flashcards-container">
        {flashcards.map((card) => (
          <div key={card.id} className="flashcard">
            <div className="flashcard-content">
              <img
                src={card.image}
                alt={`Room ${card.id}`}
                className="flashcard-image"
              />
              <p className="flashcard-description">{card.description}</p>
              <div className="flashcard-info">
                <span className="room-no">Room No: {card.roomNo}</span>
                <span className="status">Status: {card.status}</span>
              </div>
            </div>
            <button className="booking-button">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
