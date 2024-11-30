import React from 'react';
import './Home.css';

function SearchRoomsSection() {
  return (
    <section id="rooms" className="search-rooms-section">
      <div className="search-booking">
        <h2>Search for Rooms</h2>
       
        <div className="search-options">
          Check-in date
          <input type="date" placeholder="Check-in Date" aria-label="Check-in Date" />
          Check-out date
          <input type="date" placeholder="Check-out Date" aria-label="Check-out Date" />
          <select>
            <option value="" disabled selected>
              Select number of Guests
            </option>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
          </select>
          <select>
            <option value="" disabled selected>
              Select number of beds
            </option>
            <option value="1">1 Bed</option>
            <option value="2">2 Beds</option>
          </select>
          <select>
            <option value="" disabled selected>
              Select number of baths
            </option>
            <option value="1">1 Bath</option>
            <option value="2">2 Baths</option>
          </select>
        </div>
        <div className="search-button-container">
          <button>Search</button>
        </div>
      </div>
    </section>
  );
}

export default SearchRoomsSection;
