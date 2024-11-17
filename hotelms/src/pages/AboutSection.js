import React from 'react';
import './home.css';

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-us">
        <h2>Rooms</h2>
        <h3>Experience the Comfort</h3>
        <p>
          Safety and comfort are key factors in leisure stays these days. We
          assure you of medical-grade stringent sanitation procedures in
          preparing our rooms for guests so you can stay with us with peace of
          mind.
        </p>
        <p>
          Our hotel features elegantly designed rooms, fine dining restaurants,
          and state-of-the-art facilities, including a fully-equipped fitness
          center, a relaxing spa, and a stunning rooftop pool with panoramic
          views of the city skyline.
        </p>
      </div>
      <div className="image-slider">
        <div className="slider">
          {[
            'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600',
          ].map((src, index) => (
            <img key={index} src={src} alt={`Hotel Image ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
