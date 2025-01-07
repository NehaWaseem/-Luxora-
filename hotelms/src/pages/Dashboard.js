import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
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

      // Fetch bookings for the user
      fetch(`http://localhost:3000/user/${storedUserId}/bookings`)
        .then((response) => response.json())
        .then((data) => setBookings(data))
        .catch((error) => console.error('Error fetching bookings:', error));

      // Fetch feedbacks for the user
      fetch(`http://localhost:3000/user/${storedUserId}/feedbacks`)
        .then((response) => response.json())
        .then((data) => setFeedbacks(data))
        .catch((error) => console.error('Error fetching feedbacks:', error));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
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
      .then(() => {
        alert('User details updated successfully!');
        setUser(updatedUser); // Update the user details in the dashboard
        setShowEditModal(false); // Close the modal
      })
      .catch((error) => console.error('Error updating user details:', error));
  };

  return (
    <div className="user-dashboard">
      <div className="image-banner">
        <img src="/lobby.webp" alt="Dashboard Banner" className="banner-image" />
      </div>

      <div className="dashboard-container">
        <div className="dashboard-form">
          <h2>User Dashboard</h2>
          <div className="user-image-container">
            <img
              src={user?.profileImage || '/icons.png'}
              alt="User Profile"
              className="user-image"
            />
          </div>

          <div className="partition-line"></div>

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

          <div className="action-buttons">
            <button onClick={() => setShowEditModal(true)}>Edit Profile</button>
            <button onClick={() => navigate('/rooms')}>Reservation</button>
            <button onClick={() => navigate('/about')}>Get Information</button>
            <button onClick={() => navigate('/contact')}>Give Feedback</button>
          </div>
        </div>

        <div className="dashboard-flashcard-container">
          <h3>Your Bookings</h3>
          <div className="dashboard-flashcard-grid">
            {bookings.map((booking, index) => (
              <div key={index} className="dashboard-flashcard">
                <p><strong>Booking ID:</strong> {booking.bookingId}</p>
                <p><strong>Room:</strong> {booking.roomId}</p>
                <p><strong>Date:</strong> {booking.check_in_date} to {booking.check_out_date}</p>
              </div>
            ))}
          </div>

          <h3>Your Feedbacks</h3>
          <div className="dashboard-flashcard-grid">
            {feedbacks.map((feedback, index) => (
              <div key={index} className="dashboard-flashcard">
                <p><strong>Feedback ID:</strong> {feedback.feedbackId}</p>
                <p><strong>Message:</strong> {feedback.comments}</p>
                <p><strong>Rating:</strong> {feedback.rating}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

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
                <button type="button" onClick={handleUpdate}>Update</button>
                <button type="button" onClick={() => setShowEditModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
