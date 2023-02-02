const express = require('express');
const {
  getProducts,
  createProducts,
  updateProducts,
} = require('../../controllers/product.controllers');
const router = express.Router();

router.route('/').get(getProducts).post(createProducts);
router.route('/:id').patch(updateProducts);

module.exports = router;
