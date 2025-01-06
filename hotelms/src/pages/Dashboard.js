import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    console.log("Retrieved userId from localStorage:", storedUserId);

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
      <div className="dashboard-form">
        <h2>User Dashboard</h2>
        {user ? (
          <div className="user-details">
            <p><strong>User ID:</strong> {userId}</p>
            <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address}</p>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}
        <div className="action-buttons">
          <button>Reserve a Room</button>
          <button>Make a Payment</button>
          <button>Edit Profile</button>
          <button>View Reservations</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
