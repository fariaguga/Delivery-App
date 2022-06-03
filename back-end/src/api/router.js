const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

const userController = new UserController();

router.post('/login', userController.login);
router.post('/register', userController.create);

router.get('/seller/:seller_id', sellerController.getAll);

module.exports = router;
