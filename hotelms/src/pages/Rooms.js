import React from 'react';
import './Rooms.css';
import ReactPlayer from 'react-player';

const flashcards = [
  {
    id: 1,
    roomNo: '101',
    image: '/hero-background.jpeg',
    description: 'A cozy room with a queen-sized bed and a beautiful view.',
    status: 'Available',
  },
  {
    id: 2,
    roomNo: '102',
    image: 'room2.jpg',
    description: 'Spacious room with modern amenities and a private balcony.',
    status: 'Booked',
  },
  {
    id: 3,
    roomNo: '103',
    image: 'room3.jpg',
    description: 'Luxurious suite with a king-sized bed and a jacuzzi.',
    status: 'Available',
  },
  {
    id: 4,
    roomNo: '101',
    image: '/hero-background.jpeg',
    description: 'A cozy room with a queen-sized bed and a beautiful view.',
    status: 'Available',
  },
  {
    id: 5,
    roomNo: '102',
    image: 'room2.jpg',
    description: 'Spacious room with modern amenities and a private balcony.',
    status: 'Booked',
  },
  {
    id: 6,
    roomNo: '103',
    image: 'room3.jpg',
    description: 'Luxurious suite with a king-sized bed and a jacuzzi.',
    status: 'Available',
  },
  // Add more room data here
];

function Rooms() {
  return (
    <div className="rooms-page">
      {/* Background Video */}
      <div className="background-video">
        <ReactPlayer
          url="/vid2.mp4"  // Path to your video file
          playing
          muted
          loop
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            objectFit: 'cover',
            zIndex: -1,
          }}
        />
      </div>

      {/* Flashcards Section */}
      <div className="flashcards-container">
        {flashcards.map((card) => (
          <div key={card.id} className="flashcard">
            {/* Flashcard Content */}
            <div className="flashcard-content">
              <img src={card.image} alt={`Room ${card.id}`} className="flashcard-image" />
              <p className="flashcard-description">{card.description}</p>
              <div className="flashcard-info">
                <span className="room-no">Room No: {card.roomNo}</span>
                <span className="status">Status: {card.status}</span>
              </div>
            </div>

            {/* Booking Button Below Description */}
            <button className="booking-button">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
