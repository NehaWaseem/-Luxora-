import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false); // State for showing the modal
  const [editUser, setEditUser] = useState(null); // State for editable user data

  const navigate = useNavigate();

  // Fetch userId from localStorage and retrieve user details
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
          setEditUser(data); // Initialize editable user data
        })
        .catch((error) => console.error('Error fetching user details:', error));
    } else {
      console.error('No userId found in localStorage.');
    }
  }, []);

  // Handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle update user details
  const handleUpdate = () => {
    if (!userId) {
      console.error('No userId available for update.');
      return;
    }

    // Include userId in the request body
    const updatedUser = { ...editUser, userId: parseInt(userId) };

    fetch(`http://localhost:3000/update-user`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to update user details');
        }
        return response.json();
      })
      .then((data) => {
        alert('User details updated successfully!');
        setUser(updatedUser); // Update the user details in the dashboard
        setShowEditModal(false); // Close the modal
      })
      .catch((error) => console.error('Error updating user details:', error));
  };

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
          <button onClick={() => setShowEditModal(true)}>Edit Profile</button>
          <button onClick={() => navigate('/rooms')}>Reservation</button>
          <button onClick={() => navigate('/about')}>Get Information</button>
          <button onClick={() => navigate('/contact')}>Give Feedback</button>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Profile</h3>
            <form>
              <label>
                Name:
                <input
                  type="text"
                  name="username"
                  value={editUser?.username || ''}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={editUser?.email || ''}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Phone:
                <input
                  type="tel"
                  name="phone"
                  value={editUser?.phone || ''}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  value={editUser?.address || ''}
                  onChange={handleInputChange}
                />
              </label>
              <div className="modal-buttons">
                <button type="button" onClick={handleUpdate}>
                  Update
                </button>
                <button type="button" onClick={() => setShowEditModal(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
