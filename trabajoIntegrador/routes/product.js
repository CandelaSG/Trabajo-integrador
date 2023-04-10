const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/id/:id', productController.show);
router.get('/add', productController.add);
router.get('/search', productController.search);
module.exports = router;