const Product = require('../modals/product');
const mongoose = require('mongoose');

exports.addProduct = async (req, res) => {
  let products = req.body;
  if (!Array.isArray(products)) {
    products = [products];
  }

  try {
    const product =await Product.insertMany(products);
    
    res.status(201).json({ message: 'Product added successfully', product });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


exports.getFilteredProducts = async (req, res) => {
  const { category, sort, search } = req.query;

  try {
    // Create a query object for filtering
    const query = {};
    if (category) {
      query.category = category; // Filter by category
    }
    if (search) {
      query.name = { $regex: search, $options: 'i' }; // Case-insensitive search in title
    }

    // Execute the query with sorting
    let products = Product.find(query);

    if (sort) {
      const sortOption = sort === 'asc' ? { price: 1 } : { price: -1 }; // Sort by price
      products = products.sort(sortOption);
    }

    const result = await products; // Execute the query
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};