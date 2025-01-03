import express from 'express';
import cors from 'cors'; // Import the cors package
import pkg from 'mssql'; // Importing mssql
const { connect } = pkg;

const app = express();
const port = 3000;

// Middleware for parsing JSON data
app.use(express.json());

// Enable CORS for all origins (for development purposes)
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
    // Establish a connection with the database
    const pool = await connect(config);

    // Query the database for the user by username
    const result = await pool.request()
      .input('username', pkg.NVarChar, username)
      .query('SELECT * FROM Users WHERE username = @username');

    // Check if user exists
    if (result.recordset.length === 0) {
      return res.status(401).json({ message: 'User not found' });
    }

    const user = result.recordset[0];

    // Directly compare the password (not using bcrypt)
    if (password === user.upassword) {
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ message: 'Invalid password' });
    }
  } catch (err) {
    console.error('Error during authentication:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to insert a new user
app.post('/signup', async (req, res) => {
    const { username, email, upassword, uaddress, phonenum, dateofreg, usertype } = req.body;
  
    try {
      // Establish a connection with the database
      const pool = await connect(config);
  
      // Get the max userId from the database
      const maxIdResult = await pool.request().query('SELECT MAX(userId) AS maxId FROM Users');
      const maxId = maxIdResult.recordset[0].maxId || 0; // Default to 0 if no records exist
      const newUserId = maxId + 1;
  
      // Insert the new user into the Users table
      await pool.request()
        .input('userId', pkg.Int, newUserId)
        .input('username', pkg.NVarChar, username)
        .input('email', pkg.NVarChar, email)
        .input('upassword', pkg.NVarChar, upassword)
        .input('uaddress', pkg.NVarChar, uaddress)
        .input('phonenum', pkg.NVarChar, phonenum)
        .input('dateofreg', pkg.Date, dateofreg)
        .input('usertype', pkg.NVarChar, usertype)
        .query(
          `INSERT INTO Users (userId, username, email, upassword, uaddress, phonenum, dateofreg, usertype)
           VALUES (@userId, @username, @email, @upassword, @uaddress, @phonenum, @dateofreg, @usertype)`
        );
  
      // Respond with success
      res.status(201).json({ message: 'User created successfully', userId: newUserId });
    } catch (err) {
      console.error('Error inserting user:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
