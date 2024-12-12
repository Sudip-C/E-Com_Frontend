const express = require('express');
const { addProduct,getAllProducts,getFilteredProducts} = require('../controllers/productControllers')

const router = express.Router();

router.post('/addProduct', addProduct);
router.get('/getProduct', getAllProducts);
router.get('/filter', getFilteredProducts);


module.exports = router;