const SaleModel = require('../database/models/sale');
const { jwtValidate } = require('../utils/auth');

class CustomerService {
  constructor(model = SaleModel) {
    this.model = model;
  }

  async checkOrder(authorization) {
    const { data } = jwtValidate(authorization);
    const orderFound = await this.model.findAll({ where: { userId: data.id } });

    if (!orderFound) {
      return null;
    }

    return orderFound;
  }
}

module.exports = CustomerService;
