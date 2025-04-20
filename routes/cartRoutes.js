// importing necessary library, controllers, and middleware
import express from 'express';
import {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
  emptyCart
} from '../controllers/cartController.js';
import protect from '../middlewares/authMiddleware.js';

// initializing a router instance
const router = express.Router();

// protecting all routes using the authentication middleware protect
router.use(protect);

// api for GET /api/cart
router.get('/', getCart);

// api for POST /api/cart
router.post('/', addToCart);

// api for PUT /api/cart/:productId
router.put('/:productId', updateCartItem);

// api for DELETE /api/cart/:productId
router.delete('/:productId', removeCartItem);

// api for DELETE /api/cart
router.delete('/', emptyCart);

export default router;
