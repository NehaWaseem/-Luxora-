import pkg from 'mssql'; // Import the mssql package
const { connect } = pkg;

const config = {
  user: 'luxorauser', // SQL Server login username
  password: 'luxora6581', // SQL Server login password
  server: '192.168.18.24', // Replace with your server's address
  database: 'Luxora', // Replace with your database name
  options: {
    encrypt: false, // Set to true if using Azure
    trustServerCertificate: true, // For self-signed certificates
  },
  port: 1433, // Default SQL Server port
};

connect(config)
  .then(pool => {
    console.log('Connected to SQL Server using SQL Server Authentication');
    return pool.request().query('SELECT * FROM Users'); // Replace with your query
  })
  .then(result => {
    console.log(result.recordset);
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });


  