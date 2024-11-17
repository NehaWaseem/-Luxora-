import React from 'react';
import './Dashboard.css';

const Dashboard= () => {
    const user = {
        firstName: 'Marusha',
        lastName: 'Malik',
        email: 'MarushaMalik@345.com',
        phone: '+1 234 567 890',
        address: 'Near Park view Villas ',
      };
    
      return (
        <div className="user-dashboard">
          <div className="dashboard-form">
            <h2>User Dashboard</h2>
            <div className="user-details">
              <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Address:</strong> {user.address}</p>
            </div>
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
