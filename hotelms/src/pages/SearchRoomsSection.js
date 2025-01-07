import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';



function SearchRoomsSection() {

  const navigate = useNavigate();

  const handleSearch = () =>{
    navigate('/rooms')
  }
  return (
    <section id="rooms" className="search-rooms-section">
      <div className="search-booking">
        <h2>Search for Rooms</h2>
       
        <div className="search-button-container">
          <button onClick = {handleSearch}>Search</button>
        </div>
      </div>
    </section>
  );
}

export default SearchRoomsSection;
