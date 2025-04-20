// importing necessary model
import Product from '../models/productModel.js';

// function to fetch product data and upload it to MongoDB
async function fetchAndSeedData() {
  try {
    
// fetching the product data from dummyjson
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;

    // Transforming product data using map to match product schema
    const formattedProducts = products.map(prod => ({
      name: prod.title,
      image: prod.thumbnail,
      description: prod.description,
      category: prod.category,
      brand: prod.brand,
      rating:prod.rating,
      price: prod.price,
      stock: prod.stock,
      reviews: prod.reviews,
    }));

// clearing the product and uploading the seed data into MongoDB
    await Product.deleteMany({});
    await Product.insertMany(formattedProducts);
    console.log('✅ Seeding completed');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
  }
};

export default fetchAndSeedData;
