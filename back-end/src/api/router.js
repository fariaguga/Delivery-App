const { Router } = require('express');
const ProductController = require('../controllers/ProductController');
const UserController = require('../controllers/UserController');
const getImage = require('../middlewares/Image');

const router = Router();

const userController = new UserController();
const productController = new ProductController();

router.post('/login', userController.login);
router.post('/register', userController.create);
router.get('/products', productController.findAll);
router.get('/images/*', getImage);

module.exports = router;
