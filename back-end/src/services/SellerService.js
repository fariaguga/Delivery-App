const SaleModel = require('../database/models/sale');
const { jwtValidate } = require('../utils/auth');

class SellerService {
  constructor(model = SaleModel) {
    this.model = model;
  }

  async checkSale(authorization) {
    const { data } = jwtValidate(authorization);
    const salesFound = await this.model.findAll({ where: { sellerId: data.id } });

    if (!salesFound) {
      return null;
    }

    return salesFound;
  }
}

module.exports = SellerService;
