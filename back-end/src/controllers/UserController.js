const UserService = require('../services/UserService');

class UserController {
  constructor(service = new UserService()) {
    this.service = service;

    this.login = this.login.bind(this);
    this.create = this.create.bind(this);
    this.findAll = this.findAll.bind(this);
  }

  async login(req, res, _next) {
    try {
      const { email, password } = req.body;
      const serviceResponse = await this.service.checkUser(email, password);

      if (!serviceResponse) {
        return res.status(404).json({ message: 'not found' });
      }

      return res.status(200).json(serviceResponse);
    } catch (e) {
      console.error(e);
      // next(e);
    }
  }

  async create(req, res, _next) {
    try {
      const { name, email, password } = req.body;
      const createdUser = await this.service.createUser(name, email, password);

      if (!createdUser) {
        return res.status(409).json({ message: 'user not created' });
      }

      return res.status(201).json(createdUser);
    } catch (e) {
      console.error(e);
      // next(e);
    }
  }

  async findAll(_req, res, _next) {
    try {
      const serviceResponse = await this.service.findAll();

      return res.status(200).json(serviceResponse);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserController;
