const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/id/:id', productController.show);
router.get('/add', productController.add);
module.exports = router;