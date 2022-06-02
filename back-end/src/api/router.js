const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

const userController = new UserController();

router.post('/login', userController.login);

module.exports = router;
