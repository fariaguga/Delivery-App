const SaleModel = require('../database/models/sale');
const SalesProducts = require('../database/models/salesProducts');

console.log(SalesProducts);

class SaleService {
  constructor(model = SaleModel, relationModel = SalesProducts) {
    this.model = model;
    this.relationModel = relationModel;
  }

  async createSale(sale) {
    const newSale = await this.model.create(sale);

    if (!newSale) {
      return { message: 'sale not created' };
    }

    return newSale;
  }

  async createSalesProducts(products, saleId) {
    await Promise.all(
      products.map((p) => this.relationModel.create({
          saleId,
          productId: p.id,
          quantity: p.quantity,
        })),
    );
  }
}

module.exports = SaleService;
