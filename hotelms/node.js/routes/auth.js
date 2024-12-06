import express from 'express';
import { login, signup } from '../controllers/authController.js'; // Import controllers

const router = express.Router();

// Route for Login
router.post('/Login', login);

// Route for Signup
router.post('/SignUp', signup);

export default router;
