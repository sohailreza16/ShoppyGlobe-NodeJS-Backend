// importing necessary library
import mongoose from 'mongoose';

// product schema with name, image, description, category, brand, rating, price, stock and reviews
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  brand: {
    type: String,
    default: "No Brand",
    trim: true,
  },
  rating: {
    type: Number,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  reviews: {
    type: Array,
    default: [],
  },
}, {
  timestamps: true,
});

// creating a model using product schema
const Product = mongoose.model('Product', productSchema);
export default Product;
