import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    console.log('Retrieved userId from localStorage:', storedUserId);

    if (storedUserId) {
      setUserId(storedUserId);

      // Fetch user details
      fetch(`http://localhost:3000/user/${storedUserId}`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => console.error('Error fetching user details:', error));
    } else {
      console.error('No userId found in localStorage.');
    }
  }, []);

  return (
    <div className="user-dashboard">
      {/* Narrow Image Container */}
      <div className="image-banner">
        <img
          src="/lobby.webp" // Replace with the actual path to your image
          alt="Dashboard Banner"
          className="banner-image"
        />
      </div>

      <div className="dashboard-form">
        <h2>User Dashboard</h2>

        {/* User Image */}
        <div className="user-image-container">
          <img
            src={user?.profileImage || '/icons.png'} // Replace with actual profile image path
            alt="User Profile"
            className="user-image"
          />
        </div>

        {/* Partition Line */}
        <div className="partition-line"></div>

        {/* User Details */}
        {user ? (
          <div className="user-details">
            <p><strong>User ID:</strong> {userId}</p>
            <p><strong>Name:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address}</p>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}

         {/* Buttons Section */}
      <div className="action-buttons">
        <button>Edit Profile</button>
        <button>Reservation</button>
        <button>Give Feedback</button>
        <button>Get Information</button>
      </div>
      </div>

     
    </div>
  );
};

export default Dashboard;
