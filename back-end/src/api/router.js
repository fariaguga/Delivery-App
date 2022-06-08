const { Router } = require('express');
const AdminController = require('../controllers/AdminController');
const ProductController = require('../controllers/ProductController');
const SaleController = require('../controllers/SaleController');
const UserController = require('../controllers/UserController');
const getImage = require('../middlewares/Image');

const router = Router();

const adminController = new AdminController();
const userController = new UserController();
const saleController = new SaleController();
const productController = new ProductController();

router.post('/login', userController.login);
router.post('/register', userController.create);
router.get('/users', userController.findAll);

router.post('/sales', saleController.create);

router.post('/admin/manage', adminController.create);

router.get('/products', productController.findAll);

router.get('/images/*', getImage);

module.exports = router;
