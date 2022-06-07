const SaleModel = require('../database/models/sale');

class SaleService {
  constructor(model = SaleModel()) {
    this.model = model;
  }

  async createSale(sale) {
    const newSale = await this.model.create(sale);

    if (!newSale) {
      console.log('sale not created');
      return { message: 'sale not created' };
    }

    return newSale;
  }
}

module.exports = SaleService;
