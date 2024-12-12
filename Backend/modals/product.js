const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String, required: true },
  inStock: { type: Number, default: 1 },
});

module.exports = mongoose.model('E_Com_Product', productSchema);