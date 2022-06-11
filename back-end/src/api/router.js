const { Router } = require('express');
const AdminController = require('../controllers/AdminController');
const ProductController = require('../controllers/ProductController');
const SaleController = require('../controllers/SaleController');
const UserController = require('../controllers/UserController');
const SellerController = require('../controllers/SellerController');
const getImage = require('../middlewares/Image');
const CustomerController = require('../controllers/CustomerController');

const router = Router();

const adminController = new AdminController();
const userController = new UserController();
const saleController = new SaleController();
const productController = new ProductController();
const sellerController = new SellerController();
const customerController = new CustomerController();

router.post('/login', userController.login);
router.post('/register', userController.create);
router.get('/users', userController.findAll);

router.post('/sales', saleController.create);

router.post('/admin/manage', adminController.create);

router.get('/products', productController.findAll);

router.get('/images/*', getImage);
router.get('/seller/orders', sellerController.getAll);
router.get('/seller/order/:id', saleController.findOne);
router.patch('/seller/order/:id', saleController.updateStatus);
router.get('/customer/orders', customerController.getAll);

module.exports = router;
