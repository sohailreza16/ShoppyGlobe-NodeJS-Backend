// importing necessary library and controllers
import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

// initializing a router instance
const router = express.Router();

// api for POST /api/register
router.post('/register', registerUser);

// api for POST /api/login
router.post('/login', loginUser);

export default router;
