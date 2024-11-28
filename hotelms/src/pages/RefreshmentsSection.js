import React from 'react';
import './home.css';


function RefreshmentsSection() {
  return (
    <section id="refreshments" className="refreshments-section">
      <div className="image-slider">
        <div className="slider">
          {[
            'https://images.unsplash.com/photo-1522726336270-3a0053210f06?w=500&auto=format&fit=crop&q=60',
            'https://plus.unsplash.com/premium_photo-1661479325041-bd4af6dd7833?w=500&auto=format&fit=crop&q=60',
            'https://images.pexels.com/photos/3026806/pexels-photo-3026806.jpeg?auto=compress&cs=tinysrgb&w=600',
          ].map((src, index) => (
            <img key={index} src={src} alt={`Refreshment Image ${index + 1}`} />
          ))}
        </div>
      </div>
      <div className="refreshments-description">
        <h2>Refreshments</h2>
        <br></br>
        <h3>Experience The Flavors</h3>
        <br></br>
        <p>
          Enjoy a wide range of refreshments at our hotel, from handcrafted
          cocktails to gourmet coffee and tea selections. Our in-house café
          offers a perfect setting to unwind and savor delicious treats.
        </p>
      </div>
    </section>
  );
}


export default RefreshmentsSection;