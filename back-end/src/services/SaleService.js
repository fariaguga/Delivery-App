const SaleModel = require('../database/models/sale');

class SaleService {
  constructor(model = SaleModel()) {
    this.model = model;
  }

  async createSale(sale) {
    console.log('-------------------------------------------------');
    console.log(sale);
    const newSale = await this.model.create(sale);

    if (!newSale) {
      console.log('sale not created');
      return { message: 'sale not created' };
    }

    console.log('-----------------------------------------------');
    console.log(newSale);
    console.log('-----------------------------------------------');

    return newSale;
  }
}

module.exports = SaleService;
