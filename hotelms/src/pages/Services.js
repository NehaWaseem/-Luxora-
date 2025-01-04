import React from "react";
import "./Services.css";

function Services() {
  const services = [
    { 
      title: "Luxury Bedrooms", 
      description: "Each space is adorned with plush furnishings, state-of-the-art amenities, and breathtaking views, offering the perfect retreat for rest and rejuvenation.", 
      image: "/bedroom.webp", 
      link: "#" 
    },
    { 
      title: "Majestic Celebrations", 
      description: "Make your special moments unforgettable with our majestic celebration spaces. Whether it's a grand wedding, a lavish party, or a corporate gala, our venues combine timeless elegance", 
      image: "/celebrate.webp", 
      link: "#" 
    },
    { 
      title: "Fine Dining", 
      description: "From gourmet delicacies to world-class beverages, every dish is a masterpiece crafted by our skilled chefs. Relish the harmony of flavors in a sophisticated ambiance", 
      image: "/dine.webp", 
      link: "#" 
    },
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img 
              src={service.image} 
              alt={service.title} 
              className="service-image" 
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
