const ProductModel = require('../database/models/product');

class UserService {
  constructor(model = ProductModel) {
    this.model = model;
  }

  async findAll() {
    const allProducts = await this.model.findAll();

    return allProducts;
  }
}

module.exports = UserService;
