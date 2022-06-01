const UserModel = require('../database/models/user');

class UserService {
  constructor(model = UserModel()) {
    this.model = model;
  }

  async checkUser(email, password) {
    const userFound = await this.model.findOne({ where: { email } });

    if (!userFound) {
      return null;
    }

    if (userFound.dataValues.password !== password) {
      return null;
    }

    return userFound;
  }
}

module.exports = UserService;
