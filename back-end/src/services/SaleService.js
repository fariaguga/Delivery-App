const SaleModel = require('../database/models/sale');

class SaleService {
  constructor(model = SaleModel()) {
    this.model = model;
  }

  async createSale(sale) {
    const newSale = await this.model.create(sale);

    if (!newSale) {
      return null;
    }

    return {
      id: newSale.id,
      userId: newSale.dataValues.userId,
      sellerId: newSale.dataValues.sellerId,
      totalPrice: newSale.dataValues.totalPrice,
      deliveryAddress: newSale.dataValues.deliveryAddress,
      deliveryNumber: newSale.dataValues.deliveryNumber,
      saleDate: newSale.dataValues.saleDate,
      status: newSale.dataValues.status,
    };
  }
}

module.exports = SaleService;
