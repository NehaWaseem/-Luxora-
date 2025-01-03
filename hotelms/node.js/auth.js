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
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ message: 'Invalid password' });
    }
  } catch (err) {
    console.error('Error during authentication:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// User signup route
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
      .query(
        `INSERT INTO Users (username, email, upassword, uaddress, phonenum, dateofreg, usertype)
         VALUES (@username, @email, @upassword, @uaddress, @phonenum, @dateofreg, @usertype)`
      );

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error('Error inserting user:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
