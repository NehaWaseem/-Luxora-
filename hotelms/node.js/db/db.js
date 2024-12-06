import pkg from 'mssql'; // Import the mssql package
const { ConnectionPool } = pkg;

// SQL Server configuration
const config = {
  user: 'luxorauser', // SQL Server login username
  password: 'luxora6581', // SQL Server login password
  server: '192.168.56.1', // Replace with your server's address
  database: 'Luxora', // Replace with your database name
  options: {
    encrypt: false, // Set to true if using Azure
    trustServerCertificate: true, // For self-signed certificates
  },
  port: 1433, // Default SQL Server port
};

// Create a single connection pool instance
const pool = new ConnectionPool(config);

// Connect to the database and export the pool instance
const connectToDB = async () => {
  try {
    const connectedPool = await pool.connect();
    console.log('Connected to SQL Server using SQL Server Authentication');
    return connectedPool;
  } catch (err) {
    console.error('Database connection failed:', err);
    throw err; // Rethrow error for visibility
  }
};

export default connectToDB;
