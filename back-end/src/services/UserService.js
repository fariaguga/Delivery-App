const md5 = require('md5');
const UserModel = require('../database/models/user');
const { jwtGenerator } = require('../utils/auth');

class UserService {
  constructor(model = UserModel) {
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

    const payload = {
      id: userFound.dataValues.id,
      email: userFound.dataValues.email,
      name: userFound.dataValues.name,
      role: userFound.dataValues.role,
    };

    const token = jwtGenerator(payload);
    return { ...payload, token };
  }

  async createUser(name, email, password) {
    const encryptedPass = md5(password);
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

  async findAll() {
    const allUsers = await this.model.findAll();

    return allUsers;
  }
}

module.exports = UserService;
