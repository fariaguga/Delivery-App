const AdminService = require('../services/AdminService');
const { jwtValidate } = require('../utils/auth');

class AdminController {
  constructor(service = new AdminService()) {
    this.service = service;

    this.create = this.create.bind(this);
  }

  async create(req, res, _next) {
    try {
      const { authorization } = req.headers;
      jwtValidate(authorization);
      
      const { name, email, password, role } = req.body;
      const createdUser = await this.service.createUser(name, email, password, role); 

      if (!createdUser) {
        return res.status(409).json({ message: 'user not created' });
      }

      return res.status(201).json(createdUser);
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = AdminController;
