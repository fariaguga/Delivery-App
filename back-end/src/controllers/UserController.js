const UserService = require('../services/UserService');

class UserController {
  constructor(service = new UserService()) {
    this.service = service;

    this.login = this.login.bind(this);
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
}

module.exports = UserController;
