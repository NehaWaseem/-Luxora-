import React from 'react';
import './Home.css';


function FeaturedRoomsSection() {
  const rooms = [
    {
      title: 'Deluxe Room',
      img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&auto=format&fit=crop&q=60',
      description: 'A luxurious room with all amenities and stunning views.',
    },
    {
      title: 'Executive Suite',
      img: 'https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?w=500&auto=format&fit=crop&q=60',
      description: 'Spacious suite with a separate living area, perfect for business stays.',
    },
    {
      title: 'Presidential Suite',
      img: 'https://plus.unsplash.com/premium_photo-1661884238187-1c274b3c3413?w=500&auto=format&fit=crop&q=60',
      description: 'The pinnacle of luxury with premium services and breathtaking views.',
    },
  ];


  return (
    <section id="featured-rooms" className="featured-rooms-section">
      <h3>Featured Rooms</h3>
      <div className="room-slider">
        {rooms.map((room, index) => (
          <div className="room" key={index}>
            <img src={room.img} alt={`${room.title}`} />
            <div className="room-content">
              <h4>{room.title}</h4>
              <p>{room.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export default FeaturedRoomsSection;
