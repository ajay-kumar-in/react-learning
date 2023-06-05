"use strict"

const productController = require('./../controllers/productController');
const auth = require('../middlewares/auth');

const router = require('express').Router();
const extractFile = require('../middlewares/check-img-mime-type');
const middleErrMsg = require('../config/errorMsg');

router.post('/new', extractFile, productController.addProduct, middleErrMsg);

// router.post('', auth, extractFile, productController.addProduct, middleErrMsg);
router.get('/all', auth, productController.getProducts);
router.get('/:id', auth, productController.getProduct);
router.put('/:id', auth, extractFile, productController.editProduct);
router.delete('/:id', auth, productController.deleteProduct);



module.exports = router;