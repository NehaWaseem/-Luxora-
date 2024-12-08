
//This is the main entry point for your app. It sets up middleware, routes, and starts the server


import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.js'; // Import auth routes

const app = express();

// Middleware
app.use(bodyParser.json()); // For parsing JSON bodies

// Routes
app.use('/api/auth', authRoutes); // Use the auth routes

// Server Setup
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

