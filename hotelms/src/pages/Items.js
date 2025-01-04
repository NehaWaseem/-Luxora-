import React from "react";
import "./Items.css";

function Items() {
  return (
    <section className="gift-ideas">
      <div className="gift-container">
        {/* Image on the left */}
        <div className="gift-image">
          <img src="/h.png" alt="Gift Ideas" />
        </div>

        {/* Content on the right */}
        <div className="gift-content">
          <h2>Our Mission</h2>
          <p>
          Our mission is to provide an unparalleled experience of luxury, comfort, and sophistication at our hotel, where every guest is treated to exceptional service, world-class amenities, and a tranquil atmosphere that fosters relaxation and rejuvenation. We are committed to creating an exclusive retreat where attention to detail, personalized service, and elegant design come together seamlessly to provide a memorable stay. Whether you are here for business or leisure, we aim to exceed your expectations and deliver an experience that speaks to the highest standards of excellence in hospitality. Our vision is to be the epitome of luxury, offering not just a place to stay, but a sanctuary where every moment is crafted to perfection.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Items;
