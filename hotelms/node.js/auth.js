import express from 'express';
import cors from 'cors';
import pkg from 'mssql';
const { connect } = pkg;

const app = express();
const port = 3000;

// Middleware for parsing JSON data
app.use(express.json());
app.use(cors());

// Database connection configuration
const config = {
  user: 'luxorauser',
  password: 'luxora6581',
  server: '192.168.18.24',
  database: 'Luxora',
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
  port: 1433,
};

// User authentication route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const pool = await connect(config);
    const result = await pool.request()
      .input('username', pkg.NVarChar, username)
      .query('SELECT * FROM Users WHERE username = @username');

    if (result.recordset.length === 0) {
      return res.status(401).json({ message: 'User not found' });
    }

    const user = result.recordset[0];

    if (password === user.upassword) {
      return res.status(200).json({ 
        message: 'Login successful', 
        userId: user.userId // Include userId in the response
      });
    } else {
      return res.status(401).json({ message: 'Invalid password' });
    }
  } catch (err) {
    console.error('Error during authentication:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// User Registration route
app.post('/signup', async (req, res) => {
  const { username, email, upassword, uaddress, phonenum, dateofreg, usertype } = req.body;

  try {
    const pool = await connect(config);

    await pool.request()
      .input('username', pkg.NVarChar, username)
      .input('email', pkg.NVarChar, email)
      .input('upassword', pkg.NVarChar, upassword)
      .input('uaddress', pkg.NVarChar, uaddress)
      .input('phonenum', pkg.NVarChar, phonenum)
      .input('dateofreg', pkg.Date, dateofreg)
      .input('usertype', pkg.NVarChar, usertype)
      .query(`
        INSERT INTO Users (username, email, upassword, uaddress, phonenum, dateofreg, usertype)
        VALUES (@username, @email, @upassword, @uaddress, @phonenum, @dateofreg, @usertype)
      `);

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error('Error inserting user:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Backend API Endpoint to Get Available Rooms
// Backend API Endpoint to Get Available Rooms
app.get('/available-rooms', async (req, res) => {
  try {
    const pool = await connect(config);

    const result = await pool.request()
      .query(`
        SELECT r.roomId, r.rtype, r.roomcapacity, r.detail, r.priceperday, ar.status AS roomstatus
        FROM RoomInfo r
        JOIN AvailableRooms ar ON r.roomId = ar.roomId
        WHERE ar.status = 'available'
      `);

    res.status(200).json(result.recordset); // Send only rooms with 'available' status
  } catch (err) {
    console.error('Error fetching available rooms:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint for getting the booking id 
app.get('/max-booking-id', async (req, res) => {
  try {
    const pool = await connect(config);
    const result = await pool.request()
      .query('SELECT MAX(bookingId) AS maxBookingId FROM Booking');
    const maxBookingId = result.recordset[0].maxBookingId || 0; // Default to 0 if no bookings exist
    res.json({ maxBookingId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching max booking ID' });
  }
});

// Endpoint for reservation 
app.post('/create-booking', async (req, res) => {
  const { userId, roomId, bookingStatus, check_in_date, check_out_date } = req.body;

  try {
    const pool = await connect(config);

    await pool.request()
      .input('userId', pkg.Int, userId)
      .input('roomId', pkg.Int, roomId)
      .input('bookingStatus', pkg.NVarChar, bookingStatus)
      .input('check_in_date', pkg.Date, check_in_date)
      .input('check_out_date', pkg.Date, check_out_date)
      .query(`
        INSERT INTO Booking (userId, roomId, bookingStatus, check_in_date, check_out_date)
        VALUES (@userId, @roomId, @bookingStatus, @check_in_date, @check_out_date)
      `);

    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Error creating booking' });
  }
});

// Endpoint to submit feedback
app.post('/submit-feedback', async (req, res) => {
  const { userID, bookingID, comments, rating, createdDate } = req.body;

  try {
    const pool = await connect(config);

    await pool.request()
      .input('userID', pkg.Int, userID)
      .input('bookingID', pkg.Int, bookingID)
      .input('comments', pkg.NVarChar, comments)
      .input('rating', pkg.Int, rating)
      .input('createdDate', pkg.DateTime, createdDate)
      .query(`
        INSERT INTO Feedback (userID, bookingID, comments, rating, createdDate)
        VALUES (@userID, @bookingID, @comments, @rating, @createdDate)
      `);

    res.status(200).json({ message: 'Feedback submitted successfully' });
  } catch (err) {
    console.error('Error submitting feedback:', err);
    res.status(500).json({ message: 'Error submitting feedback' });
  }
});

// Endpoint to get user details by userId
// Fetch user details by userId
app.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const pool = await connect(config);

    const result = await pool.request()
      .input('userId', pkg.Int, userId)
      .query(`
        SELECT userId, username, email, phonenum AS phone, uaddress AS address
        FROM Users
        WHERE userId = @userId
      `);

    if (result.recordset.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(result.recordset[0]);
  } catch (err) {
    console.error('Error fetching user details:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Endpoint to update user details
app.put('/update-user', async (req, res) => {
  const { userId, username, email, phone, address } = req.body;

  // Validate required fields
  if (!userId || !username || !email || !phone || !address) {
    return res.status(400).json({
      message: 'All fields (userId, username, email, phone, address) are required.',
    });
  }

  try {
    const pool = await connect(config);

    console.log('Update User Request Body:', req.body); // Debugging log

    // Update user details in the database
    const result = await pool.request()
      .input('userId', pkg.Int, userId)
      .input('username', pkg.NVarChar, username)
      .input('email', pkg.NVarChar, email)
      .input('phone', pkg.NVarChar, phone)
      .input('address', pkg.NVarChar, address)
      .query(`
        UPDATE Users
        SET username = @username,
            email = @email,
            phonenum = @phone,
            uaddress = @address
        WHERE userId = @userId
      `);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ message: 'User not found or no changes made.' });
    }

    res.status(200).json({ message: 'User details updated successfully' });
  } catch (err) {
    console.error('Error updating user details:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
