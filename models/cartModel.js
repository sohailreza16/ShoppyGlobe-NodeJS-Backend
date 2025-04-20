// importing necessary library
import mongoose from 'mongoose';

// cart schema with userId, productId, and quantity
const cartItemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
}, {
  timestamps: true,
});

// creating a model using product schema
const CartItem = mongoose.model('CartItem', cartItemSchema);
export default CartItem;
