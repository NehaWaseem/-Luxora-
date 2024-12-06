import bcrypt from 'bcrypt';
import connectToDB from '../db/db.js'; // Import the connection pool

// Login Function
export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const pool = await connectToDB(); // Get the database connection
    const result = await pool.request()
      .input('username', pkg.NVarChar, username)
      .query('SELECT * FROM Users WHERE username = @username');

    if (result.recordset.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = result.recordset[0];
    const isMatch = await bcrypt.compare(password, user.upassword);
    if (!isMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    res.json({ message: 'Login successful', username: user.username });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Signup Function
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const pool = await connectToDB(); // Get the database connection

    const existingUser = await pool.request()
      .input('username', pkg.NVarChar, username)
      .query('SELECT * FROM Users WHERE username = @username');

    if (existingUser.recordset.length > 0) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.request()
      .input('username', pkg.NVarChar, username)
      .input('email', pkg.NVarChar, email)
      .input('upassword', pkg.NVarChar, hashedPassword)
      .query('INSERT INTO Users (username, email, upassword) VALUES (@username, @email, @upassword)');

    res.json({ message: 'Signup successful, user added' });
  } catch (err) {
    console.error('Error during signup:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
