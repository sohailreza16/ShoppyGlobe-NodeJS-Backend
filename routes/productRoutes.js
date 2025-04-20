// importing necessary library and controllers
import express from 'express';
import { getAllProducts, getProductById } from '../controllers/productController.js';

// initializing a router instance
const router = express.Router();

// api for GET /api/products
router.get('/', getAllProducts);

// api for GET /api/products/:id
router.get('/:id', getProductById);

export default router;
