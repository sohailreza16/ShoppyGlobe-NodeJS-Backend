// importing necessary library
import mongoose from 'mongoose';

// user schema with username, password, name, email, city and mobile
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  mobile: {
    type: String,
    required: true,
    trim: true,
  }
}, {
  timestamps: true,
});

// creating a model using product schema
const User = mongoose.model('User', userSchema);
export default User;
