import pkg from 'mssql'; // Import the CommonJS module
const { connect } = pkg; // Destructure the `connect` function

const config = {
  server: 'DESKTOP-OETNA05', // Server name
  database: 'Luxora', // Replace with your database name
  options: {
    instanceName: 'SQLEXPRESS', // Named instance
    encrypt: false, // Set to true if using Azure
    trustServerCertificate: true, // For self-signed certificates
  },
  port: 1433, // Ensure this matches the SQL Server port
  authentication: {
    type: 'default', // Use Windows Authentication
    options: {
      trustedConnection: true, // Enables trusted connection
    },
  },
};

connect(config)
  .then(pool => {
    console.log('Connected to SQL Server using Windows Authentication');
    return pool.request().query('SELECT * FROM Users'); // Example query
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });
