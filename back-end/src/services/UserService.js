const md5 = require('md5');
const UserModel = require('../database/models/user');

class UserService {
  constructor(model = UserModel()) {
    this.model = model;
  }

  async checkUser(email, password) {
    const encryptedPass = md5(password);
    const userFound = await this.model.findOne({ where: { email } });

    if (!userFound) {
      return null;
    }

    if (userFound.dataValues.password !== encryptedPass) {
      return null;
    }

    return userFound;
  }

  async createUser(name, email, password) {
    const encryptedPass = md5(password);
    console.log(encryptedPass);
    console.log(password);
    const userFound = await this.model.findOne({ where: { email } });

    if (userFound) {
      return null;
    }
    const newUser = await this.model
      .create({ name, email, password: encryptedPass, role: 'customer' });
    if (!newUser) {
      return null;
    }

    return newUser;
  }
}

module.exports = UserService;
