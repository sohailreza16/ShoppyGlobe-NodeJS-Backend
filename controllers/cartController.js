// importing necessary models
import CartItem from '../models/cartModel.js';
import Product from '../models/productModel.js';

// controller for getting the cart items from MongoDB
export const getCart = async (req, res) => {
  try {
    const cartItems = await CartItem.find({ user: req.user.id }).populate('product');
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// controller for adding an item in the cart
export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const existing = await CartItem.findOne({ user: req.user.id, product: productId });

    if (existing) {
      if(existing.quantity < product.stock)
        existing.quantity += quantity;
      else return res.json({message: "stock limit reached"});
      await existing.save();
      return res.json(existing);
    }

    const newItem = new CartItem({ user: req.user.id, product: productId, quantity });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// controller for updating the quantity of a cart item
export const updateCartItem = async (req, res) => {
  const { quantity } = req.body;
  try {
    const item = await CartItem.findOneAndUpdate(
      { user: req.user._id, product: req.params.productId },
      { quantity },
      { new: true }
    );
    if (!item) return res.status(404).json({ message: 'Item not found in cart' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// controller for removing an item from the cart
export const removeCartItem = async (req, res) => {
  try {
    const deleted = await CartItem.findOneAndDelete({
      user: req.user.id,
      product: req.params.productId,
    });
    if (!deleted) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item removed from cart' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// controller for clearing the cart
export const emptyCart = async (req, res) => {
  try {
    const deleted = await CartItem.deleteMany({
      user: req.user.id,
    });
    if (!deleted) return res.status(404).json({ message: 'Cart already empty' });
    res.json({ message: 'Cart is now empty' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};