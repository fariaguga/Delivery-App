const SaleModel = require('../database/models/sale');

class SellerService {
  constructor(model = SaleModel()) {
    this.model = model;
  }

  async checkSale(sale_id) {
    const salesFound = await this.model.findByPk({  sale_id  });

    if (!salesFound) {
      return null;
    }

    return salesFound;
  }

}

module.exports = SellerService;
