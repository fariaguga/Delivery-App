const { Router } = require('express');
const ProductController = require('../controllers/ProductController');
const SaleController = require('../controllers/SaleController');
const UserController = require('../controllers/UserController');
const getImage = require('../middlewares/Image');

const router = Router();

const userController = new UserController();
const productController = new ProductController();
const saleController = new SaleController();

router.post('/login', userController.login);
router.post('/register', userController.create);
router.post('/sales', saleController.create);
router.get('/products', productController.findAll);
router.get('/users', userController.findAll);
router.get('/images/*', getImage);

module.exports = router;
