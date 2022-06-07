const md5 = require('md5');
const UserModel = require('../database/models/user');
const { jwtGenerator } = require('../utils/auth');

class AdminService {
  constructor(model = UserModel()) {
    this.model = model;
  }
  
  async createUser(name, email, password, role) {
    const encryptedPass = md5(password);
    const userFound = await this.model.findOne({ where: { email } });

    if (userFound) {
      return null;
    }
    const newUser = await this.model
      .create({ name, email, password: encryptedPass, role });
    if (!newUser) {
      return null;
    }

    return newUser;
  }
}

module.exports = AdminService;
