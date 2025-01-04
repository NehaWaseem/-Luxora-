import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-us">
      <div className="contact-content">
        <div className="contact-details">
          <h2>Talk To Our Staff</h2>
          <p>Contact us to book your luxury stay at Luxora Hotels , where luxury meets you at your comfort</p>
          <div className="staff-info">
            <h3>Our Qualified Staff</h3>
            <p>Our qualified staff is the cornerstone of our service excellence. Each team member brings a wealth of experience, knowledge, and passion to ensure that your experience with us is seamless and unforgettable. From our highly trained chefs who create exquisite, world-class dishes to our skilled designers who curate personalized experiences, every staff member is dedicated to the highest standards of professionalism and attention to detail</p>
            <h4>Contact Details:</h4>
            <p>Email: contact@luxorahotel.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
        <div className="image-container">
          <img src="/staff.webp" alt="Qualified Staff" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
