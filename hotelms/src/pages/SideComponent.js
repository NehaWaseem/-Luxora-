import React from 'react';
import './SideComponent.css';

const SideComponent = () => {
  return (
    <div className="container">
      <div className="image-side">
        {/* You can add an img tag if you'd like a direct img instead of background */}
        {/* <img src="your-image-url.jpg" alt="Side Image" className="side-image" /> */}
      </div>
      <div className="content-side">
        <h1 className='side'>Luxora</h1>

        <p> 
          Where luxury meets you ...
        </p>

      </div>
    </div>
  );
};

export default SideComponent;
