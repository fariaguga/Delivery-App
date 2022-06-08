const { Router } = require('express');
const ProductController = require('../controllers/ProductController');
const UserController = require('../controllers/UserController');
const SellerController = require('../controllers/SellerController')
const getImage = require('../middlewares/Image');

const router = Router();

const userController = new UserController();
const productController = new ProductController();
const sellerController = new SellerController();

router.post('/login', userController.login);
router.post('/register', userController.create);
router.get('/products', productController.findAll);
router.get('/images/*', getImage);
router.get('/seller', sellerController.getAll);

module.exports = router;
