// routes/index.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route pour l'édition d'un produit
router.get('/add', productController.add);
router.post('/create', productController.create);
router.get('/list', productController.list);
router.get('/edit/:id', productController.edit);
router.post('/update', productController.update);
router.delete('/delete/:id', productController.delete);

module.exports = router;