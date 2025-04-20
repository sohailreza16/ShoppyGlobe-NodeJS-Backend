// importing necessary libraries and config functions and routes
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import fetchAndSeedData from './config/seedData.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import authRoutes from './routes/authRoutes.js';

// loading env vars
dotenv.config();

// creating a new express application
const app = express();

// using cors and express.json middleware
app.use(cors());
app.use(express.json());

// using the routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api', authRoutes);

// connecting to DB and start server
connectDB();

// fetching and seeding the products data
fetchAndSeedData();

// allotting port to the server to run
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
