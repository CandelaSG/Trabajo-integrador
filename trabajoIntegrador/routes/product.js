const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/id/:id', productController.show);

router.get('/add', productController.add);
router.post('/add', productController.storeProduct);

router.get("/update/:id", productController.formUpdate);
router.post("/update/:id", productController.updatePost);

router.get('/search', productController.search);

router.post('/comentario/:id', productController.storeComentario)
module.exports = router;
