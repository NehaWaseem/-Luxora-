import React from "react";
import "./Popular.css";

function Popular() {
  const items = [
    { img: "/spaaa.webp", title: " Full-service spas with a wide range of treatments, including massages, facials, body wraps, and wellness therapies" },
    { img: "/amenities.webp", title: "Luxury toiletries, plush bathrobes, slippers, and fine-quality bathroom fixtures. In-room espresso machines, premium snacks" },
    { img: "/roomservice.webp", title: "High-end restaurants offering world-class cuisine prepared by renowned chefs, with exclusive menus, private dining experiences, and wine pairings" },
    { img: "/security.webp", title: "Exclusive suites or private villas, with heightened security measures to ensure guest safety and privacy" },
  ];

  return (
    <section id="popular" className="popular-items">
      <h2>Offered Luxuries</h2>
      <div className="items-grid">
        {items.map((item, index) => (
          <div key={index} className="item-card">
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Popular;
